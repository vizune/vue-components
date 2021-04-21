<template>
    <div>
		<!-- 
			searchDate: updates with selected date in child component
			v-on:update: "dateSearchUpdate" is the method triggered when child component emits an update
		-->
        <vue-calendar-search
			:searchDate="searchDate"
			v-on:update="dateSearchUpdate"
			></vue-calendar-search>
        
		<!-- For demo purposes -->
		<div v-if="searchDate" class="dateResult">
			<p>
				<strong>Date selected:</strong><br />
        		{{searchDate}}
			</p>
		</div>
    </div> 
</template>

<script>
    import moment from 'moment';
	import CalendarSearch from './CalendarSearch.vue';
    
    export default {
        name: 'vue-date-picker',
        components: {
			"vue-calendar-search": CalendarSearch
        },
        props: {
			//searchDate: null
		},
        data () {
			return {
				date: null,
				searchDate: null
			}
        },
        methods: {
			dateSearchUpdate: function(val) {
				// Retrieves the date from datepicker in calendar search child component
				if(val) {
					this.searchDate = val;
				}
			},
		}
    }
</script>

<style lang="scss" scoped>
.dateResult {
	margin-top: 2rem;
}
</style>