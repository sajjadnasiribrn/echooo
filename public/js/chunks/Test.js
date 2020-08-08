(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/Test"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Error/Test.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Error/Test.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorContent"],
    EditorMenuBubble: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBubble"]
  },
  data: function data() {
    return {
      editor: new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
        extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Heading"]({
          levels: [1, 2, 3]
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["History"]()],
        content: "\n      <h2>\n        Links\n      </h2>\n      <p>\n        Try to add some links to the <a href=\"https://en.wikipedia.org/wiki/World_Wide_Web\">world wide web</a>. By default every link will get a <code>rel=\"noopener noreferrer nofollow\"</code> attribute.\n      </p>\n    "
      }),
      linkUrl: null,
      linkMenuIsActive: false
    };
  },
  methods: {
    showLinkMenu: function showLinkMenu(attrs) {
      var _this = this;

      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(function () {
        _this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu: function hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    setLinkUrl: function setLinkUrl(command, url) {
      command({
        href: url
      });
      this.hideLinkMenu();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Error/Test.vue?vue&type=template&id=687a5895&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Error/Test.vue?vue&type=template&id=687a5895& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "editor" },
    [
      _c("editor-menu-bubble", {
        staticClass: "menububble",
        attrs: { editor: _vm.editor },
        on: { hide: _vm.hideLinkMenu },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var commands = ref.commands
              var isActive = ref.isActive
              var getMarkAttrs = ref.getMarkAttrs
              var menu = ref.menu
              return [
                _c(
                  "div",
                  {
                    staticClass: "menububble",
                    class: { "is-active": menu.isActive },
                    style:
                      "left: " +
                      menu.left +
                      "px; bottom: " +
                      menu.bottom +
                      "px;"
                  },
                  [
                    _vm.linkMenuIsActive
                      ? _c(
                          "v-form",
                          {
                            ref: "linkInput",
                            staticClass: "menububble__form",
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.setLinkUrl(
                                  commands.link,
                                  "https://" + _vm.linkUrl
                                )
                              }
                            }
                          },
                          [
                            _c("v-text-field", {
                              staticClass: "menububble__input w-300",
                              attrs: { type: "text", placeholder: "https://" },
                              on: {
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "esc",
                                      27,
                                      $event.key,
                                      ["Esc", "Escape"]
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.hideLinkMenu($event)
                                }
                              },
                              model: {
                                value: _vm.linkUrl,
                                callback: function($$v) {
                                  _vm.linkUrl = $$v
                                },
                                expression: "linkUrl"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "menububble__button",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.setLinkUrl(commands.link, null)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    X\n                "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      : [
                          _c(
                            "v-btn",
                            {
                              staticClass: "menububble__button",
                              class: { "is-active": isActive.link() },
                              attrs: { text: "" },
                              on: {
                                click: function($event) {
                                  _vm.showLinkMenu(getMarkAttrs("link"))
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    isActive.link() ? "Update Link" : "Add Link"
                                  )
                                )
                              ])
                            ]
                          )
                        ]
                  ],
                  2
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("editor-content", {
        staticClass: "editor__content",
        attrs: { editor: _vm.editor }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/view/Error/Test.vue":
/*!******************************************!*\
  !*** ./resources/js/view/Error/Test.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Test_vue_vue_type_template_id_687a5895___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test.vue?vue&type=template&id=687a5895& */ "./resources/js/view/Error/Test.vue?vue&type=template&id=687a5895&");
/* harmony import */ var _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Test.vue?vue&type=script&lang=js& */ "./resources/js/view/Error/Test.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Test_vue_vue_type_template_id_687a5895___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Test_vue_vue_type_template_id_687a5895___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Error/Test.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Error/Test.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/view/Error/Test.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Error/Test.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Error/Test.vue?vue&type=template&id=687a5895&":
/*!*************************************************************************!*\
  !*** ./resources/js/view/Error/Test.vue?vue&type=template&id=687a5895& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_687a5895___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=template&id=687a5895& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Error/Test.vue?vue&type=template&id=687a5895&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_687a5895___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_687a5895___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);