<template>
  <!-- <div class="Form">
        <div class="Form-row">
            <div class="Form-field">
                <label for="upload_id" class="Form-label">
                    <slot></slot>
  </label>-->
  <div class="Form-control">
    <label class="FileUpload" :for="id" data-js="fileUpload" ref="upload">
      <span class="FileUpload-button Button Button--light Button--soft-edge">Choose File</span>
      <input
        :id="id"
        :name="name"
        type="file"
        class="FileUpload-input"
        @change="change"
        ref="input"
        multiple
        accept="image/png, image/jpeg"
        @dragover.prevent
        @dragenter="dragEnter"
        @dragleave="dragLeave"
        @drop="drop"
      />
      <div class="FileUpload-field">
        <span class="FileUpload-file" ref="field">{{files}}</span>
      </div>
    </label>
    <span class="Form-error FileUpload-validation">{{validation}}</span>
  </div>
  <!-- </div>
        </div>
        <div class="Form-actions">
            <button type="submit" class="Button Button--primary">Submit</button>
        </div>
  </div>-->
</template>

<script>
export default {
  name: "vue-file-upload",
  data () {
    return {
      multiple: null,
      allowedFileTypes: null,
      placeholder: "No files chosen",
      files: null,
      validation: null
    };
  },
  props: {
      id: String,
      name: String
  },
  mounted() {
    this.multiple = this.$refs.input.multiple
      ? this.$refs.input.multiple
      : null;
    this.allowedFileTypes = this.$refs.input.accept
      ? this.$refs.input.accept
      : null;
    this.files = this.placeholder;
  },
  methods: {
    dragEnter: function(evt) {
      this.$refs.upload.classList.add("is-highlighted");
      this.$refs.input.focus();
    },
    dragLeave: function(evt) {
      this.$refs.upload.classList.remove("is-highlighted");
      this.$refs.input.blur();
    },
    drop: function(evt) {
      evt.preventDefault();
      this.$refs.upload.classList.remove("is-highlighted");
      let error = null;

      if (evt.dataTransfer.types.includes("Files")) {
        if (evt.dataTransfer.files.length > 1 && !this.multiple) {
          error = "Only one file may be uploaded";
          return;
        }
        if (
          [].slice
            .call(evt.dataTransfer.files)
            .some(
              x =>
                this.allowedFileTypes.length &&
                !this.allowedFileTypes.includes(x)
            )
        ) {
          error = "File type not supported!";
          return;
        }

        this.validation = !error ? null : error;

        this.$refs.input.files = evt.dataTransfer.files;
      }
    },
    change: function(evt) {
      let count = this.$refs.input.files.length;

      if (count) {
        let files = [].slice
          .call(this.$refs.input.files)
          .reduce((accum, curr) => ((accum += curr.name + ", "), accum), "")
          .slice(0, -2);
        this.$refs.field.classList.add("has-value");
        this.files = `${count} file${
          count == 1 ? "" : "s"
        } selected (${files})`;
      } else {
        this.$refs.field.classList.remove("has-value");
        this.files = this.placeholder;
      }
    }
  }
};
</script>