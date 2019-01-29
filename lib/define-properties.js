'use strict';

const defineProperties = (obj, map) => {
  Object.keys(map).forEach((name) => {
    Object.defineProperty(obj, name, {
      configurable: true,
      enumerable: false,
      value: map[name],
      writable: true
    });
  });
};

module.exports = defineProperties;
