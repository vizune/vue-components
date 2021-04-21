import validate from "validate.js";
import { $, $1, closest } from "Utilities/selector";
import { scrollTo } from "Utilities/scrollto";
import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";


const ObserverOptions = {
  attributes: true,
  attributeFilter: ["style"]
};

export class FormValidator {
  constructor(el) {
    this.el = el;

    // Get all fields to validate
    this.controls = [...$("[data-val]", el)];
    this.actions = [...$("[type=submit]", el)];
    this.fields = this.controls.reduce(FormValidator.getFields, {});

    // Get conditional fields - these will affect the constraints
    this.conditionals = [...$("[data-condition]", el)];

    // Bindings
    // this.conditionChange = this.conditionChange.bind(this);
    this.validate = this.validate.bind(this);

    // Defaults
    this.liveCheck = 0;

    // Setup
    this.updateConstraints();

    this.headerEl = $1("[data-id=Site-header]");

    // Observer to watch for constraint changes
    this.observer = new MutationObserver(() => {
      this.updateConstraints();

      if ( this.liveCheck )
        this.validate();
    });

    this.conditionals.forEach(el => {
      this.observer.observe(el, ObserverOptions)
    })


    // Bind events
    this.bind();
  }

  updateConstraints() {
    this.constraints = this.controls.reduce(FormValidator.getConstraint, {});
  }

  bind() {
    this.el.addEventListener("submit", this.validate, true);
  }

  enableLiveCheck() {
    this.liveCheck = 1;
    this.controls.forEach(el => {
      el.addEventListener("blur", this.validate);
      el.addEventListener("change", this.validate);
    });
  }

  validate(e) {
    if ( ! this.liveCheck )
      this.enableLiveCheck();

    this.results = validate(this.el, this.constraints);

    this.reset();

    if ( this.results ) {
      if ( e && e.type == "submit" && e.preventDefault ) {
        e.preventDefault();
        e.stopPropagation();
      }

      this.errors();
      this.el.classList.remove('is-valid');
      this.el.classList.add('is-invalid');
      
    } else {
      this.el.classList.remove('is-invalid');
      this.el.classList.add('is-valid');
      // Success handlers here, e.g. analytics
      //dataLayer.push({"event": this.el.getAttribute("data-name")});
    }
  }

  reset() {
    Object.keys(this.fields)
      .map(x => this.fields[x])
      .filter(x => x.hasError)
      .forEach(FormValidator.clear);
  }

  errors() {
    let keys = Object.keys(this.results);
    keys
      .map(x => ({error: this.results[x], field: this.fields[x]}))
      .forEach(FormValidator.error);

    let first = Object.keys(this.results)[0];
    scrollTo(this.fields[first].container, FormValidator.getOffset(this.headerEl));
  }

  static getOffset(el) {
    let offset = parseInt(el.offsetHeight);
    return -offset;
  }

  static error({error, field}) {
    field.hasError = true;
    field.error.innerHTML = error;
    field.container.insertBefore(field.error, field.container.children[1]);
    field.inputs.forEach(x => x.classList.add("is-invalid"));
    field.inputs.forEach(x => x.classList.remove("is-valid"));
  }

  static clear(field) {
    field.hasError = false;
    field.container.removeChild(field.error);
    field.inputs.forEach(x => x.classList.remove("is-invalid"));
    field.inputs.forEach(x => x.classList.add("is-valid"));
  }

  static getFields(fields, field) {
    const name = field.name || field.getAttribute("name");

    if ( typeof fields[name] === "undefined" ) {
      let container = FormValidator.getContainer(field);
      if ( !container ) 
        return fields;

      let type = FormValidator.getType(field);
      let error = $1(".Form-error", container);
      
      fields[name] = {
        container,
        inputs: [],
        hasError: !!error,
        type,
        error: error || FormValidator.createError(type)
      };
    }

    fields[name].inputs.push(field);

    return fields;
  }

  static getType(control) {
    return control.type || control.tagName.toLowerCase();
  }

  static getConstraint(constraints, field) {
    const name = field.name || field.getAttribute("name");

    constraints[name] = {};

    // Don't try to validate disabled fields
    if ( field.hasAttribute("disabled") )
      return constraints;

    // Required Validation
    if ( FormValidator.isRequired(field) ) {
      let msg = FormValidator.getMessage(field);

      constraints[name].presence = {
        allowEmpty: false
      }

      if ( msg ) {
        constraints[name].presence.message = `^${msg}`
      }
    }

    // Regex Validation
    if ( field.hasAttribute("data-val-regex") ) {
      constraints[name].format = {
        pattern: field.getAttribute("data-regex"),
        message: "^" + field.getAttribute("data-val-regex")
      };
    }

    // Matches Validation
    if ( field.hasAttribute("data-match") ) {
      constraints[name].equality = {
        attribute: field.getAttribute("data-match"),
        comparator: FormValidator.equalityComparator
      };
      if ( field.hasAttribute("data-match-error") ) {
        constraints[name].equality.message =
          "^" + field.getAttribute("data-match-error")
      }
    }

    return constraints;
  }

  static isRequired(field) {
    return field.hasAttribute("data-val-required") ||
      field.hasAttribute("data-val-requiredlist");
  }

  static getMessage(field) {
    return field.getAttribute("data-val-required") ||
      field.getAttribute("data-val-requiredlist");
  }

  static createError(type) {
    let el = document.createElement("span");
    el.className = "Form-error";
    if ( type ) {
      el.className += ` Form-error--${type}`;
    }
    return el;
  }

  static getContainer(el) {
    return closest(".Form-control", el);
  }

  static enableAction(el) {
    el.disabled = false;
  }

  static disableAction(el) {
    el.disabled = true;
  }

  static equalityComparator(a, b) {
    if (!a || !b) return;
    return a.toLowerCase() === b.toLowerCase();
  }
}

export default LoadManager.queue(() => (
  new ComponentManager(FormValidator, "[data-js~=validator]")
), QUEUE.DOM);
