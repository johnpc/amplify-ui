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
exports.IconDirectionsOff = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconDirectionsOff = function (props) {
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
                { fill: 'none', height: '24', width: '24' },
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
                      'path',
                      {
                        d: 'M9.41,6.58L12,4h0l8,8l-2.58,2.59L18.83,16l2.58-2.59c0.78-0.78,0.78-2.05,0-2.83l-8-8c-0.78-0.78-2.05-0.78-2.83,0 L8,5.17L9.41,6.58z',
                      },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'path',
                      {
                        d: 'M2.81,2.81L1.39,4.22L5.17,8l-2.58,2.59c-0.78,0.78-0.78,2.05,0,2.83l8,8c0.78,0.78,2.05,0.78,2.83,0L16,18.83l3.78,3.78 l1.41-1.41L2.81,2.81z M12,20l-8-8l2.58-2.59L8.17,11H7v2h3.17l1.5,1.5l-1.08,1.09L12,17l1.09-1.09l1.5,1.5L12,20z',
                      },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'rect',
                      {
                        height: '7.07',
                        transform:
                          'matrix(0.7071 -0.7071 0.7071 0.7071 -3.0134 12.8107)',
                        width: '1.54',
                        x: '13.19',
                        y: '6.51',
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
exports.IconDirectionsOff = IconDirectionsOff;
//# sourceMappingURL=IconDirectionsOff.js.map