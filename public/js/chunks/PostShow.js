(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/PostShow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
/* harmony import */ var _service_EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/EventBus */ "./resources/js/service/EventBus.js");
/* harmony import */ var _TiptapComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TiptapComment */ "./resources/js/components/posts/TiptapComment.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PostComments",
  components: {
    TiptapComment: _TiptapComment__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    data: {
      type: Object
    },
    commentColor: {
      type: String
    },
    writerId: {
      type: Number
    }
  },
  setup: function setup(props, _ref) {
    var root = _ref.root;
    // state
    var showUpdate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    var deleteDialogComment = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    var loadingDelete = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    var showReply = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    var replyButtonContent = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('ارسال پاسخ');
    var replyButtonColor = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('info');
    var extandTitle = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('پاسخ دادن به این نظر');
    var reply = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      content: null,
      type: props.data.type,
      comment_id: props.data.id
    });
    var comment = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(props.data); //COMPUTEDS

    var canShowDelete = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return root.$store.state.isLoggedIn && root.$store.state.user.id == props.data.user_id || root.$store.state.isLoggedIn && root.$store.state.user.id == props.writerId;
    });
    var canShowUpdate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return root.$store.state.isLoggedIn && root.$store.state.user.id == props.data.user_id;
    });
    var canShowComment = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return root.$store.state.isLoggedIn && props.data.type == 2 && (root.$store.state.user.id == props.data.user_id || root.$store.state.user.id == props.writerId) || props.data.type == 1;
    }); // methods

    var saveReply = function saveReply() {
      replyButtonContent.value = 'در حال ارسال...';
      replyButtonColor.value = 'disable';
      axios.post("/api/replies/".concat(root.$route.params.slug), reply.value).then(function (_ref2) {
        var data = _ref2.data;
        replyButtonContent.value = 'پاسخ شما با موفقیت ارسال شد.';
        replyButtonColor.value = 'success';
        setTimeout(function () {
          commentButtonContent.value = 'ارسال پاسخ';
          commentButtonColor.value = 'info';
        }, 500);
        cancelReply();
      })["catch"](function (_ref3) {
        var response = _ref3.response;
        _service_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('error', response.data.errors.content[0]);
        replyButtonContent.value = 'ارسال پاسخ';
        replyButtonColor.value = 'info';
      });
    };

    var cancelReply = function cancelReply() {
      setTimeout(function () {
        reply.value.content = null;
        showReply.value = false;
        showUpdate.value = false;
      }, 400);
    };

    var deleteComment = function deleteComment() {
      loadingDelete.value = true;
      axios["delete"]("/api/comments/".concat(comment.value.id, "/").concat(props.writerId)).then(function () {
        deleteDialogComment.value = false;
        loadingDelete.value = false;
        _service_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('successDelete', 'دیدگاه مورد نظر حذف شد.');
      })["finally"](function () {
        loadingDelete.value = false;
        deleteDialogComment.value = false;
      });
    };

    var showReplyTextarea = function showReplyTextarea() {
      //EventBus.$emit('setContent','');
      showUpdate.value = false;
      showReply.value = false;
      root.$store.dispatch('setComment', '');
      extandTitle.value = 'پاسخ دادن به این نظر:';
      replyButtonContent.value = 'ارسال پاسخ';
      replyButtonColor.value = 'info';
      setTimeout(function () {
        showReply.value = true;
      }, 100);
    };

    var showUpdateTextarea = function showUpdateTextarea() {
      showUpdate.value = false;
      showReply.value = false;
      root.$store.dispatch('setComment', comment.value.content);
      extandTitle.value = 'ویرایش این نظر:';
      replyButtonContent.value = 'ویرایش نظر';
      replyButtonColor.value = 'info';
      setTimeout(function () {
        showUpdate.value = true;
      }, 100);
    };

    var saveComment = function saveComment() {
      return showReply.value ? saveReply() : updateComment();
    };

    var updateComment = function updateComment() {
      replyButtonContent.value = 'در حال ویرایش...';
      replyButtonColor.value = 'disable';
      axios.patch("/api/comments/".concat(comment.value.id), reply.value).then(function (_ref4) {
        var data = _ref4.data;
        replyButtonContent.value = 'نظر شما با موفقیت ویرایش شد.';
        replyButtonColor.value = 'success';
        setTimeout(function () {
          commentButtonContent.value = 'ویرایش نظر';
          commentButtonColor.value = 'info';
        }, 500);
        cancelReply();
        comment.value.content = data.data.content;
      })["catch"](function (_ref5) {
        var response = _ref5.response;
        _service_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('error', response.data.errors.content[0]);
        replyButtonContent.value = 'ویرایش نظر';
        replyButtonColor.value = 'info';
      });
    }; //created_hook


    Echo.channel("echooo_reply_".concat(props.data.id)).listen('.reply.created', function (_ref6) {
      var reply = _ref6.reply;
      comment.value.replies.push(reply);
      _service_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('comment_created');
    });
    Echo.channel("echooo_reply_".concat(props.data.id)).listen('CommentDeletedEvent', function (event) {
      comment.value.replies = comment.value.replies.filter(function (c) {
        return c.id !== event.comment.id;
      });
      _service_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('comment_deleted');
    });
    return {
      extandTitle: extandTitle,
      showUpdate: showUpdate,
      loadingDelete: loadingDelete,
      replyButtonColor: replyButtonColor,
      replyButtonContent: replyButtonContent,
      showReply: showReply,
      reply: reply,
      comment: comment,
      canShowDelete: canShowDelete,
      canShowUpdate: canShowUpdate,
      canShowComment: canShowComment,
      deleteDialogComment: deleteDialogComment,
      saveComment: saveComment,
      showReplyTextarea: showReplyTextarea,
      showUpdateTextarea: showUpdateTextarea,
      deleteComment: deleteComment,
      cancelReply: cancelReply,
      moment: moment
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostSpeedDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PostSpeedDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PostSpeedDialog",
  props: {
    slug: {
      type: String
    }
  },
  setup: function setup(props, _ref) {
    var root = _ref.root;
    var fab = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    var deleteDialogPost = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

    var openDeletePostDialog = function openDeletePostDialog() {
      deleteDialogPost.value = true;
    };

    var deletePost = function deletePost() {
      axios["delete"]("/api/posts/".concat(props.slug)).then(function () {
        deleteDialogPost.value = false;
        root.$router.push('/posts/draft');
      });
    };

    return {
      deleteDialogPost: deleteDialogPost,
      fab: fab,
      openDeletePostDialog: openDeletePostDialog,
      deletePost: deletePost
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowPostSkeletonLoader"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/TiptapComment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/TiptapComment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
/* harmony import */ var _service_EventBus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/EventBus */ "./resources/js/service/EventBus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 //TODO composition api

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TiptapComment",
  components: {
    EditorMenuBar: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBar"],
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorContent"],
    EditorMenuBubble: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBubble"]
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        root = _ref.root;
    var comment = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return root.$store.state.comment;
    });
    var MenuBarButtons = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])([{
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
      active: 'bullet_list',
      command: 'bullet_list',
      icon: 'format-list-bulleted',
      tooltip: 'لیست',
      context: {}
    }, {
      active: '',
      command: 'horizontal_rule',
      isIcon: 0,
      icon: 'خط',
      tooltip: 'خط',
      context: {}
    }]);
    var bubbleMenuButtons = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])([{
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
      active: 'blockquote',
      command: 'blockquote',
      icon: 'format-quote-close',
      tooltip: 'نقل قول',
      context: {}
    }, {
      active: 'strike',
      command: 'strike',
      icon: 'format-strikethrough',
      tooltip: 'ابطال',
      context: {}
    }, {
      active: 'italic',
      command: 'italic',
      icon: 'format-italic',
      tooltip: 'ایتالیک',
      context: {}
    }]);
    var editor = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
      extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Image"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Underline"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["History"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Table"]({
        resizable: true
      }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TableHeader"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TableCell"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TableRow"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Heading"]({
        level: [1, 2, 3]
      }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Placeholder"]({
        emptyEditorClass: 'is-editor-empty',
        emptyNodeClass: 'is-empty',
        emptyNodeText: 'نظر خود را بنویسید...',
        showOnlyWhenEditable: true,
        showOnlyCurrent: true
      })],
      content: comment.value,
      onUpdate: function onUpdate(_ref2) {
        var getHTML = _ref2.getHTML;
        emit('input', getHTML());
      }
    }));
    var linkUrl = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(null);
    var linkMenuIsActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);

    var showLinkMenu = function showLinkMenu(attrs) {
      linkUrl.value = attrs.href;
      linkMenuIsActive.value = true;
    };

    var hideLinkMenu = function hideLinkMenu() {
      linkMenuIsActive.value = false;
    };

    var setLinkUrl = function setLinkUrl(command, url) {
      if (url != null && url.indexOf("https://") != 0) {
        url = 'https://' + url;
      }

      command({
        href: url
      });
      hideLinkMenu();
    }; //hook


    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["onUnmounted"])(function () {
      editor.value.destroy();
    }); //EVENTBUS

    _service_EventBus__WEBPACK_IMPORTED_MODULE_3__["default"].$on('setContent', function (message) {
      editor.value.setContent(message);
    });
    return {
      MenuBarButtons: MenuBarButtons,
      bubbleMenuButtons: bubbleMenuButtons,
      editor: editor,
      comment: comment,
      linkUrl: linkUrl,
      linkMenuIsActive: linkMenuIsActive,
      showLinkMenu: showLinkMenu,
      hideLinkMenu: hideLinkMenu,
      setLinkUrl: setLinkUrl
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
/* harmony import */ var _components_posts_ShowPostSkeletonLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/posts/ShowPostSkeletonLoader */ "./resources/js/components/posts/ShowPostSkeletonLoader.vue");
/* harmony import */ var _components_posts_RelatedPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/posts/RelatedPost */ "./resources/js/components/posts/RelatedPost.vue");
/* harmony import */ var _components_posts_PostComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/posts/PostComments */ "./resources/js/components/posts/PostComments.vue");
/* harmony import */ var _service_EventBus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/EventBus */ "./resources/js/service/EventBus.js");
/* harmony import */ var _components_posts_TiptapComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/posts/TiptapComment */ "./resources/js/components/posts/TiptapComment.vue");
/* harmony import */ var _components_auth_MustLoginDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/auth/MustLoginDialog */ "./resources/js/components/auth/MustLoginDialog.vue");
/* harmony import */ var _components_posts_PostSpeedDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/posts/PostSpeedDialog */ "./resources/js/components/posts/PostSpeedDialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PostShowُ",
  components: {
    PostSpeedDialog: _components_posts_PostSpeedDialog__WEBPACK_IMPORTED_MODULE_7__["default"],
    MustLoginDialog: _components_auth_MustLoginDialog__WEBPACK_IMPORTED_MODULE_6__["default"],
    TiptapComment: _components_posts_TiptapComment__WEBPACK_IMPORTED_MODULE_5__["default"],
    PostComments: _components_posts_PostComments__WEBPACK_IMPORTED_MODULE_3__["default"],
    RelatedPost: _components_posts_RelatedPost__WEBPACK_IMPORTED_MODULE_2__["default"],
    ShowPostSkeletonLoader: _components_posts_ShowPostSkeletonLoader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.post.title,
      meta: [{
        name: 'description',
        content: this.post.description
      }]
    };
  },
  setup: function setup(props, _ref) {
    var root = _ref.root,
        refs = _ref.refs;
    // state
    var flashBotton = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    var mustLogin = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      dialog: false,
      message: ''
    });
    var successDelete = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      show: false,
      message: null
    });
    var options = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      duration: 900,
      offset: 400,
      easing: 'linear'
    });
    var commentColor = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(['purple lighten-5', 'green lighten-5', 'blue-grey lighten-5', 'grey lighten-3', 'brown lighten-5', 'cyan lighten-5']);
    var commentButtonContent = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('ارسال نظر');
    var commentButtonColor = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('info');
    var short_link = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
    var model = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    var post = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
    var related_posts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
    var comment = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      content: '',
      type: false,
      post_id: null
    });
    var error = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      show: false,
      message: null
    });
    var url = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return "http://ayandehmag.ir" + '/';
    });

    var onCopyShortLink = function onCopyShortLink() {
      var link = short_link.value;
      short_link.value = 'کپی شد.';
      setTimeout(function () {
        short_link.value = link;
      }, 1000);
    };

    var saveComment = function saveComment() {
      commentButtonContent.value = 'در حال ارسال...';
      commentButtonColor.value = 'disable';
      axios.post("/api/comments/".concat(post.value.slug), comment.value).then(function (_ref2) {
        var data = _ref2.data;
        comment.value.content = '';
        _service_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"].$emit('setContent', '');
        commentButtonContent.value = 'نظر شما با موفقیت ارسال شد.';
        commentButtonColor.value = 'success';
        setTimeout(function () {
          commentButtonContent.value = 'ارسال نظر';
          commentButtonColor.value = 'info';
        }, 1000);
      })["catch"](function (_ref3) {
        var response = _ref3.response;
        showErrorSnackbar(response.data.errors.content[0]);
        commentButtonContent.value = 'ارسال نظر';
        commentButtonColor.value = 'info';
      });
    };

    var showErrorSnackbar = function showErrorSnackbar(message) {
      error.value.show = true;
      error.value.message = message;
    };

    var showSuccessDeleteSnackbar = function showSuccessDeleteSnackbar(message) {
      successDelete.value.show = true;
      successDelete.value.message = message;
    };

    var bookmarkPost = function bookmarkPost(postModel) {
      if (root.$store.state.isLoggedIn) {
        postModel.is_bookmarked = !postModel.is_bookmarked;
        var reqType = postModel.is_bookmarked ? 'post' : 'delete';
        axios[reqType]("/api/bookmarks/".concat(postModel.slug));
      } else {
        mustLogin.value.message = 'برای ذخیره این نوشته به حساب خود وارد شوید';
        mustLogin.value.dialog = true;
      }
    };

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
      }
    };

    var followUser = function followUser() {
      axios.post("/api/follows/".concat(post.value.user.username)).then(function () {
        post.value.user.is_follows = !post.value.user.is_follows;
      });
    };

    var loginForCommentDialog = function loginForCommentDialog() {
      mustLogin.value.message = 'برای ارسال نظر به حساب خود وارد شوید';
      mustLogin.value.dialog = true;
    }; // created hook


    axios.get("/api/posts/".concat(root.$route.params.slug)).then(function (_ref4) {
      var data = _ref4.data;
      post.value = data.post;
      related_posts.value = data.related_posts;
      short_link.value = url.value + 'link/' + data.post.short_link;
      comment.value.post_id = data.post.id;
      firstComment.value = refs.firstOfComments;
      Echo.channel("echooo_comment_".concat(data.post.id)).listen('.comment.created', function (_ref5) {
        var comment = _ref5.comment;
        post.value.parent_comments.push(comment);
        _service_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"].$emit('comment_created');
        setTimeout(function () {
          root.$vuetify.goTo("#c".concat(comment.id), options.value);
        }, 300);
      });
      Echo.channel("echooo_comment_".concat(data.post.id)).listen('CommentDeletedEvent', function (_ref6) {
        var comment = _ref6.comment;
        var findComment = post.value.parent_comments.find(function (c) {
          return c.id == comment.id;
        });
        var index = post.value.parent_comments.indexOf(findComment);
        post.value.parent_comments.splice(index, 1);
        _service_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"].$emit('comment_deleted');
      });
    });
    _service_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('error', function (message) {
      showErrorSnackbar(message);
    });
    _service_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('successDelete', function (message) {
      showSuccessDeleteSnackbar(message);
    });
    _service_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('comment_created', function () {
      post.value.comments_count++;
    });
    _service_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('comment_deleted', function () {
      post.value.comments_count--;
    });
    return {
      flashBotton: flashBotton,
      mustLogin: mustLogin,
      successDelete: successDelete,
      options: options,
      commentButtonContent: commentButtonContent,
      commentButtonColor: commentButtonColor,
      commentColor: commentColor,
      error: error,
      short_link: short_link,
      post: post,
      related_posts: related_posts,
      model: model,
      comment: comment,
      followUser: followUser,
      loginForCommentDialog: loginForCommentDialog,
      likePost: likePost,
      bookmarkPost: bookmarkPost,
      onCopyShortLink: onCopyShortLink,
      showErrorSnackbar: showErrorSnackbar,
      saveComment: saveComment,
      moment: moment
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor p.is-editor-empty:first-child::before {\n  content: attr(data-empty-text);\n  float: right;\n  color: #ffd600;\n  pointer-events: none;\n  height: 0;\n  font-style: italic;\n}\n.body-text {\n  text-align: justify;\n  line-height: 2.4rem;\n}\n.editor {\n  position: relative;\n}\n.editor__floating-menu {\n  position: absolute;\n  z-index: 1;\n  margin-top: -0.25rem;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.2s, visibility 0.2s;\n}\n.editor__floating-menu.is-active {\n  opacity: 1;\n  visibility: visible;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true& ***!
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
  return _vm.canShowComment
    ? _c(
        "div",
        [
          _c(
            "v-card",
            {
              staticClass: "mx-auto",
              attrs: { color: _vm.commentColor, outlined: "" }
            },
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
                              params: { username: _vm.comment.user.username }
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-avatar",
                            [
                              _c("v-img", {
                                attrs: { src: _vm.comment.user.profile_src }
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
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "font-weight-black",
                                  attrs: {
                                    text: "",
                                    to: {
                                      name: "user-posts",
                                      params: {
                                        username: _vm.comment.user.username
                                      }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.comment.user.name) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.data.type == 2
                                ? _c(
                                    "v-icon",
                                    {
                                      staticClass: "mr-3",
                                      attrs: { color: "red darken-3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                            mdi-shield-key\n                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              _vm._s(
                                _vm.moment(_vm.comment.created_at).fromNow()
                              )
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
                  _vm.canShowDelete
                    ? _c(
                        "v-icon",
                        {
                          staticClass: "pl-5",
                          on: {
                            click: function($event) {
                              _vm.deleteDialogComment = true
                            }
                          }
                        },
                        [_vm._v("mdi-delete")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.canShowUpdate
                    ? _c(
                        "v-icon",
                        {
                          staticClass: "pl-5",
                          on: { click: _vm.showUpdateTextarea }
                        },
                        [_vm._v("mdi-lead-pencil")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$store.state.isLoggedIn
                    ? _c(
                        "v-icon",
                        {
                          staticClass: "pl-5",
                          on: { click: _vm.showReplyTextarea }
                        },
                        [_vm._v("mdi-reply")]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-text", {
                staticClass: "black--text",
                domProps: { innerHTML: _vm._s(_vm.comment.content) }
              }),
              _vm._v(" "),
              _vm.showReply || _vm.showUpdate
                ? _c("div", { staticClass: "mt-12" }, [
                    _c("p", { staticClass: "mr-3" }, [
                      _vm._v(_vm._s(_vm.extandTitle))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("TiptapComment", {
                          ref: "tiptap",
                          staticClass: "mr-2",
                          model: {
                            value: _vm.reply.content,
                            callback: function($$v) {
                              _vm.$set(_vm.reply, "content", $$v)
                            },
                            expression: "reply.content"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex flex-row mb-2 ml-2" },
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "ml-3",
                            attrs: {
                              color: "red lighten-2",
                              large: "",
                              rounded: ""
                            },
                            on: { click: _vm.cancelReply }
                          },
                          [_vm._v("لغو")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              large: "",
                              color: _vm.replyButtonColor,
                              disabled: _vm.replyButtonColor === "disable",
                              rounded: ""
                            },
                            on: { click: _vm.saveComment }
                          },
                          [_vm._v(_vm._s(_vm.replyButtonContent))]
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.comment.replies, function(commentData) {
            return _c("PostComments", {
              key: commentData.id,
              staticClass: "mr-3 mt-3",
              attrs: {
                data: commentData,
                writer: _vm.writerId,
                commentColor: _vm.commentColor
              }
            })
          }),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "370px", persistent: "" },
              model: {
                value: _vm.deleteDialogComment,
                callback: function($$v) {
                  _vm.deleteDialogComment = $$v
                },
                expression: "deleteDialogComment"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-text", { staticClass: "pt-3" }, [
                    _c("span", { staticClass: "title" }, [
                      _vm._v(
                        "\n                    آیا از حذف این نظر مطمئن هستید؟\n                "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          on: {
                            click: function($event) {
                              _vm.deleteDialogComment = false
                            }
                          }
                        },
                        [_vm._v("لغو")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { loading: _vm.loadingDelete, color: "error" },
                          on: { click: _vm.deleteComment }
                        },
                        [_vm._v("تایید\n                ")]
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
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostSpeedDialog.vue?vue&type=template&id=0d442a98&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PostSpeedDialog.vue?vue&type=template&id=0d442a98&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        "v-speed-dial",
        {
          attrs: {
            bottom: "",
            left: "",
            fixed: "",
            direction: "top",
            transition: "slide-y-reverse-transition"
          },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function() {
                return [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", dark: "", fab: "" },
                      model: {
                        value: _vm.fab,
                        callback: function($$v) {
                          _vm.fab = $$v
                        },
                        expression: "fab"
                      }
                    },
                    [
                      _vm.fab
                        ? _c("v-icon", [_vm._v("mdi-close")])
                        : _c("v-icon", [_vm._v(" mdi-flash-outline")])
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.fab,
            callback: function($$v) {
              _vm.fab = $$v
            },
            expression: "fab"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                fab: "",
                dark: "",
                small: "",
                color: "green",
                to: { name: "edit-posts", params: { slug: _vm.slug } }
              }
            },
            [_c("v-icon", [_vm._v("mdi-pencil")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { fab: "", dark: "", small: "", color: "red" },
              on: {
                click: function($event) {
                  return _vm.openDeletePostDialog(_vm.slug)
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-delete")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { small: "", fab: "", color: "blue darken-3", dark: "" },
              on: {
                click: function($event) {
                  return _vm.$vuetify.goTo("#firstComment", _vm.options)
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-comment-outline")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "370px", persistent: "" },
          model: {
            value: _vm.deleteDialogPost,
            callback: function($$v) {
              _vm.deleteDialogPost = $$v
            },
            expression: "deleteDialogPost"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-text", { staticClass: "pt-3" }, [
                _c("span", { staticClass: "title" }, [
                  _vm._v(
                    "\n                                        آیا از حذف این نوشته مطمئن هستید؟\n                                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.deleteDialogPost = !_vm.deleteDialogPost
                        }
                      }
                    },
                    [_vm._v("بستن")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error" },
                      on: { click: _vm.deletePost }
                    },
                    [_vm._v("تایید\n            ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=template&id=006f7ef8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=template&id=006f7ef8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mb-6",
    attrs: {
      type: " avatar, article, list-item-three-line, list-item-two-line "
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/TiptapComment.vue?vue&type=template&id=7c3fb180&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/TiptapComment.vue?vue&type=template&id=7c3fb180& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                          ? _c("v-icon", [_vm._v("mdi-" + _vm._s(button.icon))])
                          : _c("span", { staticClass: "body-2" }, [
                              _vm._v(_vm._s(button.icon))
                            ])
                      ],
                      1
                    )
                  }),
                  1
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
        staticClass: "mt-6 mr-4",
        attrs: { editor: _vm.editor }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740& ***!
  \**********************************************************************************************************************************************************************************************************/
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
        { staticClass: "mt-md-8" },
        [
          _c(
            "v-row",
            { staticClass: "d-flex justify-center" },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "8" } },
                [
                  _vm.post.user
                    ? [
                        _c(
                          "v-list-item",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "user-posts",
                                    params: { username: _vm.post.user.username }
                                  }
                                }
                              },
                              [
                                _c(
                                  "v-list-item-avatar",
                                  { attrs: { size: "80" } },
                                  [
                                    _c(
                                      "v-avatar",
                                      { attrs: { size: "80" } },
                                      [
                                        _c("v-img", {
                                          attrs: {
                                            src:
                                              _vm.post.user.profile_src ||
                                              "/img/avatar.png"
                                          }
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
                                  "v-list-item-title",
                                  { staticClass: "font-weight-bold" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "font-weight-black",
                                        attrs: {
                                          to: {
                                            name: "user-posts",
                                            params: {
                                              username: _vm.post.user.username
                                            }
                                          },
                                          text: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.post.user.name) +
                                            "\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.$store.state.isLoggedIn &&
                                    _vm.$store.state.user.id != _vm.post.user.id
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass:
                                              "hidden-sm-and-down darken-2 px-5 mt-3 mr-3 mb-3",
                                            attrs: {
                                              color: _vm.post.user.is_follows
                                                ? "success"
                                                : "info",
                                              rounded: "",
                                              dark: "",
                                              small: ""
                                            },
                                            on: { click: _vm.followUser }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.post.user.is_follows
                                                  ? "دنبال میکنید"
                                                  : "دنبال کردن"
                                              ) +
                                                "\n                                     \n                                    "
                                            ),
                                            _c(
                                              "v-icon",
                                              { attrs: { small: "" } },
                                              [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.post.user.is_follows
                                                        ? "mdi-check-outline"
                                                        : "mdi-plus"
                                                    ) +
                                                    "\n                                    "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-subtitle",
                                  { staticClass: "body-2 grey--text" },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(_vm.post.user.bio) +
                                          "\n                            "
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-subtitle",
                                  { staticClass: "caption grey--text" },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm
                                              .moment(_vm.post.created_at)
                                              .fromNow()
                                          ) +
                                          " / خواندن " +
                                          _vm._s(_vm.post.min_read) +
                                          " دقیقه\n                            "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "hidden-md-and-up" },
                                      [
                                        _vm.$store.state.isLoggedIn &&
                                        _vm.$store.state.user.id !=
                                          _vm.post.user.id
                                          ? _c(
                                              "v-btn",
                                              {
                                                staticClass:
                                                  "darken-2 px-5 mt-3 mr-3 mb-3",
                                                attrs: {
                                                  color: _vm.post.user
                                                    .is_follows
                                                    ? "success"
                                                    : "info",
                                                  rounded: "",
                                                  dark: "",
                                                  small: ""
                                                },
                                                on: { click: _vm.followUser }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.post.user.is_follows
                                                      ? "دنبال میکنید"
                                                      : "دنبال کردن"
                                                  ) +
                                                    "\n                                         \n                                        "
                                                ),
                                                _c(
                                                  "v-icon",
                                                  { attrs: { small: "" } },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.post.user
                                                            .is_follows
                                                            ? "mdi-check-outline"
                                                            : "mdi-plus"
                                                        ) +
                                                        "\n                                        "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "my-5" }, [
                          _c(
                            "h1",
                            { staticClass: "display-1 font-weight-bold" },
                            [_vm._v(_vm._s(_vm.post.title))]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.post.image != "/img/posts/none"
                          ? _c(
                              "div",
                              {
                                staticClass: "mt-10",
                                attrs: { align: "center", justify: "center" }
                              },
                              [_c("v-img", { attrs: { src: _vm.post.image } })],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", {
                          staticClass:
                            "subtitle mt-8 mx-4 body-text real-table",
                          domProps: { innerHTML: _vm._s(_vm.post.content) }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "my-10" },
                          _vm._l(_vm.post.categories, function(category) {
                            return _c(
                              "v-btn",
                              {
                                key: category.slug,
                                staticClass: "mr-3 mt-2",
                                attrs: {
                                  depressed: "",
                                  to: {
                                    name: "post-category",
                                    params: { slug: category.slug }
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(category.title) +
                                    "\n                        "
                                )
                              ]
                            )
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          { staticClass: "d-flex flex-row mb-5 text-center" },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "4" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "" },
                                    on: { click: _vm.likePost }
                                  },
                                  [
                                    _c(
                                      "v-badge",
                                      {
                                        attrs: {
                                          content:
                                            _vm.post.likes_count == 0
                                              ? "0"
                                              : _vm.post.likes_count,
                                          color: "red darken-1"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          {
                                            class: {
                                              "red--text": _vm.post.is_liked
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.post.is_liked
                                                    ? "mdi-heart"
                                                    : "mdi-heart-outline"
                                                ) +
                                                "\n                                "
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
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "4" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$vuetify.goTo(
                                          "#firstComment",
                                          _vm.options
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "v-badge",
                                      {
                                        attrs: {
                                          content:
                                            _vm.post.comments_count > 0
                                              ? _vm.post.comments_count
                                              : "0",
                                          color: "cyan darken-1",
                                          bordered: ""
                                        }
                                      },
                                      [
                                        _c("v-icon", [
                                          _vm._v("mdi-comment-outline")
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
                              "v-col",
                              { attrs: { cols: "4" } },
                              [
                                _c(
                                  "v-btn",
                                  {
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
                                      {
                                        attrs: {
                                          content: "ذخیره",
                                          color: "blue-grey darken-3"
                                        }
                                      },
                                      [
                                        _c("v-icon", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.post.is_bookmarked
                                                  ? "mdi-bookmark"
                                                  : "mdi-bookmark-outline"
                                              ) +
                                              "\n                                "
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
                        ),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          { staticClass: "d-flex flex-row mb-5 text-center" },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-icon", [_vm._v("mdi-telegram")]),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    directives: [
                                      {
                                        name: "clipboard",
                                        rawName: "v-clipboard:copy",
                                        value: _vm.short_link,
                                        expression: "short_link",
                                        arg: "copy"
                                      },
                                      {
                                        name: "clipboard",
                                        rawName: "v-clipboard:success",
                                        value: _vm.onCopyShortLink,
                                        expression: "onCopyShortLink",
                                        arg: "success"
                                      }
                                    ],
                                    staticClass: "mr-3",
                                    attrs: {
                                      outlined: "",
                                      rounded: "",
                                      disabled: _vm.short_link === "کپی شد."
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.short_link) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _vm.related_posts.length > 0
                          ? _c(
                              "div",
                              { staticClass: "mt-12" },
                              [
                                _c(
                                  "p",
                                  { staticClass: "body-2 font-weight-bold" },
                                  [
                                    _vm._v(
                                      "شاید از این نوشته‌ها هم خوشتان بیاید:"
                                    )
                                  ]
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
                                          {
                                            attrs: {
                                              "active-class": "success",
                                              "show-arrows": ""
                                            },
                                            model: {
                                              value: _vm.model,
                                              callback: function($$v) {
                                                _vm.model = $$v
                                              },
                                              expression: "model"
                                            }
                                          },
                                          _vm._l(_vm.related_posts, function(
                                            related_post,
                                            i
                                          ) {
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
                                                        _c("RelatedPost", {
                                                          attrs: {
                                                            related_post: related_post
                                                          },
                                                          on: {
                                                            click: function(
                                                              event
                                                            ) {
                                                              _vm.bookmarkPost(
                                                                event
                                                              )
                                                            }
                                                          }
                                                        })
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
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-12" },
                          [
                            _c("p", { staticClass: "font-weight-bold" }, [
                              _vm._v("دیدگاه ها:")
                            ]),
                            _vm._v(" "),
                            _vm.$store.state.isLoggedIn
                              ? _c(
                                  "v-form",
                                  [
                                    _c("TiptapComment", {
                                      ref: "tiptap",
                                      staticClass: "mr-3",
                                      model: {
                                        value: _vm.comment.content,
                                        callback: function($$v) {
                                          _vm.$set(_vm.comment, "content", $$v)
                                        },
                                        expression: "comment.content"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-row",
                                      [
                                        _c("v-checkbox", {
                                          staticClass: "shrink mr-2 mt-0",
                                          attrs: { color: "red darken-3" },
                                          model: {
                                            value: _vm.comment.type,
                                            callback: function($$v) {
                                              _vm.$set(_vm.comment, "type", $$v)
                                            },
                                            expression: "comment.type"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              small: "",
                                              disabled: !_vm.comment.type,
                                              text: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.comment.type = false
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: { color: "red darken-3" }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        mdi-shield-key\n                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(
                                              "\n                                     \n                                    خصوصی ( قابل دیدن فقط برای شما و نویسنده )\n                                "
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
                                      [
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "ml-5 mb-3",
                                            attrs: {
                                              color: _vm.commentButtonColor,
                                              large: "",
                                              rounded: "",
                                              disabled:
                                                _vm.commentButtonColor ===
                                                "disable"
                                            },
                                            on: { click: _vm.saveComment }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.commentButtonContent
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              : [
                                  _c(
                                    "v-alert",
                                    {
                                      attrs: {
                                        text: "",
                                        prominent: "",
                                        type: "info",
                                        icon: "mdi-alert"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        {
                                          attrs: {
                                            align: "center",
                                            "no-gutters": ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-col",
                                            { staticClass: "flex-row" },
                                            [
                                              _vm._v(
                                                "\n\n                                        برای ارسال نظر ابتدا باید وارد حساب کاربری خود شوید.\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "shrink d-flex flex-row"
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "ml-2 mr-3",
                                                  attrs: {
                                                    color: "info",
                                                    outlined: "",
                                                    small: "",
                                                    rounded: ""
                                                  },
                                                  on: {
                                                    click:
                                                      _vm.loginForCommentDialog
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            ورود\n                                        "
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
                                ]
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.$store.state.isLoggedIn &&
                        _vm.$store.state.user.id == _vm.post.user.id
                          ? [
                              _c("PostSpeedDialog", {
                                attrs: { slug: _vm.post.slug }
                              })
                            ]
                          : [
                              _c(
                                "v-bottom-navigation",
                                {
                                  attrs: {
                                    "background-color": "deep-orange lighten-4",
                                    color: "red",
                                    fixed: "",
                                    "hide-on-scroll": ""
                                  }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: { click: _vm.likePost }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "red--text",
                                          attrs: { color: "red darken-1" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.post.likes_count == 0
                                                  ? "0"
                                                  : _vm.post.likes_count
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "red--text",
                                          class: {
                                            "red--text": _vm.post.is_liked
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.post.is_liked
                                                  ? "mdi-heart"
                                                  : "mdi-heart-outline"
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$vuetify.goTo(
                                            "#firstComment",
                                            _vm.options
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "info--text" },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.post.comments_count > 0
                                                  ? _vm.post.comments_count
                                                  : "0"
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        { staticClass: "info--text" },
                                        [_vm._v("mdi-comment-outline")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.bookmarkPost(_vm.post)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "success--text" },
                                        [
                                          _vm._v(
                                            "\n                                        ذخیره\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "success--text",
                                          attrs: { info: "" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.post.is_bookmarked
                                                  ? "mdi-bookmark"
                                                  : "mdi-bookmark-outline"
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                      ]
                    : [_c("show-post-skeleton-loader")],
                  _vm._v(" "),
                  _c("h3", { attrs: { id: "firstComment" } }),
                  _vm._v(" "),
                  _vm._l(_vm.post.parent_comments, function(comment) {
                    return _c(
                      "h4",
                      { key: comment.id, attrs: { id: "c" + comment.id } },
                      [
                        _c("PostComments", {
                          staticClass: "mt-10",
                          attrs: {
                            data: comment,
                            writerId: _vm.post.user.id,
                            commentColor: _vm.commentColor[comment.id % 6]
                          }
                        })
                      ],
                      1
                    )
                  })
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
        "v-snackbar",
        {
          attrs: { top: "", color: "red lighten-1" },
          model: {
            value: _vm.error.show,
            callback: function($$v) {
              _vm.$set(_vm.error, "show", $$v)
            },
            expression: "error.show"
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.error.message) + "\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { top: "", color: "success", timeout: 1500 },
          model: {
            value: _vm.successDelete.show,
            callback: function($$v) {
              _vm.$set(_vm.successDelete, "show", $$v)
            },
            expression: "successDelete.show"
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.successDelete.message) + "\n    ")]
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

/***/ "./resources/js/components/posts/PostComments.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostComments.vue?vue&type=template&id=4443491b&scoped=true& */ "./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&");
/* harmony import */ var _PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostComments.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4443491b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/PostComments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostComments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostComments.vue?vue&type=template&id=4443491b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/posts/PostSpeedDialog.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/posts/PostSpeedDialog.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostSpeedDialog_vue_vue_type_template_id_0d442a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostSpeedDialog.vue?vue&type=template&id=0d442a98&scoped=true& */ "./resources/js/components/posts/PostSpeedDialog.vue?vue&type=template&id=0d442a98&scoped=true&");
/* harmony import */ var _PostSpeedDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostSpeedDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/PostSpeedDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostSpeedDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostSpeedDialog_vue_vue_type_template_id_0d442a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostSpeedDialog_vue_vue_type_template_id_0d442a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d442a98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/PostSpeedDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/PostSpeedDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/posts/PostSpeedDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSpeedDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostSpeedDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostSpeedDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSpeedDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/PostSpeedDialog.vue?vue&type=template&id=0d442a98&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/posts/PostSpeedDialog.vue?vue&type=template&id=0d442a98&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSpeedDialog_vue_vue_type_template_id_0d442a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostSpeedDialog.vue?vue&type=template&id=0d442a98&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostSpeedDialog.vue?vue&type=template&id=0d442a98&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSpeedDialog_vue_vue_type_template_id_0d442a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSpeedDialog_vue_vue_type_template_id_0d442a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/posts/ShowPostSkeletonLoader.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/posts/ShowPostSkeletonLoader.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowPostSkeletonLoader_vue_vue_type_template_id_006f7ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowPostSkeletonLoader.vue?vue&type=template&id=006f7ef8&scoped=true& */ "./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=template&id=006f7ef8&scoped=true&");
/* harmony import */ var _ShowPostSkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowPostSkeletonLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowPostSkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowPostSkeletonLoader_vue_vue_type_template_id_006f7ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowPostSkeletonLoader_vue_vue_type_template_id_006f7ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "006f7ef8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/ShowPostSkeletonLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPostSkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowPostSkeletonLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPostSkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=template&id=006f7ef8&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=template&id=006f7ef8&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPostSkeletonLoader_vue_vue_type_template_id_006f7ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowPostSkeletonLoader.vue?vue&type=template&id=006f7ef8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/ShowPostSkeletonLoader.vue?vue&type=template&id=006f7ef8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPostSkeletonLoader_vue_vue_type_template_id_006f7ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPostSkeletonLoader_vue_vue_type_template_id_006f7ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/posts/TiptapComment.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/posts/TiptapComment.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TiptapComment_vue_vue_type_template_id_7c3fb180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TiptapComment.vue?vue&type=template&id=7c3fb180& */ "./resources/js/components/posts/TiptapComment.vue?vue&type=template&id=7c3fb180&");
/* harmony import */ var _TiptapComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TiptapComment.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/TiptapComment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TiptapComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TiptapComment_vue_vue_type_template_id_7c3fb180___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TiptapComment_vue_vue_type_template_id_7c3fb180___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/TiptapComment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/TiptapComment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/posts/TiptapComment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TiptapComment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/TiptapComment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/TiptapComment.vue?vue&type=template&id=7c3fb180&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/posts/TiptapComment.vue?vue&type=template&id=7c3fb180& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapComment_vue_vue_type_template_id_7c3fb180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TiptapComment.vue?vue&type=template&id=7c3fb180& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/TiptapComment.vue?vue&type=template&id=7c3fb180&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapComment_vue_vue_type_template_id_7c3fb180___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapComment_vue_vue_type_template_id_7c3fb180___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/service/EventBus.js":
/*!******************************************!*\
  !*** ./resources/js/service/EventBus.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_dist_vue_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.common.js */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue_dist_vue_common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_common_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new vue_dist_vue_common_js__WEBPACK_IMPORTED_MODULE_0___default.a());

/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue":
/*!*********************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostShow_vue_vue_type_template_id_e4eb1740___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostShow.vue?vue&type=template&id=e4eb1740& */ "./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&");
/* harmony import */ var _PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostShow.vue?vue&type=script&lang=js& */ "./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostShow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostShow.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostShow_vue_vue_type_template_id_e4eb1740___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostShow_vue_vue_type_template_id_e4eb1740___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Post/PostShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&":
/*!****************************************************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_e4eb1740___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=template&id=e4eb1740& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_e4eb1740___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_e4eb1740___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);