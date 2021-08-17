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
exports.IconWifiLock = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconWifiLock = function (props) {
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
            'g',
            {
              children: jsx_runtime_1.jsx(
                'path',
                {
                  d: 'M17.5,13H17v-1c0-0.82-0.67-1.5-1.5-1.5S14,11.18,14,12v1h-0.5c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h4 c0.28,0,0.5-0.22,0.5-0.5v-3C18,13.22,17.78,13,17.5,13z M14.75,12c0-0.41,0.34-0.75,0.75-0.75c0.41,0,0.75,0.34,0.75,0.75v1h-1.5 V12z M12,15l-2,2l-4.24-4.24L0,7.01C2.6,4.53,6.12,3,10,3c3.88,0,7.4,1.53,10,4.01L17.51,9.5H15c-1.66,0-3,1.34-3,3V15z',
                },
                void 0
              ),
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.IconWifiLock = IconWifiLock;
//# sourceMappingURL=IconWifiLock.js.map