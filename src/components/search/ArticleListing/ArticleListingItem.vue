<template>
    <div class="ListingItem ListingItem--medium">
        <div v-if="item.Image && item.Image.Url"
        :style="{ backgroundImage: `url('${item.Image.Url}')` }" 
        class="rounded-circle ListingItem-image"></div>
        <div v-else class="rounded-circle ListingItem-image"></div>
        <h3 v-if="item.Heading" class="ListingItem-heading mb-2">
            <a :href="item.Url">{{item.Heading}}</a>
        </h3>
        <div class="ListingItem-text">    
            <p v-if="item.Description" class="card-text">{{item.Description}}</p>
            <p class="ListingItem-publishedDate card-text"><small>Published on {{getItemDate}}</small></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'listing-item',
    data() {
        return {
        }
    },
    props: {
        item: null
    },
    computed: {
        getItemDate: function() {
            return new Date(this.item.PublishedDate).toLocaleDateString();
        },
        getLastUpdatedTime: function(){
            return new Date(this.item.UpdatedDate).toLocaleTimeString()
        }
    }
}
</script>