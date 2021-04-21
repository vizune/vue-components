import LoadManager, {QUEUE} from "Tools/load-manager"
import ComponentManager from "Tools/component-manager"

class FileUpload {
  constructor(field, options) {
    this.options = Object.assign({
      allowedFileTypes: []
    }, options);

    this.elements = {
      field,
      ctrl: field.querySelector('input'),
      fileList: field.querySelector('[data-js~=upload-file]'),
      reset: field.querySelector('[data-js~=upload-reset')
    };

    this.multiple = this.elements.ctrl.multiple;
    this.placeholderTxts = this.elements.fileList.textContent;

    document.addEventListener('dragover', this.dragover);
    document.addEventListener("dragenter", this.dragenter.bind(this));
    document.addEventListener("dragleave", this.dragleave.bind(this));
    document.addEventListener('drop', this.drop.bind(this));

    this.elements.ctrl.addEventListener('change', this.change.bind(this));
    this.elements.reset.addEventListener('click', e => this.reset(e));
  }

  dragover(e) {
    if (e.target.className == "FileUpload--file") {
      e.preventDefault();
    }
  }

  dragenter(e) {
    // highlight potential drop target when the draggable element enters it
    if (e.target.className == "FileUpload--file") {
      this.elements.field.classList.add('is-highlighted');
      this.elements.ctrl.focus();
    }
  }

  dragleave(e) {
    // reset background of potential drop target when the draggable element leaves it
    if (e.target.className == "FileUpload--file") {
      this.elements.field.classList.remove('is-highlighted')
      this.elements.ctrl.blur();
    }
  }

  drop(e) {
    e.preventDefault();
    this.elements.field.classList.remove('is-highlighted')
    if (e.dataTransfer.types.includes("Files")) {
      if (e.dataTransfer.files.length > 1 && !this.multiple) {
        alert("Only one file may be uploaded");
        return;
      }
      if ([].slice.call(e.dataTransfer.files).some(x => this.options.allowedFileTypes.length && !this.options.allowedFileTypes.includes(x))) {
        alert("File type not supported!");
        return;
      }
      this.elements.ctrl.files = e.dataTransfer.files;
    }
  }

  change() {
    let count = this.elements.ctrl.files.length;
    if (count) {
      let files = [].slice.call(this.elements.ctrl.files).reduce((accum, curr) => (accum += curr.name + ", ", accum), "").slice(0, -2);
      this.elements.fileList.classList.add('has-value');
      this.elements.fileList.textContent = `${count} file${count == 1 ? "s" : ""}${ ` selected (${files})`}`;
    } else {
      this.elements.fileList.classList.classList.remove('has-value');
      this.elements.fileList.textContent = this.placeholderTxts[i];
    }
  }

  reset(e) {
    e.preventDefault();
    this.elements.ctrl.value = "";
    this.elements.fileList.classList.remove("has-value");
    this.elements.fileList.textContent = "";
  }
}

export default LoadManager.queue(() => (
  new ComponentManager(FileUpload, '[data-js~=upload]')
), QUEUE.DOM)