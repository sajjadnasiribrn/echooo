<template>
    <div class="real-table">
        <editor-floating-menu :editor="editor"
                              v-slot="{ commands, menu, isActive }"
        >
            <div class="editor__floating-menu"
                 :class="{ 'is-active': menu.isActive }"
                 :style="`top: ${menu.top}px`"
            >
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn class="menubar__button"
                               :class="{ 'is-active': isActive.image() }"
                               @click.stop="openModal(commands.image)"
                               text
                               v-on="on"
                               large
                        >
                            <v-icon large>mdi-image-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>افزودن تصویر</span>
                </v-tooltip>
            </div>
        </editor-floating-menu>
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive}"
        >
            <div class="menubar">
                <v-btn class="menubar__button mt-2"
                       :class="{'is-active': button.active? isActive[button.active](button.context) : '' }"
                       @click="commands[button.command](button.context)"
                       small
                       color="#ffd600"
                       text
                       v-for="button in MenuBarButtons"
                       :key="button.icon"
                >
                    <v-icon v-if="button.isIcon!=0">mdi-{{ button.icon }}</v-icon>
                    <span class="body-2" v-else>{{button.icon}}</span>
                </v-btn>
                <v-btn
                    class="menubar__button"
                    small
                    color="#ffd600"
                    text
                    @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
                >
                    <v-icon>mdi-table-large-plus</v-icon>
                </v-btn>
                <span v-if="isActive.table()">
                    <v-btn class="menubar__button"
                           @click="commands[button.command](button.context)"
                           small
                           color="#ffd600"
                           text
                           v-for="button in TableButtons"
                           :key="button.icon"
                    >
                    <v-icon v-if="button.isIcon!=0">mdi-{{ button.icon }}</v-icon>
                    <span class="body-2" v-else>{{button.icon}}</span>
                </v-btn>
                </span>
            </div>
        </editor-menu-bar>
        <editor-menu-bubble :editor="editor"
                            class="menububble"
                            @hide="hideLinkMenu"
                            v-slot="{ commands, menu, getMarkAttrs, isActive }"
                            :keep-in-bounds="true"
        >
            <div class="menububble"
                 :class="{ 'is-active': menu.isActive }"
                 :style="`left: ${menu.left}px; top: ${menu.top}px;`"
            >
                <v-form ref="linkInput" class="menububble__form ltr"
                        v-if="linkMenuIsActive"
                        @submit.prevent="setLinkUrl(commands.link, linkUrl)"
                >
                    <v-text-field class="menububble__input w-200" type="text"
                                  v-model="linkUrl" placeholder="www.example.com"
                                  @keydown.esc="hideLinkMenu">

                    </v-text-field>
                    <v-btn class="menububble__button"
                           @click="setLinkUrl(commands.link, null)"
                           text
                           small
                           dark
                    >
                        <span class="body-2">حذف</span>
                    </v-btn>
                    <v-btn class="menububble__button"
                           @click="setLinkUrl(commands.link, linkUrl)"
                           text
                           small
                           dark
                    >
                        <span class="body-2">ثبت</span>
                    </v-btn>
                </v-form>


                <template v-else>
                    <v-btn
                        class="menububble__button"
                        text
                        small
                        dark
                        @click="showLinkMenu(getMarkAttrs('link'))"
                        :class="{ 'is-active': isActive.link() }"
                    >
                        <span>{{ isActive.link() ? 'ویرایش لینک' : 'افزودن لینک'}}</span>

                    </v-btn>
                    <v-btn class="menububble__button"
                           :class="{'is-active': button.active? isActive[button.active](button.context) : '' }"
                           @click="commands[button.command](button.context)"
                           small
                           text
                           dark
                           v-for="button in bubbleMenuButtons"
                           :key="button.icon"
                    >
                        <v-icon v-if="button.isIcon!=0">mdi-{{ button.icon }}</v-icon>
                        <span class="body-2" v-else>{{button.icon}}</span>
                    </v-btn>
                </template>
            </div>
        </editor-menu-bubble>
        <editor-content :editor="editor" class="mt-6">
        </editor-content>

        <DropzoneModal
            ref="dropzone"
            @image="uploadImage"
        ></DropzoneModal>

    </div>
</template>

<script>
    import {
        Editor,
        EditorContent,
        EditorFloatingMenu,
        EditorMenuBar,
        EditorMenuBubble
    } from 'tiptap';
    import {
        Blockquote,
        Bold,
        BulletList,
        Code,
        CodeBlock,
        HardBreak,
        Heading,
        History,
        HorizontalRule,
        Image,
        Italic,
        Link,
        ListItem,
        OrderedList,
        Placeholder,
        Strike,
        Table,
        TableCell,
        TableHeader,
        TableRow,
        TodoItem,
        TodoList,
        Underline
    } from 'tiptap-extensions';
    import VueDropzone from 'vue2-dropzone';
    import DropzoneModal from "./DropzoneModal";

    export default {
        name: "TiptapEditor",
        components: {
            DropzoneModal,
            EditorMenuBar,
            EditorContent,
            EditorMenuBubble,
            EditorFloatingMenu,
            VueDropzone,
        },
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        //TODO composition-api
          data() {
            return {
                MenuBarButtons: [
                    {
                        active: '',
                        command: 'undo',
                        icon: 'redo',
                        tooltip: 'برگرداندن به بعدی',
                        context: {}
                    },
                    {
                        active: '',
                        command: 'redo',
                        icon: 'undo',
                        tooltip: 'برگرداندن به قبلی',
                        context: {}
                    },
                    {
                        active: 'italic',
                        command: 'italic',
                        icon: 'format-italic',
                        tooltip: 'ایتالیک',
                        context: {}
                    },
                    {
                        active: 'bold',
                        command: 'bold',
                        icon: 'format-bold',
                        tooltip: 'درشت',
                        context: {}
                    },
                    {
                        active: 'strike',
                        command: 'strike',
                        icon: 'format-strikethrough',
                        tooltip: 'ابطال',
                        context: {}
                    },
                    {
                        active: 'underline',
                        command: 'underline',
                        icon: 'format-underline',
                        tooltip: 'مهم',
                        context: {}
                    },
                    {
                        active: 'code_block',
                        command: 'code_block',
                        isIcon: 0,
                        icon: 'بلاک کد',
                        tooltip: 'بلاک کد',
                        context: {}
                    },
                    {
                        active: 'code',
                        command: 'code',
                        isIcon: 0,
                        icon: 'کد',
                        tooltip: 'کد',
                        context: {}
                    },
                    {
                        active: 'heading',
                        command: 'heading',
                        icon: 'format-header-2',
                        tooltip: 'هدر 2',
                        context: {level: 2}
                    },
                    {
                        active: 'heading',
                        command: 'heading',
                        icon: 'format-header-3',
                        tooltip: 'هدر 3',
                        context: {level: 3}
                    },
                    {
                        active: 'bullet_list',
                        command: 'bullet_list',
                        icon: 'format-list-bulleted',
                        tooltip: 'لیست',
                        context: {}
                    },
                    {
                        active: 'ordered_list',
                        command: 'ordered_list',
                        icon: 'format-list-numbered',
                        tooltip: 'لیست ترتیبی',
                        context: {}
                    },
                    {
                        active: 'blockquote',
                        command: 'blockquote',
                        icon: 'format-quote-close',
                        tooltip: 'نقل قول',
                        context: {}
                    },
                    {
                        active: '',
                        command: 'horizontal_rule',
                        isIcon: 0,
                        icon: 'خط',
                        tooltip: 'خط',
                        context: {}
                    },

                ],
                TableButtons: [
                    {
                        command: 'deleteTable',
                        icon: 'table-large-remove',
                        tooltip: 'حذف جدول',
                        context: {}
                    },
                    {
                        command: 'addColumnBefore',
                        icon: 'table-column-plus-after',
                        tooltip: 'افزودن ستون به قبل',
                        context: {}
                    },
                    {
                        command: 'addColumnAfter',
                        icon: 'table-column-plus-before',
                        tooltip: 'افزودن ستون به بعد',
                        context: {}
                    },
                    {
                        command: 'deleteColumn',
                        icon: 'table-column-remove',
                        tooltip: 'حذف ستون',
                        context: {}
                    },
                    {
                        command: 'addRowBefore',
                        icon: 'table-row-plus-after',
                        tooltip: 'افزودن سطر به قبل',
                        context: {}
                    },
                    {
                        command: 'addRowAfter',
                        icon: 'table-row-plus-before',
                        tooltip: 'افزودن سطر به بعد',
                        context: {}
                    },
                    {
                        command: 'deleteRow',
                        icon: 'table-row-remove',
                        tooltip: 'حذف سطر',
                        context: {}
                    },
                    {
                        command: 'toggleCellMerge',
                        icon: 'mdi-table-merge-cells',
                        tooltip: 'حذف سطر',
                        context: {}
                    },
                ],
                bubbleMenuButtons: [
                    {
                        active: 'bold',
                        command: 'bold',
                        icon: 'format-bold',
                        tooltip: 'درشت',
                        context: {}
                    },
                    {
                        active: 'underline',
                        command: 'underline',
                        icon: 'format-underline',
                        tooltip: 'مهم',
                        context: {}
                    },
                    {
                        active: 'heading',
                        command: 'heading',
                        icon: 'format-header-2',
                        tooltip: 'هدر 2',
                        context: {level: 2}
                    },
                    {
                        active: 'heading',
                        command: 'heading',
                        icon: 'format-header-3',
                        tooltip: 'هدر 3',
                        context: {level: 3}
                    },
                    {
                        active: 'blockquote',
                        command: 'blockquote',
                        icon: 'format-quote-close',
                        tooltip: 'نقل قول',
                        context: {}
                    },

                ],
                editor: new Editor({
                    extensions: [
                        new Blockquote(),
                        new CodeBlock(),
                        new HardBreak(),
                        new HorizontalRule(),
                        new OrderedList(),
                        new BulletList(),
                        new ListItem(),
                        new TodoItem(),
                        new TodoList(),
                        new Bold(),
                        new Code(),
                        new Image(),
                        new Italic(),
                        new Link(),
                        new Strike(),
                        new Underline(),
                        new History(),
                        new Table({
                            resizable: true,
                        }),
                        new TableHeader(),
                        new TableCell(),
                        new TableRow(),
                        new Heading({level: [1, 2, 3]}),
                        new Placeholder({
                            emptyEditorClass: 'is-editor-empty',
                            emptyNodeClass: 'is-empty',
                            emptyNodeText: 'متن ...',
                            showOnlyWhenEditable: true,
                            showOnlyCurrent: true,
                        })
                    ],
                    content: this.value,
                    onUpdate: ({getHTML}) => {
                        this.$emit('input', getHTML())
                    }
                }),
                linkUrl: null,
                linkMenuIsActive: false,

            }
        },
        methods: {
            openModal(imageCommand) {
                this.$refs.dropzone.showModal(imageCommand);
            },
            uploadImage(data) {
                data.imageCommand(data.attrs);
            },
            showLinkMenu(attrs) {
                this.linkUrl = attrs.href;
                this.linkMenuIsActive = true;
            },
            hideLinkMenu() {
                this.linkMenuIsActive = false
            },
            setLinkUrl(command, url) {
                if (url!=null && url.indexOf("https://") != 0) {
                    url = 'https://' + url;
                }
                command({href: url})
                this.hideLinkMenu()
            },
        },
        beforeDestroy() {
            this.editor.destroy();
        },
    }
</script>

<style scoped>

</style>
