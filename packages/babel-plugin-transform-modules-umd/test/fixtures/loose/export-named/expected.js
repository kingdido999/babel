(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.actual = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.foo = void 0;
  var foo;
  _exports.foo = foo;
});
