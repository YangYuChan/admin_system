<template>
  <div class="tinymce-container">
    <Editor :id="tinymceId" v-model="myValue" :init="editorInit" @onClick="onClick"></Editor>
    <!-- <div class="editor-custom-btn-container">
      <editorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK" />
    </div>-->
  </div>
</template>

<script>
import tinymce from "tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";

import plugins from './plugins'
import toolbar from './toolbar'
// import editorImage from './components/EditorImage'
export default {
  data() {
    return {
     
      tinymceId: this.id,
      myValue: this.value,
      editorInit: {
        language_url: "/tinymce/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/lightgray",
        plugins: plugins,
        toolbar: toolbar,
        branding: false,
				menubar: false,
				end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
					const img = "data:image/jpeg;base64," + blobInfo.base64();
					this.handleImgUpload(blobInfo, success, failure);
          success(img);
        },
        branding: false
      }
    };
  },
  props: {
    id: {
      type: String,
      default: function() {
        return (
          "vue-tinymce-" +
          +new Date() +
          ((Math.random() * 1000).toFixed(0) + "")
        );
      }
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      required: false,
      default: "500"
    },
    width: {
      type: [Number, String],
      required: false,
      default: 'auto'
    }
  },
  computed: {
    containerWidth() {
      const width = this.width;
      if (/^[\d]+(\.[\d]+)?$/.test(width)) {
        // matches `100`, `'100'`
        return `${width}px`;
      }
      return width;
    }
  },
 
 	watch: {
    value(newValue) {
      this.myValue = newValue
    },
    myValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  mounted() {
    tinymce.init({});
  },
  methods: {
		onClick(e) {
      this.$emit('onClick', e, tinymce)
    },
    //可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = ''
    },
    destroyTinymce() {
      const tinymce = this.tinymce.get(this.tinymceId);
      if (tinymce) {
        tinymce.destroy();
      }
    },
    setContent(value) {
			this.tinymce.get(this.tinymceId).setContent(value);
    },
    getContent() {
     	return this.tinymce.get(this.tinymceId).getContent();
		},
    handleImgUpload(blobInfo, success, failure) {
			let formdata = new FormData();
			formdata.append("file", blobInfo.blob());
      this.$axios
        .post("https://httpbin.org/post", formdata)
        .then(res => {
					success(res.data.files.file);
        })
        .catch(res => {
          failure("error");
        });
    }
  }
};
</script>

<style scoped>
.tinymce-container {
  position: relative;
  line-height: normal;
}
.tinymce-container >>> .mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}

.editor-custom-btn-container {
  position: absolute;
  right: 4px;
  top: 4px;
  /*z-index: 2005;*/
}
.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}
.editor-upload-btn {
  display: inline-block;
}
</style>