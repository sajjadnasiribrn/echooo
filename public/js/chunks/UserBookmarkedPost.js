(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/UserBookmarkedPost"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowCategorySkeletonLoader"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/UserBookmarkedPost.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/User/UserBookmarkedPost.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
/* harmony import */ var _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/posts/NewPost */ "./resources/js/components/posts/NewPost.vue");
/* harmony import */ var _components_posts_ShowCategorySkeletonLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/posts/ShowCategorySkeletonLoader */ "./resources/js/components/posts/ShowCategorySkeletonLoader.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  name: "UserBookmarkPost",
  components: {
    ShowCategorySkeletonLoader: _components_posts_ShowCategorySkeletonLoader__WEBPACK_IMPORTED_MODULE_2__["default"],
    NewPost: _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: {
    title: 'نوشته های ذخیره شده- '
  },
  setup: function setup() {
    //state
    var posts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
    var user = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({}); //methods

    var fetchNextPosts = function fetchNextPosts() {
      axios.get(posts.value.next_page_url).then(function (_ref) {
        var _posts$value$data;

        var data = _ref.data;

        (_posts$value$data = posts.value.data).push.apply(_posts$value$data, _toConsumableArray(data.posts.data));

        posts.value.next_page_url = data.posts.next_page_url;
      });
    }; //hook


    axios.get("/api/bookmarked-posts").then(function (_ref2) {
      var data = _ref2.data;
      posts.value = data.posts;
      user.value = data.user;
    });
    return {
      posts: posts,
      user: user,
      fetchNextPosts: fetchNextPosts
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=template&id=9b0b993c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=template&id=9b0b993c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-skeleton-loader", {
    staticClass: "mt-6",
    attrs: { type: " image, list-item-three-line " }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/UserBookmarkedPost.vue?vue&type=template&id=78578d18&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/User/UserBookmarkedPost.vue?vue&type=template&id=78578d18&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "v-content",
    [
      _c(
        "v-container",
        [
          _vm.posts.data
            ? [
                _c(
                  "v-row",
                  { staticClass: "d-flex justify-center" },
                  [
                    _c(
                      "v-col",
                      { staticClass: "mt-6", attrs: { cols: "12", md: "8" } },
                      [
                        _c(
                          "v-alert",
                          {
                            staticClass: "align-center mt-8",
                            attrs: {
                              border: "top",
                              outlined: "",
                              color: "green darken-4"
                            }
                          },
                          [
                            _c("v-row", { staticClass: "justify-center" }, [
                              _c("p", { staticClass: "mt-10" }, [
                                _c("span", { staticClass: "caption" }, [
                                  _vm._v(_vm._s(_vm.user.bookmarks_count))
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "caption" }, [
                                  _vm._v(" نوشته را ذخیره کرده اید. ")
                                ])
                              ])
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "d-flex justify-center" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "8" } },
                      [
                        _vm._l(_vm.posts.data, function(post) {
                          return _c("new-post", {
                            key: post.id,
                            staticClass: "mt-10",
                            attrs: { data: post }
                          })
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            !!_vm.posts.next_page_url
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "mt-10 align-center",
                                    attrs: {
                                      rounded: "",
                                      "x-large": "",
                                      dark: "",
                                      color: "info"
                                    },
                                    on: { click: _vm.fetchNextPosts }
                                  },
                                  [
                                    _vm._v("ادامه "),
                                    _c("v-icon", [_vm._v("mdi-contain-end")])
                                  ],
                                  1
                                )
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        !_vm.posts.data.length
                          ? _c("span", [
                              _vm._v("هنوز نوشته ای را ذخیره نکرده اید.")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("br"),
                        _c("br"),
                        _c("br"),
                        _c("br")
                      ],
                      2
                    )
                  ],
                  1
                )
              ]
            : [
                _c(
                  "v-row",
                  { staticClass: "d-flex justify-center" },
                  [
                    _c(
                      "v-col",
                      { staticClass: "mt-10", attrs: { cols: "8" } },
                      [_c("ShowCategorySkeletonLoader")],
                      1
                    )
                  ],
                  1
                )
              ]
        ],
        2
      )
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

/***/ "./resources/js/components/posts/ShowCategorySkeletonLoader.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/posts/ShowCategorySkeletonLoader.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowCategorySkeletonLoader_vue_vue_type_template_id_9b0b993c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowCategorySkeletonLoader.vue?vue&type=template&id=9b0b993c&scoped=true& */ "./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=template&id=9b0b993c&scoped=true&");
/* harmony import */ var _ShowCategorySkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowCategorySkeletonLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowCategorySkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowCategorySkeletonLoader_vue_vue_type_template_id_9b0b993c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowCategorySkeletonLoader_vue_vue_type_template_id_9b0b993c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9b0b993c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/ShowCategorySkeletonLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCategorySkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowCategorySkeletonLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCategorySkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=template&id=9b0b993c&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=template&id=9b0b993c&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCategorySkeletonLoader_vue_vue_type_template_id_9b0b993c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowCategorySkeletonLoader.vue?vue&type=template&id=9b0b993c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/ShowCategorySkeletonLoader.vue?vue&type=template&id=9b0b993c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCategorySkeletonLoader_vue_vue_type_template_id_9b0b993c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCategorySkeletonLoader_vue_vue_type_template_id_9b0b993c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/User/UserBookmarkedPost.vue":
/*!*******************************************************!*\
  !*** ./resources/js/view/User/UserBookmarkedPost.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserBookmarkedPost_vue_vue_type_template_id_78578d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBookmarkedPost.vue?vue&type=template&id=78578d18&scoped=true& */ "./resources/js/view/User/UserBookmarkedPost.vue?vue&type=template&id=78578d18&scoped=true&");
/* harmony import */ var _UserBookmarkedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBookmarkedPost.vue?vue&type=script&lang=js& */ "./resources/js/view/User/UserBookmarkedPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserBookmarkedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserBookmarkedPost_vue_vue_type_template_id_78578d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserBookmarkedPost_vue_vue_type_template_id_78578d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78578d18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/User/UserBookmarkedPost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/User/UserBookmarkedPost.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/view/User/UserBookmarkedPost.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBookmarkedPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/UserBookmarkedPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/User/UserBookmarkedPost.vue?vue&type=template&id=78578d18&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/view/User/UserBookmarkedPost.vue?vue&type=template&id=78578d18&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_template_id_78578d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBookmarkedPost.vue?vue&type=template&id=78578d18&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/UserBookmarkedPost.vue?vue&type=template&id=78578d18&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_template_id_78578d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_template_id_78578d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);