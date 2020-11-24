- js实现eventEmitter

```javascript
class EventEmitter {
  constructor() {
    this.events = Object.create(null);
  }

  on(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
    return this;
  }

  off(event, fn) {
    if (!this.events[event]) return this;

    if (!fn) {
      this.events[event] = [];
      return this;
    }

    const index = this.events[event].indexOf(fn);

    this.events[event].splice(index, 1);
    return this;
  }

  once(event, fn) {
    const _o = () => {
      fn.apply(this, arguments);
      _this.off(event, _o);
    };

    this.on(event, _o);
    return this;
  }

  emit(event, ...args) {
    if (!event) return this;
    this.events[event].forEach((item) => {
      item.call(this, ...args);
    });
    return this;
  }
}


```
