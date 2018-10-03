const Functions = require('./functions');

/**
 * Auxiliary class that wraps an iterable instance (object that
 * implements the iterator protocol) and contains methods that provide
 * a fluent api.
 *
 * @param {Iterable} iterable The wrapped iterable object that implements
 * the iterator protocol.
 */
const Iterable = class {
  constructor(iterable) {
    this.iterable = iterable;
  };
  
  [Symbol.iterator]() {
    return this.iterable;
  }

  concat(iterableToConcat) {
    return new this.constructor(Functions.concat(this.iterable, iterableToConcat));
  }

  count() {
    return Functions.count(this.iterable);
  }

  every(filterCondition) {
    return Functions.every(this.iterable, filterCondition);
  }

  filter(filterCondition) {
    return new this.constructor(Functions.filter(this.iterable, filterCondition));
  }

  first(filterCondition) {
    return new this.constructor(Functions.first(this.iterable, filterCondition));
  }

  get(index) {
    return Functions.get(this.iterable, index);
  }

  map(mapProjection) {
    return new this.constructor(Functions.map(this.iterable, mapProjection));
  }

  reduce(reduceFunction, initialValue) {
    return Functions.reduce(this.iterable, reduceFunction, initialValue);
  }

  skip(number) {
    const skipped = Functions.skip(this.iterable, number);
    return new this.constructor(skipped);
  }

  some(filterCondition) {
    return Functions.some(this.iterable, filterCondition);
  }

  take(number) {
    return new this.constructor(Functions.take(this.iterable, number));
  }

  toArray() {
    return Functions.toArray(this.iterable);
  }
}

module.exports = { Iterable };