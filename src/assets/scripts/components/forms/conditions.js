import { $ } from "Utilities/selector"
import LoadManager, {QUEUE} from "Tools/load-manager"
import ComponentManager from "Tools/component-manager"

const operators = {
  is(target, value){
    return target == value
  },
  isNot(target, value) {
    return target != value
  },
  greaterThen(target, value) {
    let a = parseInt(target);
    let b = parseInt(value)
    if ( a && b ) {
      return a > b;
    } else {
      return target.length > value.length;
    }
  },
  lessThen(target, value) {
    let a = parseInt(target);
    let b = parseInt(value)
    if ( a && b ) {
      return a < b;
    } else {
      return target.length < value.length;
    }
  },
  startsWith(target, value) {
    return target.startsWith(value)
  },
  endsWith(target, value) {
    return target.endsWith(value)
  },
  contains(target, value) {
    return target.includes(value)
  }
}

const fieldTypes = ["INPUT", "SELECT", "TEXTAREA"];

let fieldSelector = fieldTypes.join(",");

const observerOptions = {
  childList: true,
  subtree: true
}

class FormConditions {
    // Get Values from fields and RadioNodeLists (containing either radios or checkboxes)
    static getFieldValue(field) {
      if ( typeof field.length == "undefined" || field.tagName == "SELECT" )
        return field.value;
  
      let len = field.length;
  
      if ( field[0].type == "radio" ) {
  
        for (var i = 0; i < len; i++) {
          var el = field[i];
          if (el.checked)
            return el.value;
        }
  
      } else {
  
        var rtn = "";
        for (var i = 0; i < len; i++) {
          var el = field[i];
          if (el.checked)
            rtn += rtn.length ? "," + el.value : el.value;
        }
        return rtn;
  
      }
      return "";
    }
  
    static show(condition) {
      condition.el.style.display = "block";
      condition.visibleFields.forEach(FormConditions.enableField);
    }
  
    static hide(condition) {
      condition.el.style.display = "none";
      condition.visibleFields.forEach(x => {
        FormConditions.resetField(x);
        FormConditions.disableField(x);
        x.dispatchEvent(FormConditions.createChangeEvent())
      });
    }
  
    static isField(el) {
      return fieldTypes.includes(el.tagName);
    }
  
    static resetField(el) {
      switch (el.type) {
        case "checkbox":
        case "radio":
          el.checked = false;
          break;
        default:
          el.value = el.children.length ? el.children[0].value : "";
      }
    }
  
    static enableField(el) {
      el.removeAttribute("disabled");
    }
  
    static disableField(el) {
      el.setAttribute("disabled", true);
    }
  
    static isVisibleField(el) {
      return el.type !== "hidden";
    }
  
    static getJsonAttribute(el, name) {
      return JSON.parse(el.getAttribute("data-" + name));
    }
  
    static createChangeEvent() {
      return new CustomEvent("change", {
        bubbles: true
      });
    }

  constructor(el) {
    if ( ! el ) return;
    this.el = el;

    // Get fields with conditions
    this.fields = [...$("[data-condition]", this.el)];

    if ( ! this.fields.length )
      return;

    // Build list of all fields
    this.fieldDictionary = [...el.elements]
      .reduce((fields, field) => {
        if ( fields[field.name] ) {
          if ( Array.isArray(fields[field.name]) ) {
            fields[field.name].push(field);
          } else {
            fields[field.name] = [fields[field.name], field]
          }
        } else {
          fields[field.name] = field;
        }
        return fields;
      }, {});

    // Build condition list
    this.conditions = this.fields.map(el => {
      let fields = [...$(fieldSelector, el)];
      return {
        el,
        fields,
        condition: FormConditions.getJsonAttribute(el, "condition"),
        rules: FormConditions.getJsonAttribute(el, "rules"),
        visibleFields: fields.filter(FormConditions.isVisibleField)
      };
    })

    // Bindings
    this.change = this.change.bind(this);
    this.evaluateCondition = this.evaluateCondition.bind(this);

    // Watch for new elements being added
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(this.handleMutation);
    })

    // Add all fields to observer
    this.fields.forEach(el => this.observer.observe(el, observerOptions));

    // Prepare conditions
    this.conditions.forEach(this.evaluateCondition);

    // Listen to change events
    this.el.addEventListener("change", this.change, true)
    this.el.addEventListener("changed", this.change, true)
  }

  change(e) {
    this.update(e.target);
  }

  update(target) {
    let affected = this.conditions.filter( c => c.rules.some(r => r.field === target.name) );
    affected.forEach(this.evaluateCondition)
  }

  // This should evaluate conditions and then show/hide the associated elements.
  evaluateCondition(condition) {
    let logic = condition.condition.logicType === "any" ? "some" : "every";
    let conditionMet = condition.rules[logic](r => {
      return operators[r.Operator](FormConditions.getFieldValue(this.fieldDictionary[r.field]), r.value)
    });

    let actionType = condition.condition.actionType;
    let action = conditionMet ? actionType : actionType === "hide" ? "show" : "hide";

    FormConditions[action](condition);
  }

  // Track any newly added fields
  // Ensures fields are toggled correctly, even if added dynamically
  // This is so that we can handle dynamic input types which add elements
  // e.g. calendars
  handleMutation(mutation) {
    if ( mutation.type != "childList" || ! mutation.addedNodes.length )
      return;

    let nodes = [...mutation.addedNodes];

    if ( ! nodes.some(FormConditions.isField) )
      return;

    // Find condition for existing fieldset
    let fieldset = mutation.target.getAttribute("data-fieldset");
    let condition = this.conditions.find(x => x.el.id == fieldset);

    if ( ! condition )
      return;

    // Add new elements to condition
    nodes.filter(FormConditions.isField)
      .forEach(field => {
        condition.fields.push(field);

        if ( FormConditions.isVisibleField(field) ) {
          condition.visibleFields.push(field);
        }
      })
  }
}

export default LoadManager.queue(() => (
  new ComponentManager(FormConditions, "[data-js~=conditions]")
), QUEUE.DOM)
