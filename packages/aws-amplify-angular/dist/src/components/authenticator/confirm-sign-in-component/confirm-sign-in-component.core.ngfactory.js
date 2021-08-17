/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './confirm-sign-in-component.core';
import * as i3 from '../../../providers/amplify.service';
var styles_ConfirmSignInComponentCore = [];
var RenderType_ConfirmSignInComponentCore = i0.ɵcrt({
  encapsulation: 2,
  styles: styles_ConfirmSignInComponentCore,
  data: {},
});
export { RenderType_ConfirmSignInComponentCore as RenderType_ConfirmSignInComponentCore };
function View_ConfirmSignInComponentCore_2(_l) {
  return i0.ɵvid(
    0,
    [
      (_l()(),
      i0.ɵeld(
        0,
        0,
        null,
        null,
        6,
        'div',
        [['class', 'amplify-form-row']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n        '])),
      (_l()(),
      i0.ɵeld(
        2,
        0,
        null,
        null,
        1,
        'label',
        [
          ['class', 'amplify-input-label'],
          ['for', 'code'],
        ],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(3, null, ['\n          ', '\n        '])),
      (_l()(), i0.ɵted(-1, null, ['\n        '])),
      (_l()(),
      i0.ɵeld(
        5,
        0,
        [['code', 1]],
        null,
        0,
        'input',
        [
          ['class', 'amplify-form-input'],
          ['data-test', 'confirm-sign-in-code-input'],
          ['type', 'text'],
        ],
        [[8, 'placeholder', 0]],
        [
          [null, 'change'],
          [null, 'keyup'],
          [null, 'keyup.enter'],
        ],
        function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;
          if ('change' === en) {
            var pd_0 = _co.setCode(i0.ɵnov(_v, 5).value) !== false;
            ad = pd_0 && ad;
          }
          if ('keyup' === en) {
            var pd_1 = _co.setCode(i0.ɵnov(_v, 5).value) !== false;
            ad = pd_1 && ad;
          }
          if ('keyup.enter' === en) {
            var pd_2 = _co.onConfirm() !== false;
            ad = pd_2 && ad;
          }
          return ad;
        },
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n      '])),
    ],
    null,
    function (_ck, _v) {
      var _co = _v.component;
      var currVal_0 = _co.amplifyService.i18n().get('Confirmation Code *');
      _ck(_v, 3, 0, currVal_0);
      var currVal_1 = i0.ɵinlineInterpolate(
        1,
        '',
        _co.amplifyService.i18n().get('Enter your Code'),
        ''
      );
      _ck(_v, 5, 0, currVal_1);
    }
  );
}
function View_ConfirmSignInComponentCore_3(_l) {
  return i0.ɵvid(
    0,
    [
      (_l()(),
      i0.ɵeld(
        0,
        0,
        null,
        null,
        13,
        'div',
        [['class', 'amplify-alert']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n    '])),
      (_l()(),
      i0.ɵeld(
        2,
        0,
        null,
        null,
        10,
        'div',
        [['class', 'amplify-alert-body']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n      '])),
      (_l()(),
      i0.ɵeld(
        4,
        0,
        null,
        null,
        1,
        'span',
        [['class', 'amplify-alert-icon']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\u26A0'])),
      (_l()(), i0.ɵted(-1, null, ['\n      '])),
      (_l()(),
      i0.ɵeld(
        7,
        0,
        null,
        null,
        1,
        'div',
        [['class', 'amplify-alert-message']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(8, null, ['', ''])),
      (_l()(), i0.ɵted(-1, null, ['\n      '])),
      (_l()(),
      i0.ɵeld(
        10,
        0,
        null,
        null,
        1,
        'a',
        [['class', 'amplify-alert-close']],
        null,
        [[null, 'click']],
        function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;
          if ('click' === en) {
            var pd_0 = _co.onAlertClose() !== false;
            ad = pd_0 && ad;
          }
          return ad;
        },
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\u00D7'])),
      (_l()(), i0.ɵted(-1, null, ['\n    '])),
      (_l()(), i0.ɵted(-1, null, ['\n  '])),
    ],
    null,
    function (_ck, _v) {
      var _co = _v.component;
      var currVal_0 = _co.amplifyService.i18n().get(_co.errorMessage);
      _ck(_v, 8, 0, currVal_0);
    }
  );
}
function View_ConfirmSignInComponentCore_1(_l) {
  return i0.ɵvid(
    0,
    [
      (_l()(),
      i0.ɵeld(
        0,
        0,
        null,
        null,
        34,
        'div',
        [['class', 'amplify-container']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n  '])),
      (_l()(),
      i0.ɵeld(
        2,
        0,
        null,
        null,
        28,
        'div',
        [
          ['class', 'amplify-form-container'],
          ['data-test', 'confirm-sign-in-section'],
        ],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n    '])),
      (_l()(),
      i0.ɵeld(
        4,
        0,
        null,
        null,
        25,
        'div',
        [
          ['class', 'amplify-form-body'],
          ['data-test', 'confirm-sign-in-body-section'],
        ],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n    '])),
      (_l()(),
      i0.ɵeld(
        6,
        0,
        null,
        null,
        1,
        'div',
        [
          ['class', 'amplify-form-header'],
          ['data-test', 'confirm-sign-in-header-section'],
        ],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(7, null, ['', ''])),
      (_l()(), i0.ɵted(-1, null, ['\n      '])),
      (_l()(),
      i0.ɵand(
        16777216,
        null,
        null,
        1,
        null,
        View_ConfirmSignInComponentCore_2
      )),
      i0.ɵdid(
        10,
        16384,
        null,
        0,
        i1.NgIf,
        [i0.ViewContainerRef, i0.TemplateRef],
        { ngIf: [0, 'ngIf'] },
        null
      ),
      (_l()(), i0.ɵted(-1, null, ['\n      '])),
      (_l()(),
      i0.ɵeld(
        12,
        0,
        null,
        null,
        16,
        'div',
        [['class', 'amplify-form-actions']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n        '])),
      (_l()(),
      i0.ɵeld(
        14,
        0,
        null,
        null,
        7,
        'div',
        [['class', 'amplify-form-cell-left']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n          '])),
      (_l()(),
      i0.ɵeld(
        16,
        0,
        null,
        null,
        4,
        'div',
        [['class', 'amplify-form-actions-left']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n            '])),
      (_l()(),
      i0.ɵeld(
        18,
        0,
        null,
        null,
        1,
        'a',
        [
          ['class', 'amplify-form-link'],
          ['data-test', 'confirm-sign-in-back-to-sign-in-link'],
        ],
        null,
        [[null, 'click']],
        function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;
          if ('click' === en) {
            var pd_0 = _co.onSignIn() !== false;
            ad = pd_0 && ad;
          }
          return ad;
        },
        null,
        null
      )),
      (_l()(), i0.ɵted(19, null, ['\n                ', '\n            '])),
      (_l()(), i0.ɵted(-1, null, ['\n          '])),
      (_l()(), i0.ɵted(-1, null, ['\n        '])),
      (_l()(), i0.ɵted(-1, null, ['\n        '])),
      (_l()(),
      i0.ɵeld(
        23,
        0,
        null,
        null,
        4,
        'div',
        [['class', 'amplify-form-cell-right']],
        null,
        null,
        null,
        null,
        null
      )),
      (_l()(), i0.ɵted(-1, null, ['\n          '])),
      (_l()(),
      i0.ɵeld(
        25,
        0,
        null,
        null,
        1,
        'button',
        [
          ['class', 'amplify-form-button'],
          ['data-test', 'confirm-sign-in-confirm-button'],
        ],
        null,
        [[null, 'click']],
        function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;
          if ('click' === en) {
            var pd_0 = _co.onConfirm() !== false;
            ad = pd_0 && ad;
          }
          return ad;
        },
        null,
        null
      )),
      (_l()(), i0.ɵted(26, null, ['\n              ', ''])),
      (_l()(), i0.ɵted(-1, null, ['\n        '])),
      (_l()(), i0.ɵted(-1, null, ['\n      '])),
      (_l()(), i0.ɵted(-1, null, ['\n      '])),
      (_l()(), i0.ɵted(-1, null, ['\n  '])),
      (_l()(), i0.ɵted(-1, null, ['\n  '])),
      (_l()(),
      i0.ɵand(
        16777216,
        null,
        null,
        1,
        null,
        View_ConfirmSignInComponentCore_3
      )),
      i0.ɵdid(
        33,
        16384,
        null,
        0,
        i1.NgIf,
        [i0.ViewContainerRef, i0.TemplateRef],
        { ngIf: [0, 'ngIf'] },
        null
      ),
      (_l()(), i0.ɵted(-1, null, ['\n'])),
    ],
    function (_ck, _v) {
      var _co = _v.component;
      var currVal_1 = !_co.shouldHide('SignIn');
      _ck(_v, 10, 0, currVal_1);
      var currVal_4 = _co.errorMessage;
      _ck(_v, 33, 0, currVal_4);
    },
    function (_ck, _v) {
      var _co = _v.component;
      var currVal_0 = _co.amplifyService.i18n().get('Confirm Sign in');
      _ck(_v, 7, 0, currVal_0);
      var currVal_2 = _co.amplifyService.i18n().get('Back to Sign in');
      _ck(_v, 19, 0, currVal_2);
      var currVal_3 = _co.amplifyService.i18n().get('Confirm');
      _ck(_v, 26, 0, currVal_3);
    }
  );
}
export function View_ConfirmSignInComponentCore_0(_l) {
  return i0.ɵvid(
    0,
    [
      (_l()(), i0.ɵted(-1, null, ['\n'])),
      (_l()(),
      i0.ɵand(
        16777216,
        null,
        null,
        1,
        null,
        View_ConfirmSignInComponentCore_1
      )),
      i0.ɵdid(
        2,
        16384,
        null,
        0,
        i1.NgIf,
        [i0.ViewContainerRef, i0.TemplateRef],
        { ngIf: [0, 'ngIf'] },
        null
      ),
      (_l()(), i0.ɵted(-1, null, ['\n'])),
    ],
    function (_ck, _v) {
      var _co = _v.component;
      var currVal_0 = _co._show;
      _ck(_v, 2, 0, currVal_0);
    },
    null
  );
}
export function View_ConfirmSignInComponentCore_Host_0(_l) {
  return i0.ɵvid(
    0,
    [
      (_l()(),
      i0.ɵeld(
        0,
        0,
        null,
        null,
        1,
        'amplify-auth-confirm-sign-in-core',
        [],
        null,
        null,
        null,
        View_ConfirmSignInComponentCore_0,
        RenderType_ConfirmSignInComponentCore
      )),
      i0.ɵdid(
        1,
        114688,
        null,
        0,
        i2.ConfirmSignInComponentCore,
        [i3.AmplifyService],
        null,
        null
      ),
    ],
    function (_ck, _v) {
      _ck(_v, 1, 0);
    },
    null
  );
}
var ConfirmSignInComponentCoreNgFactory = i0.ɵccf(
  'amplify-auth-confirm-sign-in-core',
  i2.ConfirmSignInComponentCore,
  View_ConfirmSignInComponentCore_Host_0,
  { data: 'data', authState: 'authState', hide: 'hide' },
  {},
  []
);
export { ConfirmSignInComponentCoreNgFactory as ConfirmSignInComponentCoreNgFactory };
//# sourceMappingURL=confirm-sign-in-component.core.ngfactory.js.map