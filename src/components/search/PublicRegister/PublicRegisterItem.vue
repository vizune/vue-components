<template>
    <tbody class="PublicRegister-item"
    v-bind:style="greyBackground"
    v-bind:class="{ 
        'PublicRegister-item--toggle': toggle, 
        'PublicRegister-item--opened' : opened 
        }"
    v-on:click="openItem">
        <tr>
            <td data-label="GOC number" class="PublicRegister-numberCell">
                <!-- Individual name -->
                <p v-if="item.fullname" class="PublicRegister-tableName font-weight-bold mb-1">{{ item.fullname }}</p>
                
                <!-- Body corporate name -->
                <p v-if="item.name" class="PublicRegister-tableName font-weight-bold mb-1">{{ item.name }}</p>
                
                <p v-if="item.gocnumber" class="PublicRegister-cellContent mb-0">{{ item.gocnumber }}</p>
            </td>
            <td data-label="Registered as" v-if="type === 'individuals'">
                <span v-if="item.registrationtype" class="PublicRegister-cellContent">{{item.registrationtype}}</span>
            </td>
            <td data-label="Gender" v-if="type === 'individuals'">
                <span v-if="item.gender" class="PublicRegister-cellContent">{{item.gender}}</span>
            </td>
            <td data-label="Status">
                <span class="PublicRegister-cellContent">
                    <div class="PublicRegister-registeredDate">
                        <div class="PublicRegister-label d-flex align-items-center">
                            <span class="PublicRegister-iconWrapper ml-2 ml-md-0 mr-md-2 order-1 order-md-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="PublicRegister-icon feather feather-check-circle"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <!-- Use following for production
                                <svg><use xlink:href="/assets/icons/_icons.svg#check-circle"></use></svg> -->
                            </span>
                            <span class="order-0 order-md-1">{{item.registrationstatus}}</span>
                        </div>
                    </div>
                    <div class="ml-md-4 mt-md-1 pl-md-2 PublicRegister-tableDate">{{getItemDate}}</div>    
                </span>
            </td>
        </tr>
        <tr v-if="this.toggle && this.opened && (item.ftpdecision !== false || item.qualifications || item.specialties)"
        class="PublicRegister-tableHidden">
            <th class="pb-2 PublicRegister-itemHeading">
                <div class="d-flex align-items-center">
                    <span>FTP decisions</span>
                    <tooltip buttonText="More information about FTP decisions"
                    :iconStyle="true"
                    colour="blue"
                    class="ml-2">{{ftpTooltip}}</tooltip>
                </div>
            </th>
            <th class="pb-2 PublicRegister-itemHeading"
             v-if="type === 'individuals'">
                <div class="d-flex align-items-center">
                    <span>Qualifications</span>
                    <tooltip buttonText="More information about Qualifications"
                    :iconStyle="true"
                    colour="blue"
                    class="ml-2">{{qualificationTooltip}}</tooltip>
                </div>
             </th>
             <th v-else></th>
            <th colspan="2" 
            class="pb-2 PublicRegister-itemHeading" 
            v-if="type === 'individuals'">
                <div class="d-flex align-items-center">
                    <span>Specialities</span>
                    <tooltip buttonText="More information about Specialities"
                    :iconStyle="true"
                    colour="blue"
                    class="ml-2">{{specialtiesTooltip}}</tooltip>
                </div>
            </th>
        </tr>
        <tr v-if="this.toggle && this.opened && (item.ftpdecision !== false || item.qualifications || item.specialties)">
            <td data-label="FTP decisions"> 
                <div v-if="ftpDecisions">
                    <p v-for="link in ftpDecisions" v-bind:key="link.PdfUrl">
                        <a :href="link.PdfUrl" target="_blank" class="d-flex">
                            <svg class="mr-2 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0425 10.2683C6.955 10.23 6.77083 10.2283 6.77083 10.405V13.72C6.77583 13.8292 6.86833 13.9142 6.9775 13.9092C7 13.9083 7.0225 13.9033 7.04333 13.895C8.045 13.4567 8.50167 12.29 8.06333 11.2883C7.86417 10.8325 7.5 10.4683 7.0425 10.2683ZM3.33333 10.1025H2.81417C2.69833 10.1025 2.60417 10.1967 2.60417 10.3125V11.3508C2.60417 11.4667 2.69833 11.5608 2.81417 11.5608H3.33333C3.73583 11.5608 4.0625 11.2342 4.0625 10.8317C4.0625 10.4292 3.73583 10.1025 3.33333 10.1025ZM15 15.8333V8.33334C15 7.87334 14.6267 7.50001 14.1667 7.50001H0.833333C0.373333 7.50001 0 7.87334 0 8.33334V15.8333C0 16.2933 0.373333 16.6667 0.833333 16.6667H14.1667C14.6267 16.6667 15 16.2933 15 15.8333ZM3.33333 12.6025H2.81417C2.69833 12.6025 2.60417 12.6967 2.60417 12.8125V14.5833C2.60417 14.8708 2.37083 15.1042 2.08333 15.1042C1.79583 15.1042 1.5625 14.8708 1.5625 14.5833V9.58334C1.5625 9.29584 1.79583 9.06251 2.08333 9.06251H3.33333C4.31167 9.06251 5.10417 9.85501 5.10417 10.8333C5.10417 11.8117 4.31167 12.6042 3.33333 12.6042V12.6025ZM6.25 15.1025C5.9625 15.1025 5.72917 14.8692 5.72917 14.5817V9.58167C5.72917 9.29417 5.9625 9.06084 6.25 9.06084C7.91833 9.06084 9.27083 10.4133 9.27083 12.0817C9.27083 13.75 7.91833 15.1025 6.25 15.1025ZM12.9167 10.1025H11.25C11.0775 10.1025 10.9375 10.2425 10.9375 10.415V11.3508C10.9375 11.4667 11.0317 11.5608 11.1475 11.5608H12.0833C12.3708 11.5608 12.6042 11.7942 12.6042 12.0817C12.6042 12.3692 12.3708 12.6025 12.0833 12.6025H11.1475C11.0317 12.6025 10.9375 12.6967 10.9375 12.8125V14.5833C10.9375 14.8708 10.7042 15.1042 10.4167 15.1042C10.1292 15.1042 9.89583 14.8708 9.89583 14.5833V10.4167C9.89583 9.66834 10.5017 9.06167 11.25 9.06084H12.9167C13.2042 9.06084 13.4375 9.29417 13.4375 9.58167C13.4375 9.86917 13.2042 10.1025 12.9167 10.1025ZM19.7558 4.75417L15.2442 0.242506C15.0875 0.0866726 14.875 -0.000827435 14.6542 5.89833e-06H5C4.07917 5.89833e-06 3.33333 0.745839 3.33333 1.66667V6.45834C3.33333 6.57334 3.42667 6.66667 3.54167 6.66667H4.79167C4.90667 6.66667 5 6.57334 5 6.45834C5 6.45751 5 6.45751 5 6.45667V2.08334C5 1.85334 5.18667 1.66667 5.41667 1.66667H13.9583C14.0733 1.66667 14.1667 1.76001 14.1667 1.87501V4.16667C14.1667 5.08751 14.9125 5.83334 15.8333 5.83334H18.125C18.24 5.83334 18.3333 5.92667 18.3333 6.04167V17.9167C18.3333 18.1467 18.1467 18.3333 17.9167 18.3333H5.20833C5.09333 18.3333 5 18.24 5 18.125V17.7083C5.00083 17.5942 4.90917 17.5008 4.795 17.5C4.79417 17.5 4.79333 17.5 4.7925 17.5H3.54167C3.42667 17.5 3.33333 17.5933 3.33333 17.7083V18.3333C3.33333 19.2542 4.07917 20 5 20H18.3333C19.2542 20 20 19.2542 20 18.3333V5.34334C20 5.12251 19.9125 4.91001 19.7558 4.75417Z" fill="#C25200"/></svg>
                            <span>{{link.Name}}</span>
                        </a>
                    </p>
                </div>

                <span v-else>None</span>
            </td>
            <td data-label="Qualifications" v-if="type === 'individuals'">
                <span v-if="item.qualifications">{{item.qualifications}}</span>
                <span v-else>N/A</span>
            </td>
            <td data-label="Specialities"
            colspan="2" 
            v-if="type === 'individuals'">
                <span v-if="item.specialties">{{item.specialties}}</span>
                <span v-else>N/A</span>
            </td>
        </tr>
        <tr v-if="this.toggle && this.opened && (item.town || item.addresses.length)"
        class="PublicRegister-tableHidden">
            <th class="pb-2 PublicRegister-itemHeading">
                <div class="d-flex align-items-center">
                    <span>Town</span>
                    <tooltip buttonText="More information about Town"
                    :iconStyle="true"
                    colour="blue"
                    class="ml-2">{{townTooltip}}</tooltip>
                </div>
            </th>
            <th :colspan="addressColSpan" class="pb-2 PublicRegister-itemHeading">
                <div class="d-flex align-items-center">
                    <span>Practice address(es)</span>
                    <tooltip buttonText="More information about Practice address(es)"
                    :iconStyle="true"
                    colour="blue"
                    class="ml-2">{{practiceAddressTooltip}}</tooltip>
                </div>
            </th>
        </tr>
        <tr v-if="this.toggle && this.opened && (item.town || item.addresses.length)">
            <td data-label="Town">
                <span v-if="item.town">{{item.town}}</span>
                <span v-else>N/A</span>
            </td>
            <td data-label="Practice address(es)" :colspan="addressColSpan">
                <div class="PublicRegister-addressWrapper" 
                v-if="item.addresses.length">
                    <div v-for="(address, index) in item.addresses.slice(0, 3)" 
                    v-bind:key="index" 
                    class="PublicRegister-addresses">
                        <span v-if="address.addressname" 
                        class="font-weight-bold d-block">{{address.addressname}}</span>
                        <span v-if="address.address1" class="d-block">{{address.address1}}</span>
                        <span v-if="address.address2" class="d-block">{{address.address2}}</span>
                        <span v-if="address.address3" class="d-block">{{address.address3}}</span>
                        <span v-if="address.address4" class="d-block">{{address.address4}}</span>
                        <span v-if="address.city" class="d-block">{{address.city}}</span>
                        <span v-if="address.county" class="d-block">{{address.county}}</span>
                        <span v-if="address.postcode" class="d-block">{{address.postcode}}</span>
                        <span v-if="address.country" class="d-block">{{address.country}}</span>
                    </div>
                </div>
                <span v-else>None</span>
                <div v-if="item.addresses.length > 3">
                    <a href="#"
                    v-on:click.prevent="addressModal">View all addresses</a>
                </div>
            </td>
        </tr>
        <Modal v-if="item.addresses.length > 3"
            v-bind:heading="'Practice addresses for ' + item.fullname ? item.fullname : item.name"
            v-bind:open="modalOpen"
            v-on:modalClosed="modalOpen = false">
            <div class="PublicRegister-addressWrapper">
                <div v-for="(address, index) in item.addresses" 
                    v-bind:key="index" 
                    class="PublicRegister-addresses">
                        <span v-if="address.addressname" 
                        class="font-weight-bold d-block">{{address.addressname}}</span>
                        <span v-if="address.address1" class="d-block">{{address.address1}}</span>
                        <span v-if="address.address2" class="d-block">{{address.address2}}</span>
                        <span v-if="address.address3" class="d-block">{{address.address3}}</span>
                        <span v-if="address.address4" class="d-block">{{address.address4}}</span>
                        <span v-if="address.city" class="d-block">{{address.city}}</span>
                        <span v-if="address.county" class="d-block">{{address.county}}</span>
                        <span v-if="address.postcode" class="d-block">{{address.postcode}}</span>
                        <span v-if="address.country" class="d-block">{{address.country}}</span>
                </div>
            </div>
        </Modal>
    </tbody>
</template>

<script>
import Tooltip from '../../icons/tooltip.vue';
import Modal from '../../modal/Modal.vue';
import axios from 'axios';

export default {
    name: 'register-item',
    components: {
        Tooltip,
        Modal
    },
    data() {
        return {
          /* Write a method to check if item contains sub-data (ftp decisions, qualifications etc) 
             If none exist, hide table rows (See designs) */
          fullDataset: true,
          ftpDecisions: null,
          toggle: false,
          opened: false,
          modalOpen: false,
          called: false
        }
    },
    props: {
        item: null,
        type: {
            type: String,
            required: true
        },
        ftpAPI: {
            type: String,
            required: true
        },
        ftpTooltip : '',
        qualificationTooltip: '',
        specialtiesTooltip: '',
        townTooltip: '',
        practiceAddressTooltip: ''
    },
    mounted() {
        this.checkToggle();
    },
    watch: {
        item: function(newVal, oldVal) {
            // A new search has been made, item data has changed so it will reset
            this.resetItem();
        }
    },
    computed: {
        greyBackground: function() {
            let color = this.toggle && this.opened ? "#FCFAFA" : "#FFFFFF";

            return { backgroundColor : color };
        },
        getItemDate: function() {
            return new Date(this.item.registrationdate).toLocaleDateString();
        },
        addressColSpan: function() {
            return this.type === "individuals" ? 3 : 1;
        }
    },
    methods: {
        callFTPDecisions: function(gocNumber) {
            let apiURL = this.ftpAPI + "?gocNumber=" + this.item.gocnumber;

            axios.get(apiURL)
                .then((resp) => {
                    if(resp.data) {
                        if(resp.data.FtpDecisions.length) {
                            this.ftpDecisions = resp.data.FtpDecisions;
                        }
                    }
                })
                .catch((err) => {
                    console.log(`Error : ${err}`)
                })
        },
        openItem: function() {
            this.opened = this.toggle ? true : false;

            if(this.opened) {
                this.called = true;

                if(this.called) {
                    this.callFTPDecisions();
                }
                
            }
        },
        addressModal: function() {
            this.modalOpen = true;
        },
        resetItem: function() {
            this.ftpDecisions = null;
            this.opened = null;
            this.called = null;
            this.modalOpen = false;
            this.toggle = false;
            this.checkToggle();
        },
        checkToggle: function() {
            // If information available on item, can be toggled
            this.toggle = this.item.ftpdecision || 
            this.item.qualifications || 
            this.item.specialties || 
            this.item.town || 
            this.item.addresses.length ? true : false;
        },
    }
}
</script>