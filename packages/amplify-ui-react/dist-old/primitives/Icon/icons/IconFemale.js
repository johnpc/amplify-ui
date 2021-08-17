'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.IconFemale = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconFemale = function (props) {
  var size = props.size,
    _a = props.fill,
    fill = _a === void 0 ? 'currentColor' : _a,
    ariaLabel = props.ariaLabel,
    rest = __rest(props, ['size', 'fill', 'ariaLabel']);
  return jsx_runtime_1.jsxs(
    'svg',
    __assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        'enable-background': 'new 0 0 20 20',
        height: '20',
        viewBox: '0 0 20 20',
        width: '20',
      },
      {
        children: [
          jsx_runtime_1.jsx(
            'rect',
            { fill: 'none', height: '20', width: '20' },
            void 0
          ),
          jsx_runtime_1.jsx(
            'path',
            {
              d: 'M14.25,8.25C14.25,5.9,12.35,4,10,4S5.75,5.9,5.75,8.25c0,2.09,1.51,3.82,3.5,4.17V14h-1.5v1.5h1.5V17h1.5v-1.5h1.5V14h-1.5 v-1.58C12.74,12.07,14.25,10.34,14.25,8.25z M7.25,8.25C7.25,6.73,8.48,5.5,10,5.5s2.75,1.23,2.75,2.75S11.52,11,10,11 S7.25,9.77,7.25,8.25z',
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.IconFemale = IconFemale;
//# sourceMappingURL=IconFemale.js.map