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
exports.IconStarHalf = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconStarHalf = function (props) {
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
        'enable-background': 'new 0 0 24 24',
        'data-size': size,
        'aria-label': ariaLabel,
        fill: fill,
      },
      rest,
      { viewBox: '0 0 24 24', className: 'amplify-icon' },
      {
        children: [
          jsx_runtime_1.jsx(
            'g',
            {
              children: jsx_runtime_1.jsx(
                'rect',
                { fill: 'none', height: '24', width: '24', x: '0' },
                void 0
              ),
            },
            void 0
          ),
          jsx_runtime_1.jsx(
            'g',
            {
              children: jsx_runtime_1.jsx(
                'g',
                {
                  children: jsx_runtime_1.jsx(
                    'g',
                    {
                      children: jsx_runtime_1.jsx(
                        'path',
                        {
                          d: 'M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z',
                        },
                        void 0
                      ),
                    },
                    void 0
                  ),
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
exports.IconStarHalf = IconStarHalf;
//# sourceMappingURL=IconStarHalf.js.map