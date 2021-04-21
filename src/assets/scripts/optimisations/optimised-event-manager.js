const generateId = () => (
  Math.random().toString(36).substring(2) +
    (new Date()).getTime().toString(36)
)

class OptimisedEventManager {
  // Properties
  events = []
  defaults = {
    priority: 10,
    min: 0,
    max: Infinity
  }

  constructor({func, event, newEvent, obj, rate}) {
    // Store event names
    this.event = event;
    this.newEvent = newEvent;
    this.obj = obj || window;

    // Create new optimised custom event
    func(this.event, this.newEvent, this.obj, rate);

    // Run once just in case anything is already bound
    // this.run({});

    // Bind the event listener
    this.bind();
  }

  bind() {
    // Add event listener for custom optimised event
    this.obj.addEventListener(this.newEvent, this.run);
  }

  unbind() {
    // Remove event listener for custom optimised event
    this.obj.window.removeEventListener(this.newEvent, this.run);
  }

  add(evt) {
    // Create the event object
    const event = Object.assign({}, this.defaults, evt);

    // Ensure event has action
    if ( ! 'action' in event ) {
      throw new Error('Event must have an action');
    }

    // Ensure event action is a function
    if ( typeof event.action !== 'function' ) {
      throw new Error('Event must be a function');
    }
    
    // Generate event ID
    event.id = generateId();

    // Add new event and sort
    this.events.push(event);
    this.events.sort(this.compare);

    // Cache Params
    const p = this.params()

    // Check if event has it's own conditions
    let condition = evt.condition || this.condition;

    // Run Once to initialise
    if ( condition(event, p, {})  ) {
      event.action({}, p);
    }

    return event.id;
  }

  remove(id) {
    this.events = this.events.filter(x => x.id != id);
  }

  // Parameter generation method
  params() {
    return {
      size: window.innerWidth
    };
  }

  // Run the bound events
  run = (e) => {
    // Cache params
    const p = this.params();

    this.events.forEach(evt => {
      // Check if event has it's own conditions
      let condition = evt.condition || this.condition;

      if ( condition(evt, p, e) ) {
        evt.action(e, p);
      }
    });
  }

  // Check if event conditions are met
  condition(evt, p, e) {
    return ( evt.min <= parseInt(p.size) && evt.max >= parseInt(p.size) );
  }

  // Comparison for sorting events by priority
  compare(a, b) {
    if ( a.priority < b.priority ) {
      return -1;
    } else if ( a.priority > b.priority ) {
      return 1;
    }
    return 0;
  }
}

export default OptimisedEventManager;
