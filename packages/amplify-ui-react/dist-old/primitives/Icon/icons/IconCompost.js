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
exports.IconCompost = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconCompost = function (props) {
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
                  d: 'M9.4,10.69c0.07-0.18,0.1-0.37,0.1-0.57C9.5,8,6,8,6,8s0.25,0.27,0.24,1.25l0.01,0.88c0,0.9,0.73,1.62,1.62,1.62 c0.42,0,0.8-0.16,1.09-0.42c0.16,0.4,0.4,1.1,0.42,1.72c-1.06,0.16-1.96,0.73-2.46,1.51C5.46,13.57,4.5,11.9,4.5,10 c0-3.03,2.47-5.5,5.5-5.5h0v2l3.5-3.25L10,0v2h0c-4.42,0-8,3.58-8,8s3.58,8,8,8s8-3.58,8-8h-2.5c0,1.9-0.97,3.57-2.43,4.56 c-0.49-0.77-1.36-1.33-2.39-1.5c0.11-0.95,0.33-1.57,0.63-2.38C11.63,10.88,12,11,12.4,11C15,11,15,6.91,15,6c0,0-0.5,1-2,1h-0.6 c-1.1,0-2,0.9-2,2c0,0.38,0.11,0.74,0.29,1.04c0.14-0.15,1.05-1.09,1.81-1.54c-0.48,0.4-1.78,1.93-2.5,3.71 C9.42,11.08,8.51,10.17,8.25,10C8.69,10.17,9.24,10.58,9.4,10.69z',
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
exports.IconCompost = IconCompost;
//# sourceMappingURL=IconCompost.js.map