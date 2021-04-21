<template>
    <div class="ImageOverlay">
        <div class="ImageOverlay-media">
            <picture>
                <source srcset="https://placekitten.com/768/432" media="(max-width: 767px)">
                <source srcset="https://placekitten.com/1200/675" media="(max-width: 1199px)">
                <img src="https://placekitten.com/1920/1080" alt="Alternative text">
            </picture>
        </div>
        <div class="ImageOverlay-content">
            <div class="Container">
                <p class="font-black text-6xl">"Imagining my Gran receiving care from someone who has no interest in her is the reason I'm her today"</p>
                <p><strong>Kev Popat</strong> | Owner, Right at Home Solen</p>
                <a href="#" class="Button Button--ghost Button--white mt-8">Call to action</a>
            </div>
        </div>
        <div class="ImageOverlay-fade" style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 13.54%, rgba(57, 51, 57, 0) 100%);"></div>
    </div>
</template>

