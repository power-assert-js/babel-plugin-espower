'use strict';

assert(class Me {
  getClassName() {
    return foo + Me.name;
  }
});
