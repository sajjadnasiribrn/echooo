(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/Create~js/chunks/Edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DropzoneModal",
  components: {
    VueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        root = _ref.root;
    // state
    var dropzone = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var imageModal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);
    var imageCommand = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);
    var dropzoneOptions = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({
      url: "/api/upload-post-image/none}",
      maxFiles: 2,
      addRemoveLinks: true,
      dictDefaultMessage: "برای آپلود اینجا کلیک کنید",
      headers: {
        'X-CSRF-TOKEN': window.csrf_token
      }
    }); // methods

    var showModal = function showModal(command) {
      var link = root.$route.params.link ? root.$route.params.link : 'none';
      dropzoneOptions.value.url = "/api/upload-post-image/".concat(link);
      imageModal.value = true;
      imageCommand.value = command;
    };

    var upload = function upload(file, response) {
      var data = {
        imageCommand: imageCommand.value,
        attrs: {
          src: response.data
        }
      };
      emit('image', data);
      imageModal.value = false;
      imageCommand.value = null;
      dropzone.value.removeFile(file);
    };

    return {
      imageCommand: imageCommand,
      imageModal: imageModal,
      dropzoneOptions: dropzoneOptions,
      dropzone: dropzone,
      showModal: showModal,
      upload: upload
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SkeletonLoader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SkeletonLoader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SkeletonLoader"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropzoneModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropzoneModal */ "./resources/js/components/DropzoneModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "TiptapEditor",
  components: {
    DropzoneModal: _DropzoneModal__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditorMenuBar: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBar"],
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorContent"],
    EditorMenuBubble: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBubble"],
    EditorFloatingMenu: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorFloatingMenu"],
    VueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    value: {
      type: String,
      "default": ''
    }
  },
  //TODO composition-api
  data: function data() {
    var _this = this;

    return {
      MenuBarButtons: [{
        active: '',
        command: 'undo',
        icon: 'redo',
        tooltip: 'برگرداندن به بعدی',
        context: {}
      }, {
        active: '',
        command: 'redo',
        icon: 'undo',
        tooltip: 'برگرداندن به قبلی',
        context: {}
      }, {
        active: 'italic',
        command: 'italic',
        icon: 'format-italic',
        tooltip: 'ایتالیک',
        context: {}
      }, {
        active: 'bold',
        command: 'bold',
        icon: 'format-bold',
        tooltip: 'درشت',
        context: {}
      }, {
        active: 'strike',
        command: 'strike',
        icon: 'format-strikethrough',
        tooltip: 'ابطال',
        context: {}
      }, {
        active: 'underline',
        command: 'underline',
        icon: 'format-underline',
        tooltip: 'مهم',
        context: {}
      }, {
        active: 'code_block',
        command: 'code_block',
        isIcon: 0,
        icon: 'بلاک کد',
        tooltip: 'بلاک کد',
        context: {}
      }, {
        active: 'code',
        command: 'code',
        isIcon: 0,
        icon: 'کد',
        tooltip: 'کد',
        context: {}
      }, {
        active: 'heading',
        command: 'heading',
        icon: 'format-header-2',
        tooltip: 'هدر 2',
        context: {
          level: 2
        }
      }, {
        active: 'heading',
        command: 'heading',
        icon: 'format-header-3',
        tooltip: 'هدر 3',
        context: {
          level: 3
        }
      }, {
        active: 'bullet_list',
        command: 'bullet_list',
        icon: 'format-list-bulleted',
        tooltip: 'لیست',
        context: {}
      }, {
        active: 'ordered_list',
        command: 'ordered_list',
        icon: 'format-list-numbered',
        tooltip: 'لیست ترتیبی',
        context: {}
      }, {
        active: 'blockquote',
        command: 'blockquote',
        icon: 'format-quote-close',
        tooltip: 'نقل قول',
        context: {}
      }, {
        active: '',
        command: 'horizontal_rule',
        isIcon: 0,
        icon: 'خط',
        tooltip: 'خط',
        context: {}
      }],
      TableButtons: [{
        command: 'deleteTable',
        icon: 'table-large-remove',
        tooltip: 'حذف جدول',
        context: {}
      }, {
        command: 'addColumnBefore',
        icon: 'table-column-plus-after',
        tooltip: 'افزودن ستون به قبل',
        context: {}
      }, {
        command: 'addColumnAfter',
        icon: 'table-column-plus-before',
        tooltip: 'افزودن ستون به بعد',
        context: {}
      }, {
        command: 'deleteColumn',
        icon: 'table-column-remove',
        tooltip: 'حذف ستون',
        context: {}
      }, {
        command: 'addRowBefore',
        icon: 'table-row-plus-after',
        tooltip: 'افزودن سطر به قبل',
        context: {}
      }, {
        command: 'addRowAfter',
        icon: 'table-row-plus-before',
        tooltip: 'افزودن سطر به بعد',
        context: {}
      }, {
        command: 'deleteRow',
        icon: 'table-row-remove',
        tooltip: 'حذف سطر',
        context: {}
      }, {
        command: 'toggleCellMerge',
        icon: 'mdi-table-merge-cells',
        tooltip: 'حذف سطر',
        context: {}
      }],
      bubbleMenuButtons: [{
        active: 'bold',
        command: 'bold',
        icon: 'format-bold',
        tooltip: 'درشت',
        context: {}
      }, {
        active: 'underline',
        command: 'underline',
        icon: 'format-underline',
        tooltip: 'مهم',
        context: {}
      }, {
        active: 'heading',
        command: 'heading',
        icon: 'format-header-2',
        tooltip: 'هدر 2',
        context: {
          level: 2
        }
      }, {
        active: 'heading',
        command: 'heading',
        icon: 'format-header-3',
        tooltip: 'هدر 3',
        context: {
          level: 3
        }
      }, {
        active: 'blockquote',
        command: 'blockquote',
        icon: 'format-quote-close',
        tooltip: 'نقل قول',
        context: {}
      }],
      editor: new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
        extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Image"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Underline"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["History"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Table"]({
          resizable: true
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TableHeader"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TableCell"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TableRow"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Heading"]({
          level: [1, 2, 3]
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Placeholder"]({
          emptyEditorClass: 'is-editor-empty',
          emptyNodeClass: 'is-empty',
          emptyNodeText: 'متن ...',
          showOnlyWhenEditable: true,
          showOnlyCurrent: true
        })],
        content: this.value,
        onUpdate: function onUpdate(_ref) {
          var getHTML = _ref.getHTML;

          _this.$emit('input', getHTML());
        }
      }),
      linkUrl: null,
      linkMenuIsActive: false
    };
  },
  methods: {
    openModal: function openModal(imageCommand) {
      this.$refs.dropzone.showModal(imageCommand);
    },
    uploadImage: function uploadImage(data) {
      data.imageCommand(data.attrs);
    },
    showLinkMenu: function showLinkMenu(attrs) {
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
    },
    hideLinkMenu: function hideLinkMenu() {
      this.linkMenuIsActive = false;
    },
    setLinkUrl: function setLinkUrl(command, url) {
      if (url != null && url.indexOf("https://") != 0) {
        url = 'https://' + url;
      }

      command({
        href: url
      });
      this.hideLinkMenu();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true& ***!
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
    "v-dialog",
    {
      attrs: { "max-width": "360px" },
      model: {
        value: _vm.imageModal,
        callback: function($$v) {
          _vm.imageModal = $$v
        },
        expression: "imageModal"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("p", [
              _vm._v("\n            عکس خود را آپلود کنید\n            ")
            ]),
            _c("p", [
              _c("span", { staticClass: "body-2 info--text" }, [
                _vm._v(
                  "\n            نکته: حجم عکس کمتر از 3 مگابایت باشد.\n            "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("vue-dropzone", {
            ref: "dropzone",
            attrs: { id: "dropzone", options: _vm.dropzoneOptions },
            on: { "vdropzone-success": _vm.upload }
          }),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "#616161", dark: "" },
                  on: {
                    click: function($event) {
                      _vm.imageModal = false
                    }
                  }
                },
                [_vm._v("\n                بستن\n            ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SkeletonLoader.vue?vue&type=template&id=1af3f1eb&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SkeletonLoader.vue?vue&type=template&id=1af3f1eb&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("v-skeleton-loader", {
        staticClass: "mx-auto",
        attrs: { boilerplate: "boilerplate", type: "article", tile: "tile" }
      }),
      _vm._v(" "),
      _c("v-skeleton-loader", {
        staticClass: "mx-auto",
        attrs: {
          boilerplate: "boilerplate",
          type: "list-item-three-line",
          tile: "tile"
        }
      }),
      _vm._v(" "),
      _c("v-skeleton-loader", {
        staticClass: "mx-auto",
        attrs: {
          boilerplate: "boilerplate",
          type: "list-item-two-line",
          tile: "tile"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true& ***!
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
    { staticClass: "real-table" },
    [
      _c("editor-floating-menu", {
        attrs: { editor: _vm.editor },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var commands = ref.commands
              var menu = ref.menu
              var isActive = ref.isActive
              return [
                _c(
                  "div",
                  {
                    staticClass: "editor__floating-menu",
                    class: { "is-active": menu.isActive },
                    style: "top: " + menu.top + "px"
                  },
                  [
                    _c(
                      "v-tooltip",
                      {
                        attrs: { top: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      {
                                        staticClass: "menubar__button",
                                        class: {
                                          "is-active": isActive.image()
                                        },
                                        attrs: { text: "", large: "" },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.openModal(commands.image)
                                          }
                                        }
                                      },
                                      on
                                    ),
                                    [
                                      _c("v-icon", { attrs: { large: "" } }, [
                                        _vm._v("mdi-image-plus")
                                      ])
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
                      },
                      [_vm._v(" "), _c("span", [_vm._v("افزودن تصویر")])]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("editor-menu-bar", {
        attrs: { editor: _vm.editor },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var commands = ref.commands
              var isActive = ref.isActive
              return [
                _c(
                  "div",
                  { staticClass: "menubar" },
                  [
                    _vm._l(_vm.MenuBarButtons, function(button) {
                      return _c(
                        "v-btn",
                        {
                          key: button.icon,
                          staticClass: "menubar__button mt-2",
                          class: {
                            "is-active": button.active
                              ? isActive[button.active](button.context)
                              : ""
                          },
                          attrs: { small: "", color: "#ffd600", text: "" },
                          on: {
                            click: function($event) {
                              commands[button.command](button.context)
                            }
                          }
                        },
                        [
                          button.isIcon != 0
                            ? _c("v-icon", [
                                _vm._v("mdi-" + _vm._s(button.icon))
                              ])
                            : _c("span", { staticClass: "body-2" }, [
                                _vm._v(_vm._s(button.icon))
                              ])
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "menubar__button",
                        attrs: { small: "", color: "#ffd600", text: "" },
                        on: {
                          click: function($event) {
                            return commands.createTable({
                              rowsCount: 3,
                              colsCount: 3,
                              withHeaderRow: false
                            })
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("mdi-table-large-plus")])],
                      1
                    ),
                    _vm._v(" "),
                    isActive.table()
                      ? _c(
                          "span",
                          _vm._l(_vm.TableButtons, function(button) {
                            return _c(
                              "v-btn",
                              {
                                key: button.icon,
                                staticClass: "menubar__button",
                                attrs: {
                                  small: "",
                                  color: "#ffd600",
                                  text: ""
                                },
                                on: {
                                  click: function($event) {
                                    commands[button.command](button.context)
                                  }
                                }
                              },
                              [
                                button.isIcon != 0
                                  ? _c("v-icon", [
                                      _vm._v("mdi-" + _vm._s(button.icon))
                                    ])
                                  : _c("span", { staticClass: "body-2" }, [
                                      _vm._v(_vm._s(button.icon))
                                    ])
                              ],
                              1
                            )
                          }),
                          1
                        )
                      : _vm._e()
                  ],
                  2
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("editor-menu-bubble", {
        staticClass: "menububble",
        attrs: { editor: _vm.editor, "keep-in-bounds": true },
        on: { hide: _vm.hideLinkMenu },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var commands = ref.commands
              var menu = ref.menu
              var getMarkAttrs = ref.getMarkAttrs
              var isActive = ref.isActive
              return [
                _c(
                  "div",
                  {
                    staticClass: "menububble",
                    class: { "is-active": menu.isActive },
                    style: "left: " + menu.left + "px; top: " + menu.top + "px;"
                  },
                  [
                    _vm.linkMenuIsActive
                      ? _c(
                          "v-form",
                          {
                            ref: "linkInput",
                            staticClass: "menububble__form ltr",
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.setLinkUrl(
                                  commands.link,
                                  _vm.linkUrl
                                )
                              }
                            }
                          },
                          [
                            _c("v-text-field", {
                              staticClass: "menububble__input w-200",
                              attrs: {
                                type: "text",
                                placeholder: "www.example.com"
                              },
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
                                attrs: { text: "", small: "", dark: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.setLinkUrl(commands.link, null)
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "body-2" }, [
                                  _vm._v("حذف")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "menububble__button",
                                attrs: { text: "", small: "", dark: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.setLinkUrl(
                                      commands.link,
                                      _vm.linkUrl
                                    )
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "body-2" }, [
                                  _vm._v("ثبت")
                                ])
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
                              attrs: { text: "", small: "", dark: "" },
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
                                    isActive.link()
                                      ? "ویرایش لینک"
                                      : "افزودن لینک"
                                  )
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.bubbleMenuButtons, function(button) {
                            return _c(
                              "v-btn",
                              {
                                key: button.icon,
                                staticClass: "menububble__button",
                                class: {
                                  "is-active": button.active
                                    ? isActive[button.active](button.context)
                                    : ""
                                },
                                attrs: { small: "", text: "", dark: "" },
                                on: {
                                  click: function($event) {
                                    commands[button.command](button.context)
                                  }
                                }
                              },
                              [
                                button.isIcon != 0
                                  ? _c("v-icon", [
                                      _vm._v("mdi-" + _vm._s(button.icon))
                                    ])
                                  : _c("span", { staticClass: "body-2" }, [
                                      _vm._v(_vm._s(button.icon))
                                    ])
                              ],
                              1
                            )
                          })
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
        staticClass: "mt-6",
        attrs: { editor: _vm.editor }
      }),
      _vm._v(" "),
      _c("DropzoneModal", { ref: "dropzone", on: { image: _vm.uploadImage } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DropzoneModal.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/DropzoneModal.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true& */ "./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true&");
/* harmony import */ var _DropzoneModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropzoneModal.vue?vue&type=script&lang=js& */ "./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropzoneModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "01a222f7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DropzoneModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DropzoneModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SkeletonLoader.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/SkeletonLoader.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SkeletonLoader_vue_vue_type_template_id_1af3f1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SkeletonLoader.vue?vue&type=template&id=1af3f1eb&scoped=true& */ "./resources/js/components/SkeletonLoader.vue?vue&type=template&id=1af3f1eb&scoped=true&");
/* harmony import */ var _SkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SkeletonLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/SkeletonLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SkeletonLoader_vue_vue_type_template_id_1af3f1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SkeletonLoader_vue_vue_type_template_id_1af3f1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1af3f1eb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SkeletonLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SkeletonLoader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/SkeletonLoader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SkeletonLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SkeletonLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SkeletonLoader.vue?vue&type=template&id=1af3f1eb&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/SkeletonLoader.vue?vue&type=template&id=1af3f1eb&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonLoader_vue_vue_type_template_id_1af3f1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SkeletonLoader.vue?vue&type=template&id=1af3f1eb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SkeletonLoader.vue?vue&type=template&id=1af3f1eb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonLoader_vue_vue_type_template_id_1af3f1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonLoader_vue_vue_type_template_id_1af3f1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TiptapEditor.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/TiptapEditor.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true& */ "./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true&");
/* harmony import */ var _TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TiptapEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ee95d3c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TiptapEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TiptapEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);