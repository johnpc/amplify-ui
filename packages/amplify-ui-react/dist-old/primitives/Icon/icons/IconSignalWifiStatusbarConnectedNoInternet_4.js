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
exports.IconSignalWifiStatusbarConnectedNoInternet_4 = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconSignalWifiStatusbarConnectedNoInternet_4 = function (props) {
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
            'g',
            {
              children: jsx_runtime_1.jsx(
                'g',
                {
                  children: jsx_runtime_1.jsx(
                    'rect',
                    { fill: 'none', height: '20', width: '20' },
                    void 0
                  ),
                },
                void 0
              ),
            },
            void 0
          ),
          jsx_runtime_1.jsx(
            'g',
            {
              children: jsx_runtime_1.jsxs(
                'g',
                {
                  children: [
                    jsx_runtime_1.jsx(
                      'rect',
                      { height: '1.5', width: '1.5', x: '16.5', y: '16.5' },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'rect',
                      { height: '6.05', width: '1.5', x: '16.5', y: '9' },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'path',
                      {
                        d: 'M10,3C6.12,3,2.6,4.53,0,7.01L10,17l5-5V7.5h4.51L20,7.01C17.4,4.53,13.88,3,10,3z',
                      },
                      void 0
                    ),
                  ],
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
exports.IconSignalWifiStatusbarConnectedNoInternet_4 =
  IconSignalWifiStatusbarConnectedNoInternet_4;
//# sourceMappingURL=IconSignalWifiStatusbarConnectedNoInternet_4.js.map