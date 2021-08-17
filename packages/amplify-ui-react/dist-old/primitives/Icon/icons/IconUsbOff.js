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
exports.IconUsbOff = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconUsbOff = function (props) {
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
              d: 'M9.25,5H7.5L10,2l2.5,3h-1.75v3.63l-1.5-1.5V5z M12.5,10h0.75v1.13l1.23,1.23c0.17-0.24,0.27-0.54,0.27-0.86V10h0.75V7h-3 V10z M10.75,13v2.21c0.45,0.26,0.75,0.74,0.75,1.29c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5c0-0.55,0.3-1.03,0.75-1.29V13h-2.5 c-0.83,0-1.5-0.67-1.5-1.5V9.79C4.8,9.53,4.5,9.05,4.5,8.5c0-0.51,0.26-0.96,0.65-1.23L1.87,3.99l1.06-1.06l14.14,14.14l-1.06,1.06 L10.88,13H10.75z M9.25,11.5v-0.13L7.23,9.35C7.1,9.53,6.94,9.68,6.75,9.79v1.71H9.25z',
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.IconUsbOff = IconUsbOff;
//# sourceMappingURL=IconUsbOff.js.map