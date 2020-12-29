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
import "codemirror/theme/idea.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/indent-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/xml-fold";
import "codemirror/addon/fold/markdown-fold";
require("script-loader!jsonlint");
export default {
  name: "JsonEditor",
  /* eslint-disable vue/require-prop-types */
  props: {
    jsonData: Object,
  },
  data() {
    return {
      jsonEditor: false,
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
      deep: true,
    },
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: "application/json",
      gutters: [
        "CodeMirror-linenumbers",
        "CodeMirror-foldgutter",
        "CodeMirror-lint-markers",
      ],
      theme: "idea",
      lint: true,
      autofocus: true,
      autoRefresh: true,
      smartIndent: true,
      foldGutter: true,
      styleActiveLine: true,
    });
    this.jsonEditor.setValue(JSON.stringify(this.jsonData, null, 2));
  },
  methods: {
    getValue() {
      return JSON.parse(this.jsonEditor.getValue());
    },
    api(api) {
      this.jsonEditor[api]();
    },
  },
};
</script>

<style lang="scss">
.json-editor {
  height: 100%;
  position: relative;
  .CodeMirror {
    height: auto;
    min-height: 300px;
    .CodeMirror-scroll {
      min-height: 300px;
    }
    .cm-s-rubyblue span.cm-string {
      color: #f08047;
    }
  }
}
</style>
