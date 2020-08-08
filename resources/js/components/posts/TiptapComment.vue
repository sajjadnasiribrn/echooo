<template>

    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive}"
        >
            <div class="menubar">
                <v-btn class="menubar__button mt-2"
                       :class="{'is-active': button.active ?
                        isActive[button.active](button.context) : '' }"
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
        <editor-content :editor="editor" class="mt-6 mr-4">
        </editor-content>

    </div>
</template>

<script>
    import {
        Editor,
        EditorContent,
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
    import {ref, onUnmounted, computed} from '@vue/composition-api';
    import EventBus from "../../service/EventBus";

//TODO composition api
    export default {
        name: "TiptapComment",
        components: {
            EditorMenuBar,
            EditorContent,
            EditorMenuBubble,
        },

        setup(props, { emit, root }) {
            const comment = computed(() => {
                return root.$store.state.comment;
            });
           const MenuBarButtons= ref([
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
                    active: 'bullet_list',
                    command: 'bullet_list',
                    icon: 'format-list-bulleted',
                    tooltip: 'لیست',
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

            ]);
           const bubbleMenuButtons= ref([
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
                    active: 'blockquote',
                    command: 'blockquote',
                    icon: 'format-quote-close',
                    tooltip: 'نقل قول',
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
                   active: 'italic',
                   command: 'italic',
                   icon: 'format-italic',
                   tooltip: 'ایتالیک',
                   context: {}
               },
            ]);
               const editor= ref(new Editor({
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
                        emptyNodeText: 'نظر خود را بنویسید...',
                        showOnlyWhenEditable: true,
                        showOnlyCurrent: true,
                    }),
                ],
                content: comment.value,
                onUpdate: ({getHTML}) => {
                    emit('input', getHTML());
                }
            }));
               const linkUrl= ref(null);
               const linkMenuIsActive= ref(false);

            const showLinkMenu=(attrs)=> {
                linkUrl.value = attrs.href;
                linkMenuIsActive.value = true;
            };

            const hideLinkMenu=()=> {
                linkMenuIsActive.value = false;
            };
            const setLinkUrl=(command, url)=> {
                if (url!=null && url.indexOf("https://") != 0) {
                    url = 'https://' + url;
                }
                command({href : url});
                hideLinkMenu()
            };

            //hook

            onUnmounted(() => {
                editor.value.destroy();
            });

            //EVENTBUS

            EventBus.$on('setContent', (message) => {
                editor.value.setContent(message);
            });



            return{
                MenuBarButtons,
                bubbleMenuButtons,
                editor,
                comment,
                linkUrl,
                linkMenuIsActive,
                showLinkMenu,
                hideLinkMenu,
                setLinkUrl
            }
        },
    }
</script>

<style lang="scss">

</style>
