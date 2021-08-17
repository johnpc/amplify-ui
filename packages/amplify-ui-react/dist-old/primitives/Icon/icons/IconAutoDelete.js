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
exports.IconAutoDelete = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconAutoDelete = function (props) {
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
                      'polygon',
                      { points: '13,4 11,4 10,3 6,3 5,4 3,4 3,5 13,5' },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'path',
                      {
                        d: 'M12.5,8c-0.17,0-0.33,0.03-0.5,0.05V6H4v8c0,0.55,0.45,1,1,1h3.76c0.81,1.21,2.18,2,3.74,2c2.49,0,4.5-2.01,4.5-4.5 S14.99,8,12.5,8z M12.5,16C10.57,16,9,14.43,9,12.5S10.57,9,12.5,9s3.5,1.57,3.5,3.5S14.43,16,12.5,16z',
                      },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'polygon',
                      {
                        points:
                          '13,12.42 13,10 12,10 12,13 14.6,14.5 15.1,13.63',
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
exports.IconAutoDelete = IconAutoDelete;
//# sourceMappingURL=IconAutoDelete.js.map