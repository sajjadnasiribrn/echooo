(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/Home~js/chunks/Index~js/chunks/PostCategory~js/chunks/UserBookmarkedPost~js/chunks/UserFri~578ee7aa"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
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

moment.loadPersian({
  usePersianDigits: true
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NewPost",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var root = _ref.root,
        emit = _ref.emit;
    //state
    var post = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(props.data);
    var mustLogin = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      dialog: false,
      message: ''
    }); //methods

    var likePost = function likePost() {
      if (root.$store.state.isLoggedIn) {
        post.value.is_liked = !post.value.is_liked;
        post.value.is_liked ? post.value.likes_count++ : post.value.likes_count--;
        var reqType = post.value.is_liked ? 'post' : 'delete';
        axios[reqType]("/api/likes/".concat(post.value.slug)).then(function () {//post.value.is_liked ? post.value.likes_count++ : post.value.likes_count--;
        });
      } else {
        mustLogin.value.message = 'برای پسندیدن این نوشته به حساب خود وارد شوید';
        mustLogin.value.dialog = true;
        emit('mustLogin', mustLogin.value);
      }
    };

    var bookmarkPost = function bookmarkPost(postModel) {
      if (root.$store.state.isLoggedIn) {
        postModel.is_bookmarked = !postModel.is_bookmarked;
        var reqType = postModel.is_bookmarked ? 'post' : 'delete';
        axios[reqType]("/api/bookmarks/".concat(postModel.slug));
      } else {
        mustLogin.value.message = 'برای ذخیره این نوشته به حساب خود وارد شوید';
        mustLogin.value.dialog = true;
        emit('mustLogin', mustLogin.value);
      }
    };

    return {
      moment: moment,
      post: post,
      mustLogin: mustLogin,
      likePost: likePost,
      bookmarkPost: bookmarkPost
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "mt-7" },
    [
      _c(
        "div",
        { staticClass: "d-flex flex-row" },
        [
          _c(
            "v-list-item",
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "user-posts",
                      params: { username: _vm.data.user.username }
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-avatar",
                    [
                      _c("v-img", { attrs: { src: _vm.data.user.profile_src } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c(
                    "v-list-item-title",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "font-weight-black",
                          attrs: {
                            to: {
                              name: "user-posts",
                              params: { username: _vm.post.user.username }
                            },
                            text: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.post.user.name) +
                              "\n                "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [
                    _vm._v(
                      _vm._s(_vm.moment(_vm.data.created_at).fromNow()) +
                        " - خواندن " +
                        _vm._s(_vm.data.min_read) +
                        " دقیقه"
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer")
        ],
        1
      ),
      _vm._v(" "),
      _vm.data.image === "/img/posts/none"
        ? _c(
            "router-link",
            {
              staticClass: "white--text",
              attrs: {
                to: { name: "post-show", params: { slug: _vm.data.slug } }
              }
            },
            [
              _c(
                "v-sheet",
                {
                  staticClass: "white--text",
                  attrs: { color: "info", height: "200px", tile: "" }
                },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "title font-weight-bold mx-auto" },
                    [
                      _c("span", { staticClass: "mt-12" }, [
                        _vm._v(
                          "\n                                                " +
                            _vm._s(_vm.data.title) +
                            "\n                                                "
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        : _c(
            "v-img",
            {
              staticClass: "white--text align-center",
              attrs: {
                height: "200px",
                gradient:
                  "to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",
                src: _vm.data.image
              }
            },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: { name: "post-show", params: { slug: _vm.data.slug } }
                  }
                },
                [
                  _c(
                    "v-card-text",
                    {
                      staticClass: "title font-weight-bold white--text mx-auto"
                    },
                    [
                      _c("span", [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.data.title) +
                            "\n            "
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
      _vm._v(" "),
      _c("v-card-text", {
        domProps: { innerHTML: _vm._s(_vm.data.description) }
      }),
      _vm._v(" "),
      _c(
        "v-card-actions",
        { staticClass: "mt-2" },
        [
          _c(
            "v-btn",
            { attrs: { icon: "" }, on: { click: _vm.likePost } },
            [
              _c(
                "v-badge",
                {
                  attrs: {
                    content:
                      _vm.post.likes_count == 0 ? "0" : _vm.post.likes_count,
                    color: "red darken-1"
                  }
                },
                [
                  _c("v-icon", { class: { "red--text": _vm.post.is_liked } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.post.is_liked ? "mdi-heart" : "mdi-heart-outline"
                        ) +
                        "\n                "
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ml-10",
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  return _vm.bookmarkPost(_vm.post)
                }
              }
            },
            [
              _c(
                "v-badge",
                { attrs: { content: "ذخیره", color: "blue-grey darken-3" } },
                [
                  _c("v-icon", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.post.is_bookmarked
                            ? "mdi-bookmark"
                            : "mdi-bookmark-outline"
                        ) +
                        "\n                "
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/posts/NewPost.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/posts/NewPost.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewPost_vue_vue_type_template_id_3e70edc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPost.vue?vue&type=template&id=3e70edc9&scoped=true& */ "./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&scoped=true&");
/* harmony import */ var _NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPost.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewPost_vue_vue_type_template_id_3e70edc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewPost_vue_vue_type_template_id_3e70edc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e70edc9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/NewPost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_3e70edc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewPost.vue?vue&type=template&id=3e70edc9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_3e70edc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_3e70edc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);