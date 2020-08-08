(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/Home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FeaturePosts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FeaturePosts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FeaturePosts",
  data: function data() {
    return {
      feature_posts: {},
      moment: moment
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/feature-posts').then(function (_ref) {
      var data = _ref.data;
      _this.feature_posts = data.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slider.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Slider.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Slider",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      colors: ['green', 'secondary', 'yellow darken-4', 'red lighten-2', 'orange darken-1']
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/FollowingPosts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/FollowingPosts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
  name: "FollowingPosts",
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PopularPosts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PopularPosts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
  name: "PopularPosts",
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PopularWriter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PopularWriter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PopularWriter",
  setup: function setup() {
    // state
    var writers = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({}); // created hook

    axios.get('/api/trending-writers').then(function (_ref) {
      var data = _ref.data;
      writers.value = data.writers;
    });
    return {
      writers: writers
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Twitt.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/Twitt.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Twitt",
  data: function data() {
    return {
      items: [{
        text: '',
        icon: '',
        btn: {},
        btnName: ''
      }, {
        text: '',
        icon: '',
        btn: {},
        btnName: ''
      }],
      length: 3,
      onboarding: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    auth: function auth(state) {
      return state.isLoggedIn;
    },
    user: function user(state) {
      return state.user.name;
    }
  })),
  created: function created() {
    if (this.auth) {
      this.items[0].text = this.user + ' عزیز به وبلاگ اِکو خوش آمدی';
      this.items[0].icon = 'mdi-emoticon-excited-outline';
      this.items[1].text = 'اگر میخوای بفهمی دقیقا چی تو فکرته، راهی جز نوشتن نیست. پس شروع کن!';
      this.items[1].btn = {
        name: 'create-posts'
      };
      this.items[1].btnName = 'نوشتن پست جدید';
    } else {
      this.items[0].text = 'سلام. خوش آمدی';
      this.items[0].icon = 'mdi-emoticon-excited-outline';
      this.items[1].text = 'اینجا می تونی در باره هر چیزی دوست داری بنویسی. پس ثبت نام کن و بنویس!';
      this.items[1].btn = {
        name: 'register'
      };
      this.items[1].btnName = 'ثبت نام';
    }
  },
  methods: {
    next: function next() {
      this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev: function prev() {
      this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_posts_RelatedPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/posts/RelatedPost */ "./resources/js/components/posts/RelatedPost.vue");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Slider */ "./resources/js/components/Slider.vue");
/* harmony import */ var _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/posts/NewPost */ "./resources/js/components/posts/NewPost.vue");
/* harmony import */ var _components_posts_PopularWriter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/posts/PopularWriter */ "./resources/js/components/posts/PopularWriter.vue");
/* harmony import */ var _components_posts_PopularPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/posts/PopularPosts */ "./resources/js/components/posts/PopularPosts.vue");
/* harmony import */ var _components_posts_Twitt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/posts/Twitt */ "./resources/js/components/posts/Twitt.vue");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
/* harmony import */ var _components_posts_FollowingPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/posts/FollowingPosts */ "./resources/js/components/posts/FollowingPosts.vue");
/* harmony import */ var _components_auth_MustLoginDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/auth/MustLoginDialog */ "./resources/js/components/auth/MustLoginDialog.vue");
/* harmony import */ var _components_FeaturePosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FeaturePosts */ "./resources/js/components/FeaturePosts.vue");
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
  name: "Home",
  metaInfo: {
    title: 'صفحه اصلی -'
  },
  components: {
    FeaturePosts: _components_FeaturePosts__WEBPACK_IMPORTED_MODULE_9__["default"],
    MustLoginDialog: _components_auth_MustLoginDialog__WEBPACK_IMPORTED_MODULE_8__["default"],
    FollowingPosts: _components_posts_FollowingPosts__WEBPACK_IMPORTED_MODULE_7__["default"],
    Twitt: _components_posts_Twitt__WEBPACK_IMPORTED_MODULE_5__["default"],
    PopularPosts: _components_posts_PopularPosts__WEBPACK_IMPORTED_MODULE_4__["default"],
    PopularWriter: _components_posts_PopularWriter__WEBPACK_IMPORTED_MODULE_3__["default"],
    NewPost: _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_2__["default"],
    Slider: _components_Slider__WEBPACK_IMPORTED_MODULE_1__["default"],
    RelatedPost: _components_posts_RelatedPost__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    //state
    var mustLogin = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])({
      dialog: false,
      message: ''
    });
    var length = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])(5);
    var onboarding = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])(0);
    var posts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])({});
    var popularPosts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])({});
    var followingPosts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])({}); //methods

    var fetchNextPosts = function fetchNextPosts() {
      axios.get(posts.value.next_page_url).then(function (_ref) {
        var _posts$value$data;

        var data = _ref.data;

        (_posts$value$data = posts.value.data).push.apply(_posts$value$data, _toConsumableArray(data.posts.data));

        posts.value.next_page_url = data.posts.next_page_url;
      });
    }; //hooks


    axios.get('/api/home').then(function (_ref2) {
      var data = _ref2.data;
      posts.value = data.posts;
    });
    axios.get('/api/trending-posts').then(function (_ref3) {
      var data = _ref3.data;
      popularPosts.value = data.posts;
    });
    axios.get('/api/following-posts').then(function (_ref4) {
      var data = _ref4.data;
      followingPosts.value = data.posts;
    });
    return {
      mustLogin: mustLogin,
      posts: posts,
      length: length,
      onboarding: onboarding,
      popularPosts: popularPosts,
      followingPosts: followingPosts,
      fetchNextPosts: fetchNextPosts
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Home.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Home.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-toolbar__content {\n    padding: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Home.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Home.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Home.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FeaturePosts.vue?vue&type=template&id=ec753030&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FeaturePosts.vue?vue&type=template&id=ec753030&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-avatar",
                    [_c("v-img", { attrs: { src: "/img/logo2.png" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [_vm._v("انتخاب سایت برای شما:")])
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
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-slide-group",
                    { attrs: { "active-class": "success", "show-arrows": "" } },
                    _vm._l(_vm.feature_posts, function(feature_post, i) {
                      return _c("v-slide-item", {
                        key: i,
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var active = ref.active
                                var toggle = ref.toggle
                                return [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "ma-2",
                                      attrs: { "max-width": "280" }
                                    },
                                    [
                                      feature_post.post.image ===
                                      "/img/posts/none"
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass: "white--text",
                                              attrs: {
                                                to: {
                                                  name: "post-show",
                                                  params: {
                                                    slug: feature_post.post.slug
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-sheet",
                                                {
                                                  staticClass: "white--text",
                                                  attrs: {
                                                    "max-height": "230",
                                                    "min-height": "230",
                                                    "max-width": "280",
                                                    "min-width": "280",
                                                    color: "info",
                                                    height: "100%",
                                                    tile: ""
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-card-text",
                                                    {
                                                      staticClass:
                                                        "title font-weight-bold mx-auto"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "mt-12"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                feature_post
                                                                  .post.title
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
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
                                              staticClass:
                                                "white--text align-center",
                                              attrs: {
                                                "max-height": "230",
                                                "min-height": "230",
                                                "max-width": "280",
                                                "min-width": "280",
                                                gradient:
                                                  "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                                src: feature_post.post.image
                                              }
                                            },
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "post-show",
                                                      params: {
                                                        slug:
                                                          feature_post.post.slug
                                                      }
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-card-text",
                                                    {
                                                      staticClass:
                                                        "title font-weight-bold white--text mx-auto"
                                                    },
                                                    [
                                                      _c("span", [
                                                        _vm._v(
                                                          "\n                " +
                                                            _vm._s(
                                                              feature_post.post
                                                                .title
                                                            ) +
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
                                      _c(
                                        "v-card-actions",
                                        [
                                          _c(
                                            "v-list-item",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "user-posts",
                                                  params: {
                                                    username:
                                                      feature_post.post.user
                                                        .username
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-item-avatar",
                                                [
                                                  _c(
                                                    "v-avatar",
                                                    [
                                                      _c("v-img", {
                                                        attrs: {
                                                          src:
                                                            feature_post.post
                                                              .user
                                                              .profile_src ||
                                                            "/img/avatar.png"
                                                        }
                                                      })
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
                                                    {
                                                      staticClass:
                                                        "body-2 font-weight-bold\n                 d-inline-block text-truncate",
                                                      staticStyle: {
                                                        "max-width": "110px"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "body-1"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                        " +
                                                              _vm._s(
                                                                feature_post
                                                                  .post.user
                                                                  .name
                                                              ) +
                                                              "\n                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-subtitle",
                                                    {
                                                      staticClass:
                                                        "caption grey--text"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                        " +
                                                              _vm._s(
                                                                _vm
                                                                  .moment(
                                                                    feature_post
                                                                      .post
                                                                      .created_at
                                                                  )
                                                                  .fromNow()
                                                              ) +
                                                              "\n                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
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
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slider.vue?vue&type=template&id=872262e8&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Slider.vue?vue&type=template&id=872262e8& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    [
      _c("v-system-bar", { attrs: { "lights-out": "" } }),
      _vm._v(" "),
      _c(
        "v-carousel",
        {
          attrs: {
            continuous: false,
            cycle: false,
            "show-arrows": true,
            "hide-delimiter-background": "",
            "delimiter-icon": "mdi-minus",
            height: "300"
          }
        },
        _vm._l(_vm.data, function(post, index) {
          return _c(
            "v-carousel-item",
            { key: index },
            [
              post.image === "dont-have"
                ? _c(
                    "v-sheet",
                    {
                      attrs: {
                        color: "yellow darken-1",
                        height: "100%",
                        tile: ""
                      }
                    },
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "fill-height",
                          attrs: { align: "center", justify: "center" }
                        },
                        [
                          _c("v-card-text", { staticClass: "mr-7" }, [
                            _c("span", { staticClass: "title" }, [
                              _vm._v(_vm._s(post.title))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            { staticClass: "mr-3 mb-3" },
                            [
                              _c(
                                "v-avatar",
                                [
                                  _c("v-img", {
                                    attrs: { src: post.user.profile }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "d-flex flex-column mr-3" },
                                [
                                  _c("span", { staticClass: "body-1" }, [
                                    _vm._v(_vm._s(post.user.name))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "body-2" }, [
                                    _vm._v("3 روز پیش")
                                  ])
                                ]
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
                : post.image
                ? _c(
                    "v-img",
                    {
                      staticClass: "d-flex align-end white--text",
                      attrs: {
                        src: post.image,
                        "min-height": "300px",
                        "max-height": "300px"
                      }
                    },
                    [
                      _c("v-card-text", [
                        _c("span", { staticClass: "title" }, [
                          _vm._v(_vm._s(post.title))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        { staticClass: "mr-3 mb-3" },
                        [
                          _c(
                            "v-avatar",
                            [
                              _c("v-img", { attrs: { src: post.user.profile } })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex flex-column mr-3" },
                            [
                              _c("span", { staticClass: "body-1" }, [
                                _vm._v(_vm._s(post.user.name))
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "body-2" }, [
                                _vm._v("3 روز پیش")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { "two-line": "" } },
        [
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-avatar",
                [_c("v-img", { attrs: { src: "/img/logo2.png" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [_c("v-list-item-title", [_vm._v("انتخاب سایت برای شما")])],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/FollowingPosts.vue?vue&type=template&id=4db02b69&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/FollowingPosts.vue?vue&type=template&id=4db02b69&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _vm.posts.length > 0
    ? _c(
        "v-list",
        [
          _c(
            "router-link",
            { attrs: { to: { name: "friend-posts" } } },
            [
              _c(
                "v-subheader",
                { staticClass: "subtitle font-weight-black red--text" },
                [_vm._v("پست های جدید دوستان ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item-group",
            _vm._l(_vm.posts, function(post) {
              return _c(
                "v-list-item",
                { key: post.id },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "user-posts",
                              params: { username: post.user.username }
                            }
                          }
                        },
                        [
                          _c(
                            "v-avatar",
                            { attrs: { size: "35" } },
                            [
                              _c("v-img", {
                                attrs: { src: post.user.profile_src }
                              })
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
                    "v-list-item-content",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "post-show",
                              params: { slug: post.slug }
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "caption d-inline-block text-truncate red--text",
                              staticStyle: { "max-width": "240px" }
                            },
                            [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(post.title) +
                                  "\n                                        "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "grey--text overline" }, [
                        _vm._v(_vm._s(post.user.name))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PopularPosts.vue?vue&type=template&id=95cf983e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PopularPosts.vue?vue&type=template&id=95cf983e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-list",
    [
      _c(
        "v-subheader",
        { staticClass: "subtitle font-weight-bold amber--text" },
        [_vm._v("محبوب‌ترین‌ پست ها ")]
      ),
      _vm._v(" "),
      _c(
        "v-list-item-group",
        _vm._l(_vm.posts, function(post, i) {
          return _c(
            "v-list-item",
            { key: i },
            [
              _c(
                "v-list-item-icon",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "user-posts",
                          params: { username: post.user_username }
                        }
                      }
                    },
                    [
                      _c(
                        "v-avatar",
                        { attrs: { size: "35" } },
                        [
                          _c("v-img", { attrs: { src: post.user_profile_src } })
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
                "v-list-item-content",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "post-show", params: { slug: post.slug } }
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "amber--text caption d-inline-block text-truncate",
                          staticStyle: { "max-width": "240px" }
                        },
                        [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(post.title) +
                              "\n                                    "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "grey--text overline" }, [
                    _vm._v(_vm._s(post.user_name))
                  ])
                ],
                1
              )
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PopularWriter.vue?vue&type=template&id=35ab9d55&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PopularWriter.vue?vue&type=template&id=35ab9d55&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-sheet",
    { staticClass: "py-3 px-1", attrs: { elevation: "0" } },
    [
      _c("span", { staticClass: "body-2 grey--text mr-4" }, [
        _vm._v("نویسندگان پر بازدید:")
      ]),
      _vm._v(" "),
      _c(
        "v-chip-group",
        {
          attrs: {
            multiple: "",
            "show-arrows": true,
            "active-class": "primary--text"
          }
        },
        _vm._l(_vm.writers, function(writer) {
          return _c(
            "v-chip",
            {
              key: writer.username,
              staticClass: "ma-2",
              attrs: {
                color: "yellow accent-1",
                "text-color": "grey darken-3",
                to: {
                  name: "user-posts",
                  params: { username: writer.username }
                }
              }
            },
            [_vm._v("\n            " + _vm._s(writer.name) + "\n        ")]
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Twitt.vue?vue&type=template&id=31cf7bef&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/Twitt.vue?vue&type=template&id=31cf7bef&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    [
      _c("span", { staticClass: "display-1 cyan--text" }, [_vm._v("پیشخوان:")]),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "mt-5",
          attrs: { color: "#26c6da", dark: "", flat: "", tile: "" }
        },
        [
          _c(
            "v-card-title",
            [
              _c("v-icon", { attrs: { large: "", left: "" } }, [
                _vm._v("\n            mdi-newspaper-variant-outline\n        ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-window",
            {
              model: {
                value: _vm.onboarding,
                callback: function($$v) {
                  _vm.onboarding = $$v
                },
                expression: "onboarding"
              }
            },
            _vm._l(_vm.items, function(item, i) {
              return _c(
                "v-window-item",
                { key: i },
                [
                  _c(
                    "v-card",
                    {
                      attrs: { color: "transparent", height: "295", flat: "" }
                    },
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "fill-height",
                          attrs: {
                            align: "center",
                            justify: "center",
                            tag: "v-card-text"
                          }
                        },
                        [
                          _c(
                            "v-card-text",
                            { staticClass: "headline font-weight-bold" },
                            [
                              _c("p", [
                                _c(
                                  "span",
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(item.text) +
                                        "\n                            "
                                    ),
                                    _c("v-icon", { attrs: { large: "" } }, [
                                      _vm._v(_vm._s(item.icon))
                                    ])
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              item.btnName
                                ? _c(
                                    "p",
                                    { staticClass: "text-center" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mt-3",
                                          attrs: { to: item.btn }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(item.btnName) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
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
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "justify-space-between" },
            [
              _c("v-btn", { attrs: { text: "" }, on: { click: _vm.prev } }, [
                _vm._v("\n            قبلی\n        ")
              ]),
              _vm._v(" "),
              _c(
                "v-item-group",
                {
                  staticClass: "text-center",
                  attrs: { mandatory: "" },
                  model: {
                    value: _vm.onboarding,
                    callback: function($$v) {
                      _vm.onboarding = $$v
                    },
                    expression: "onboarding"
                  }
                },
                _vm._l(_vm.items, function(item, i) {
                  return _c("v-item", {
                    key: i,
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var active = ref.active
                            var toggle = ref.toggle
                            return [
                              _c(
                                "v-btn",
                                {
                                  attrs: { "input-value": active, icon: "" },
                                  on: { click: toggle }
                                },
                                [_c("v-icon", [_vm._v("mdi-record")])],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                }),
                1
              ),
              _vm._v(" "),
              _c("v-btn", { attrs: { text: "" }, on: { click: _vm.next } }, [
                _vm._v("\n            بعدی\n        ")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Home.vue?vue&type=template&id=14c26dca&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Home.vue?vue&type=template&id=14c26dca& ***!
  \*************************************************************************************************************************************************************************************************/
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
        { staticClass: "pt-md-6" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "8" } },
                [_c("PopularWriter"), _vm._v(" "), _c("feature-posts")],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "mt-md-11", attrs: { cols: "12", md: "4" } },
                [_c("Twitt")],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "hidden-md-and-up", attrs: { cols: "12" } },
                [
                  _vm.$store.state.isLoggedIn
                    ? [
                        _c("following-posts", {
                          attrs: { posts: _vm.followingPosts }
                        }),
                        _vm._v(" "),
                        _c("v-divider", { staticClass: "my-4" })
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-banner",
                    { attrs: { sticky: "" } },
                    [
                      _c("popular-posts", {
                        attrs: { posts: _vm.popularPosts }
                      })
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "8" } },
                [
                  _c(
                    "v-row",
                    {
                      staticClass: "text-center",
                      attrs: {
                        justify: "space-around",
                        color: "blue-grey accent-3",
                        dark: ""
                      }
                    },
                    [
                      _c(
                        "v-toolbar-title",
                        { staticClass: "mr-7 amber--text" },
                        [_vm._v("نوشته های جدید:")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.posts.data, function(post) {
                    return _c("NewPost", {
                      key: post.slug,
                      attrs: { data: post },
                      on: {
                        mustLogin: function(data) {
                          _vm.mustLogin = data
                        }
                      }
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
                  _c("br"),
                  _c("br"),
                  _c("br"),
                  _c("br")
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "hidden-sm-and-down", attrs: { cols: "4" } },
                [
                  _c(
                    "v-banner",
                    { attrs: { sticky: !_vm.$store.state.isLoggedIn } },
                    [
                      _c("popular-posts", {
                        attrs: { posts: _vm.popularPosts }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.$store.state.isLoggedIn
                    ? [
                        _c(
                          "v-banner",
                          { attrs: { sticky: "" } },
                          [
                            _c("following-posts", {
                              attrs: { posts: _vm.followingPosts }
                            })
                          ],
                          1
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("must-login-dialog", {
        attrs: { dialog: _vm.mustLogin.dialog, message: _vm.mustLogin.message },
        on: {
          close: function($event) {
            _vm.mustLogin.dialog = !_vm.mustLogin.dialog
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FeaturePosts.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/FeaturePosts.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeaturePosts_vue_vue_type_template_id_ec753030_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturePosts.vue?vue&type=template&id=ec753030&scoped=true& */ "./resources/js/components/FeaturePosts.vue?vue&type=template&id=ec753030&scoped=true&");
/* harmony import */ var _FeaturePosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturePosts.vue?vue&type=script&lang=js& */ "./resources/js/components/FeaturePosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeaturePosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeaturePosts_vue_vue_type_template_id_ec753030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeaturePosts_vue_vue_type_template_id_ec753030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ec753030",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FeaturePosts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FeaturePosts.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/FeaturePosts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturePosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FeaturePosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FeaturePosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturePosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FeaturePosts.vue?vue&type=template&id=ec753030&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FeaturePosts.vue?vue&type=template&id=ec753030&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturePosts_vue_vue_type_template_id_ec753030_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FeaturePosts.vue?vue&type=template&id=ec753030&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FeaturePosts.vue?vue&type=template&id=ec753030&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturePosts_vue_vue_type_template_id_ec753030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturePosts_vue_vue_type_template_id_ec753030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Slider.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Slider.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider_vue_vue_type_template_id_872262e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.vue?vue&type=template&id=872262e8& */ "./resources/js/components/Slider.vue?vue&type=template&id=872262e8&");
/* harmony import */ var _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.vue?vue&type=script&lang=js& */ "./resources/js/components/Slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Slider_vue_vue_type_template_id_872262e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Slider_vue_vue_type_template_id_872262e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Slider.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Slider.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Slider.vue?vue&type=template&id=872262e8&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Slider.vue?vue&type=template&id=872262e8& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_872262e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=template&id=872262e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slider.vue?vue&type=template&id=872262e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_872262e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_872262e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/posts/FollowingPosts.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/posts/FollowingPosts.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FollowingPosts_vue_vue_type_template_id_4db02b69_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FollowingPosts.vue?vue&type=template&id=4db02b69&scoped=true& */ "./resources/js/components/posts/FollowingPosts.vue?vue&type=template&id=4db02b69&scoped=true&");
/* harmony import */ var _FollowingPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FollowingPosts.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/FollowingPosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FollowingPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FollowingPosts_vue_vue_type_template_id_4db02b69_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FollowingPosts_vue_vue_type_template_id_4db02b69_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4db02b69",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/FollowingPosts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/FollowingPosts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/posts/FollowingPosts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowingPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FollowingPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/FollowingPosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowingPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/FollowingPosts.vue?vue&type=template&id=4db02b69&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/posts/FollowingPosts.vue?vue&type=template&id=4db02b69&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowingPosts_vue_vue_type_template_id_4db02b69_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FollowingPosts.vue?vue&type=template&id=4db02b69&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/FollowingPosts.vue?vue&type=template&id=4db02b69&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowingPosts_vue_vue_type_template_id_4db02b69_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowingPosts_vue_vue_type_template_id_4db02b69_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/posts/PopularPosts.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/posts/PopularPosts.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopularPosts_vue_vue_type_template_id_95cf983e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopularPosts.vue?vue&type=template&id=95cf983e&scoped=true& */ "./resources/js/components/posts/PopularPosts.vue?vue&type=template&id=95cf983e&scoped=true&");
/* harmony import */ var _PopularPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopularPosts.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/PopularPosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopularPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopularPosts_vue_vue_type_template_id_95cf983e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopularPosts_vue_vue_type_template_id_95cf983e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95cf983e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/PopularPosts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/PopularPosts.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/posts/PopularPosts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PopularPosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/PopularPosts.vue?vue&type=template&id=95cf983e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/posts/PopularPosts.vue?vue&type=template&id=95cf983e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularPosts_vue_vue_type_template_id_95cf983e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularPosts.vue?vue&type=template&id=95cf983e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PopularPosts.vue?vue&type=template&id=95cf983e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularPosts_vue_vue_type_template_id_95cf983e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularPosts_vue_vue_type_template_id_95cf983e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/posts/PopularWriter.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/posts/PopularWriter.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopularWriter_vue_vue_type_template_id_35ab9d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopularWriter.vue?vue&type=template&id=35ab9d55&scoped=true& */ "./resources/js/components/posts/PopularWriter.vue?vue&type=template&id=35ab9d55&scoped=true&");
/* harmony import */ var _PopularWriter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopularWriter.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/PopularWriter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopularWriter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopularWriter_vue_vue_type_template_id_35ab9d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopularWriter_vue_vue_type_template_id_35ab9d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35ab9d55",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/PopularWriter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/PopularWriter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/posts/PopularWriter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularWriter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularWriter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PopularWriter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularWriter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/PopularWriter.vue?vue&type=template&id=35ab9d55&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/posts/PopularWriter.vue?vue&type=template&id=35ab9d55&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularWriter_vue_vue_type_template_id_35ab9d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularWriter.vue?vue&type=template&id=35ab9d55&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PopularWriter.vue?vue&type=template&id=35ab9d55&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularWriter_vue_vue_type_template_id_35ab9d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularWriter_vue_vue_type_template_id_35ab9d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/posts/Twitt.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/posts/Twitt.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Twitt_vue_vue_type_template_id_31cf7bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Twitt.vue?vue&type=template&id=31cf7bef&scoped=true& */ "./resources/js/components/posts/Twitt.vue?vue&type=template&id=31cf7bef&scoped=true&");
/* harmony import */ var _Twitt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Twitt.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/Twitt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Twitt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Twitt_vue_vue_type_template_id_31cf7bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Twitt_vue_vue_type_template_id_31cf7bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31cf7bef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/Twitt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/Twitt.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/posts/Twitt.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Twitt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Twitt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/Twitt.vue?vue&type=template&id=31cf7bef&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/posts/Twitt.vue?vue&type=template&id=31cf7bef&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitt_vue_vue_type_template_id_31cf7bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Twitt.vue?vue&type=template&id=31cf7bef&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Twitt.vue?vue&type=template&id=31cf7bef&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitt_vue_vue_type_template_id_31cf7bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitt_vue_vue_type_template_id_31cf7bef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/Home.vue":
/*!************************************!*\
  !*** ./resources/js/view/Home.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_14c26dca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=14c26dca& */ "./resources/js/view/Home.vue?vue&type=template&id=14c26dca&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/view/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/view/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_14c26dca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_14c26dca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/view/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Home.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************!*\
  !*** ./resources/js/view/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/view/Home.vue?vue&type=template&id=14c26dca&":
/*!*******************************************************************!*\
  !*** ./resources/js/view/Home.vue?vue&type=template&id=14c26dca& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_14c26dca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=14c26dca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Home.vue?vue&type=template&id=14c26dca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_14c26dca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_14c26dca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);