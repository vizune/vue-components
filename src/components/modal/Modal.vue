<template>
  <dialog class="Modal" v-bind:open="modalShow">
    <header class="Modal-header">
        <h3 class="Modal-title" v-html="heading" />
        <button class="Modal-close" 
        v-on:click="modalClose"
        title="Close dialog">
            <span class="sr-only">Close</span>
        </button>
        <div class="Modal-content">
            <slot />
        </div>
        <footer class="Modal-footer">
            <button class="Modal-button" 
            v-on:click="modalClose">
                Close
            </button>
        </footer>
    </header>
  </dialog>

  <!-- 
      .NET C# Razor Markup VERSION
      @if (Model.IsValid)
      {
          var ModalName = Regex.Replace(Model.Heading, @"\s+", "") + "-" + Model.GetHashCode();

          <button class="Button" data-js="toggleState" 
                  data-target="@ModalName" data-state="open" 
                  data-attribute>
              @Model.ButtonText
          </button>

          <dialog class="Modal" data-id="@ModalName" data-js="modal">
              @if(!String.IsNullOrEmpty(Model.Heading))
              {

                  <header class="Modal-header">
                      <h3 class="Modal-title">@Model.Heading</h3>
                      <button class="Modal-close" data-js="toggleState" 
                              data-target="@ModalName" data-state="open" 
                              data-attribute
                              title="Close dialog">
                          <span class="sr-only">Close</span>
                      </button>
                  </header>
                  <div class="Modal-content">
                      @Html.Raw(Model.Content)
                  </div>

                  <footer class="Modal-footer">
                      <button class="Modal-button" data-js="toggleState" 
                              data-target="@ModalName" data-state="open"
                              data-attribute>
                          Close
                      </button>
                  </footer>
              }
          </dialog>
      }
  -->
</template>

<script>
export default {
  data() {
    return {
      modalShow: false
    };
  },
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  methods: {
    modalClose: function() {
      this.modalShow = false;
    }
  }
};
</script>