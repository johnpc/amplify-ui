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
exports.IconSports = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconSports = function (props) {
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
                'rect',
                { fill: 'none', height: '20', width: '20' },
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
                      'g',
                      {
                        children: jsx_runtime_1.jsx(
                          'path',
                          {
                            d: 'M9.5,6C8.06,6,6.8,6.68,5.98,7.73C5.99,7.66,6,7.58,6,7.5C6,6.67,5.33,6,4.5,6S3,6.67,3,7.5S3.67,9,4.5,9 c0.33,0,0.62-0.11,0.87-0.28C5.13,9.26,5,9.87,5,10.5C5,12.99,7.01,15,9.5,15s4.5-2.01,4.5-4.5c0-0.08-0.02-0.16-0.02-0.24 c0-0.04,0.01-0.09,0.01-0.12C13.93,9.53,14.37,9,14.97,9H18V6H9.5z M4.5,8C4.22,8,4,7.78,4,7.5C4,7.22,4.22,7,4.5,7S5,7.22,5,7.5 C5,7.78,4.78,8,4.5,8z M11.47,12.02C11.02,12.61,10.31,13,9.5,13C8.12,13,7,11.88,7,10.5c0-1.27,0.95-2.3,2.17-2.47 C9.28,8.02,9.39,8,9.5,8c1.38,0,2.5,1.12,2.5,2.5C12,11.07,11.8,11.6,11.47,12.02z',
                          },
                          void 0
                        ),
                      },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'g',
                      {
                        children: jsx_runtime_1.jsx(
                          'circle',
                          { cx: '9.5', cy: '10.5', r: '1.5' },
                          void 0
                        ),
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
exports.IconSports = IconSports;
//# sourceMappingURL=IconSports.js.map