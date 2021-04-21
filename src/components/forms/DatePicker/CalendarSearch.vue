<template>
    <div class="Form">
        <form class="Datepicker__form">
			<!-- 
				Visit vue-datetime github for more configuration options
				https://github.com/mariomka/vue-datetime

				v-model: updates "this.date"
				input-id / input-class / :format are vue-datetime config
				v-on:input: input event listener that triggers the "calendarSearch" method
			--> 
			<datetime 
				input-id="date-search"
				input-class="Datepicker__input"
				:format="{ year: 'numeric', month: 'long', day: 'numeric'}"
				placeholder="Search by Date"
				v-on:input="calendarSearch($event)"
			></datetime>
		</form>
    </div> 
</template>

<script>
    import moment from 'moment';
	import { Datetime } from 'vue-datetime';
	import { Settings } from 'luxon';
	import { WeekStart } from 'weekstart';
    
    export default {
        name: 'vue-calendar-search',
        components: {
			datetime: Datetime
        },
        data () {
			return {
				date: null,
			}
        },
        methods: {
			calendarSearch: function(e) {
				// IE11 issues: e is Object Event if empty so need to detect whether e is a string first
				if(typeof e === "string") {
					this.date = e ? moment(e).format("DD-MM-YYYY") : null;

					if(this.date) {
						this.$emit('update', this.date)
					}
				}
			}
		}
    }
</script>