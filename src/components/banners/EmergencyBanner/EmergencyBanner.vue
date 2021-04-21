<template>
    <div class="EmergencyBanner" v-bind:class="{ 'has-cookie': cookieClass }">
        <div class="container">
            <div class="flex justify-content-between align-items-center">
                <div class="relative w-full">
                    <a :href="link" class="EmergencyBanner-link" v-if="link">
                        <slot/>
                    </a>
                    <p v-if="!link" class="mb-0"><slot/></p>
                </div>
                <button class="EmergencyBanner-close" type="button" 
                        v-on:click="createCookie">
                    <span class="EmergencyBanner-closeLabel">Hide message</span>
                    <span class="EmergencyBanner-closeIcon"></span>
                </button>
            </div>
        </div>
    </div>

    <!--
        .NET C# Razor Markup VERSION - Uses Vanilla js, cookieOnClick.js

        <div class="EmergencyBanner" data-js="cookieOnClick">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    @if (!string.IsNullOrEmpty(Model.Content))
                    {
                        <div class="position-relative w-100">
                            @if(Model.Link != null)
                            {
                                <a href="@Model.Link.Url" class="EmergencyBanner-link">
                                    @Html.Raw(Model.Content)
                                </a>
                            }
                            else
                            {
                                <p class="mb-0">@Html.Raw(Model.Content)</p>
                            }

                        </div>
                        <button class="EmergencyBanner-close" type="button" 
                                data-js="cookieOnClick-button"
                                data-cookie-name="EmergencyBannerClosed"
                                data-cookie-value="true">
                            <span class="EmergencyBanner-closeLabel">Hide message</span>
                            <span class="EmergencyBanner-closeIcon"></span>
                        </button>
                    }
                </div>
            </div>
        </div>
    -->
</template>

<script>
    export default {
        name: 'vue-emergency-banner',
        data () {
            return {
            }
        },
        props: {
            link: null,
            cookieName: "EmergencyBannerClosed",
            cookieValue: true,
            cookieExpires: null,
            closed: false
        },
        mounted: function() {
            this.checkCookie();
        },
        computed: {
            cookieClass: function() {
                return this.closed;
            }
        },
        methods: {
            createCookie: function() {
                if(this.cookieName && this.cookieValue) {
                    if (this.cookieExpires) {
                        document.cookie = encodeURIComponent(this.cookieName) + "=" + encodeURIComponent(this.cookieValue) + "; expires=" + this.cookieExpires;
                    }
                    else {
                        document.cookie = document.cookie = this.cookieName +"=" + this.cookieValue;
                    }

                    this.closed = true;
                }
            },
            checkCookie: function() {
                let regex = document.cookie.match("^(?:.*;)?\\s*" + this.cookieName + "\\s*=\\s*([^;]+)(?:.*)?$");
                
                if(regex) 
                    this.closed = true;
            }
        }
    }
</script>