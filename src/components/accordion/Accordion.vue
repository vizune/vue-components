<template>
    <div class="Accordion" 
    v-if="items"
    v-bind:class="[lineDivideStyle, darkBackgroundStyle]">
        <div class="Accordion-wrapper" v-for="item in items" v-bind:key="item.name">
            <details class="Accordion-item" v-bind:open="item.OpenByDefault">
                <summary class="Accordion-header" v-if="item.name">{{item.name}}</summary>
                <div class="Accordion-content" v-html="item.content" vif="item.content"></div>
            </details>
            <span class="Accordion-icon"></span>
        </div>
    </div>

    <!-- 
        .NET C# Razor Markup VERSION

        @if (Model.IsValid && Model.AccordionItems != null)
        {
            var lineDivideStyle = Model.LineDivide ? "Accordion--lineDivide" : "";
            var darkBackgroundStyle = Model.DarkBackground ? "Accordion--background u-pseudo-bg u-pseudo-bg--grey20" : "";

            <div class="Accordion @lineDivideStyle @darkBackgroundStyle">
                @if(!String.IsNullOrEmpty(Model.Heading)) {
                    <h2 class="Accordion-title mb-5">@Model.Heading</h2>
                }
                @foreach (var item in Model.AccordionItems)
                {
                    <div class="Accordion-wrapper">
                        <details class="Accordion-item" @{if (item.OpenByDefault) { <text>open</text> } }>
                            <summary class="Accordion-header">@item.Heading</summary>
                            <div class="Accordion-content">@Html.Raw(item.Content)</div>
                        </details>
                        <span class="Accordion-icon"></span>
                    </div>
                }
            </div>
        }
    -->
</template>

<script>
export default {
    name: "Accordion",
    props: {
        items: null,
        lineDivide: null,
        darkBackground: null
    },
    computed: {
        lineDivideStyle: function() {
            // Adds a border styling on items if enabled
            return {
                "Accordion--lineDivide": this.lineDivide
            }
        },
        darkBackgroundStyle: function() {
            // Adds a white background on items if enabled
            return {
                "Accordion--background": this.darkBackground
            }
        }
    }
}
</script>