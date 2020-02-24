<template>
    <div class="json-editor">
        <textarea ref="textarea" />
    </div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/addon/lint/lint.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/rubyblue.css";
require("script-loader!jsonlint");
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";

export default {
    name: "JsonEditor",
    /* eslint-disable vue/require-prop-types */
    props: {
        jsonData: Object
    },
    data() {
        return {
            jsonEditor: false
        };
    },
    watch: {
        jsonData: {
            handler(value) {
                const editorValue = this.jsonEditor.getValue();
                if (value !== editorValue) {
                    this.jsonEditor.setValue(JSON.stringify(this.jsonData, null, 2));
                }
            },
            deep: true
        }
    },
    mounted() {
        this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
            lineNumbers: true,
            mode: "application/json",
            gutters: ["CodeMirror-lint-markers"],
            theme: "rubyblue",
            lint: true,
            autofocus: true,
            autoRefresh: true
        });
        this.jsonEditor.setValue(JSON.stringify(this.jsonData, null, 2));
    },
    methods: {
        getValue() {
            return JSON.parse(this.jsonEditor.getValue());
        },
        api(api) {
            this.jsonEditor[api]();
        }
    }
};
</script>

<style scoped>
.json-editor {
    height: 100%;
    position: relative;
}
.json-editor >>> .CodeMirror {
    height: auto;
    min-height: 300px;
}
.json-editor >>> .CodeMirror-scroll {
    min-height: 300px;
}
.json-editor >>> .cm-s-rubyblue span.cm-string {
    color: #f08047;
}
</style>
