<template>
<div class="relative min-h-screen md:flex">
    <div class="bg-indigo-700 text-gray-100 flex justify-between md:hidden">
        <a href="#" class="block p-4 text-white font-bold">workflow</a>

        <!-- mobile menu button -->
        <button class="mobile-menu-button p-4 focus:outline-none focus:bg-indigo-800">
            <svg class="h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </div>

    <!-- sidebar -->
    <div class="sidebar bg-indigo-700 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

        <!-- logo -->
        <a href="#" class="text-white flex items-center space-x-2 px-4">
            <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9852 27.4376C14.1797 26.9367 14.2724 26.4021 14.258 25.865C14.2877 24.3764 14.6855 22.9184 15.416 21.621C16.1447 20.3258 17.1838 19.2321 18.44 18.438C18.9051 18.1885 19.3148 17.8473 19.6442 17.4349C19.9736 17.0225 20.216 16.5476 20.3566 16.0389C20.4972 15.5301 20.5331 14.9982 20.4622 14.4751C20.3913 13.9521 20.215 13.4489 19.944 12.996C19.582 12.391 19.061 11.895 18.44 11.565C18.084 11.318 17.742 11.052 17.416 10.767L16.599 9.967C15.1019 8.3932 14.2624 6.30708 14.252 4.135C14.2675 3.59777 14.1752 3.06288 13.9806 2.56188C13.786 2.06089 13.493 1.60395 13.119 1.218C12.7466 0.832488 12.3004 0.52595 11.807 0.316684C11.3135 0.107418 10.783 -0.000286365 10.247 5.71818e-07C9.71132 0.000756001 9.18123 0.108938 8.6881 0.318146C8.19497 0.527354 7.7488 0.833339 7.37599 1.218C7.00262 1.60462 6.7101 2.06183 6.51556 2.56287C6.32101 3.06391 6.22835 3.59872 6.24299 4.136C6.25173 4.83344 6.44383 5.5163 6.79999 6.116C7.15493 6.71469 7.66169 7.20902 8.26899 7.549C10.728 9.105 12.439 12.08 12.439 15.006C12.4329 17.1592 11.6094 19.2298 10.135 20.799L8.27499 22.451C7.66799 22.79 7.16099 23.284 6.80499 23.884C6.44799 24.483 6.25699 25.167 6.24799 25.865C6.2327 26.4022 6.32506 26.9371 6.51964 27.438C6.71423 27.939 7.00709 28.396 7.38099 28.782C7.75343 29.1674 8.19967 29.4739 8.69309 29.6832C9.18652 29.8924 9.71703 30.0002 10.253 30C10.7888 29.9994 11.3191 29.8913 11.8124 29.682C12.3057 29.4728 12.7521 29.1668 13.125 28.782C13.4982 28.3955 13.7906 27.9384 13.9852 27.4376Z" fill="#A5B4FC"/>
                <path d="M19.417 6.36C18.976 5.698 18.741 4.919 18.741 4.123C18.7417 3.05673 19.1641 2.034 19.916 1.278C20.5698 0.62024 21.4321 0.210504 22.355 0.119089C23.2779 0.0276751 24.2039 0.260281 24.974 0.777001C25.6337 1.2199 26.1473 1.84836 26.45 2.583C26.7527 3.31848 26.8318 4.12692 26.6772 4.9071C26.5226 5.68728 26.1413 6.40452 25.581 6.969C25.0224 7.53193 24.3087 7.91563 23.5311 8.07112C22.7534 8.22661 21.9471 8.14685 21.215 7.842C20.4822 7.53685 19.8564 7.02107 19.417 6.36Z" fill="#A5B4FC"/>
                <path d="M20.522 22.518C21.181 22.076 21.956 21.84 22.748 21.84V21.838C23.2745 21.8386 23.7956 21.9432 24.2816 22.1457C24.7676 22.3482 25.2088 22.6446 25.58 23.018C26.2359 23.6779 26.6439 24.544 26.735 25.47C26.8261 26.3959 26.5948 27.3249 26.08 28.1C25.6406 28.762 25.0144 29.2785 24.281 29.584C23.5489 29.8888 22.7425 29.9686 21.9649 29.8131C21.1873 29.6576 20.4736 29.2739 19.915 28.711C19.3545 28.1464 18.9731 27.429 18.8185 26.6486C18.6639 25.8683 18.743 25.0596 19.046 24.324C19.3488 23.5894 19.8624 22.9609 20.522 22.518Z" fill="#A5B4FC"/>
                <path d="M32.325 12.758C32.7648 13.4198 32.9998 14.1974 33 14.9931C32.9993 16.0597 32.577 17.0827 31.825 17.839C31.4537 18.2122 31.0125 18.5086 30.5265 18.7111C30.0406 18.9136 29.5194 19.0182 28.993 19.019C28.2001 19.019 27.4252 18.783 26.767 18.341C26.1073 17.8981 25.5937 17.2696 25.291 16.535C24.988 15.7994 24.9089 14.9907 25.0635 14.2104C25.2181 13.43 25.5995 12.7126 26.16 12.148C26.7187 11.5849 27.4325 11.2011 28.2104 11.0456C28.9882 10.8901 29.7948 10.9699 30.527 11.275C31.2599 11.5804 31.8857 12.0966 32.325 12.758Z" fill="#A5B4FC"/>
                <path d="M1.78099 11.647C2.43999 11.205 3.21399 10.969 4.00699 10.969C4.53334 10.9701 5.0543 11.075 5.54007 11.2776C6.02585 11.4803 6.4669 11.7767 6.83799 12.15C7.49361 12.8097 7.90141 13.6754 7.99251 14.601C8.08361 15.5265 7.85242 16.4552 7.338 17.23C6.89866 17.8914 6.2729 18.4075 5.53999 18.713C4.80763 19.0164 4.00166 19.0953 3.22434 18.9399C2.44702 18.7845 1.73339 18.4017 1.17399 17.84C0.613697 17.2755 0.232385 16.5583 0.077808 15.7781C-0.0767693 14.9979 0.00225815 14.1895 0.304995 13.454C0.607587 12.719 1.12121 12.0902 1.78099 11.647Z" fill="#A5B4FC"/>
            </svg>
            <span class="text-2xl font-extrabold">workflow</span>
        </a>
        

        <!-- navigation header -->
        <nav>
            <a href="#" class="block py-2.5 px-4 text-sm leading-5 font-medium transition duration-200 hover:bg-indigo-800 hover:text-white">
                <svg class="inline" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            Dashboard
            </a>
            <a href="" class="block py-2.5 px-4 text-sm leading-5 font-medium transition duration-200 bg-indigo-800 hover:bg-indigo-800 hover:text-white">
                <svg class="inline" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2.35418C10.7329 1.52375 11.8053 1 13 1C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9C11.8053 9 10.7329 8.47624 10 7.64582M13 19H1V18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19ZM13 19H19V18C19 14.6863 16.3137 12 13 12C11.9071 12 10.8825 12.2922 10 12.8027M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            Team
            </a>
            <a href="" class="block py-2.5 px-4 text-sm leading-5 font-medium transition duration-200 hover:bg-indigo-800 hover:text-white">
                <svg class="inline" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3V13C1 14.1046 1.89543 15 3 15H17C18.1046 15 19 14.1046 19 13V5C19 3.89543 18.1046 3 17 3H11L9 1H3C1.89543 1 1 1.89543 1 3Z" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            Project
            </a>
            <a href="" class="block py-2.5 px-4 text-sm leading-5 font-medium transition duration-200 hover:bg-indigo-800 hover:text-white">
                <svg class="inline" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 5V1M14 5V1M5 9H15M3 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19Z" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            Calendar
            </a>
            <a href="" class="block py-2.5 px-4 text-sm leading-5 font-medium transition duration-200 hover:bg-indigo-800 hover:text-white">
                <svg class="inline" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            Documents
            </a>
            <a href="" class="block py-2.5 px-4 text-sm leading-5 font-medium transition duration-200 hover:bg-indigo-800 hover:text-white">
                <svg class="inline" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17V11C7 9.89543 6.10457 9 5 9H3C1.89543 9 1 9.89543 1 11V17C1 18.1046 1.89543 19 3 19H5C6.10457 19 7 18.1046 7 17ZM7 17V7C7 5.89543 7.89543 5 9 5H11C12.1046 5 13 5.89543 13 7V17M7 17C7 18.1046 7.89543 19 9 19H11C12.1046 19 13 18.1046 13 17M13 17V3C13 1.89543 13.8954 1 15 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19H15C13.8954 19 13 18.1046 13 17Z" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            Reports
            </a>
        </nav>
    </div>

    <!-- main content -->
    <div class="flex-1 p-0 text-2xl font-bold">
        <div class="bg-white shadow flex">
            <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z" fill="#9CA3AF"/>
                </svg>
            </span>
            <input class="w-full p-2 text-sm leading-5 font-normal focus:outline-gray-700 " type="text" placeholder="Search">
            <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>

            <!--icon profile-->
            <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                <img class="inline object-cover rounded-full" src="http://lorempixel.com/30/30/" alt="Profile image"/>
            </span>
        </div>
        <div id="main-content" class="flex flex-wrap">
            <div class="w-full">
                <h2 class="text-sm leading-5 font-medium m-3">Pined Contacts</h2>
            </div>
            <div v-for="contact in pinContacts" class="w-full sm:w-1/3 md:w-1/3 rounded-md">
                <!--card-->
                    <div class="bg-white shadow-2xl drop-shadow-sm rounded-md ml-3 mb-3">
                        <ul class="divide-y-2 divide-gray-200">
                            <li class="p-12 w-100">
                                <div class="w-4/5 inline-block">
                                    <div class="text-sm leading-5 font-medium text-gray-900">{{ contact.name }}
                                        <span v-if="contact.status=='active'" class="inline-flex items-center w-16 justify-center px-3 py-1 mr-2 text-xs font-bold leading-none text-green-800 bg-green-100 rounded-full">Active</span>
                                        <span v-if="contact.status=='busy'" class="inline-flex items-center w-16 justify-center px-3 py-1 mr-2 text-xs font-bold leading-none text-red-800 bg-red-100 rounded-full">Busy</span>
                                    </div>
                                    <div class="text-sm leading-5 font-normal text-gray-500">{{ contact.position }}</div>
                                </div>
                                <div class="inline-block">
                                    <img class="object-cover w-8 h-8  rounded-full" v-bind:src="contact.photo" alt="Profile image"/>
                                </div>
                            </li>
                            <li class="space-y-2">
                                <ul class="flex flex-row divide-x-2 divide-gray-200 divide-solid divide-x">
                                    <li class="p-6 flex-1 space-y-2">
                                        <div class="text-sm leading-5 font-medium text-gray-700 text-center">
                                        <svg class="inline" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.253 1.884L8.25 5.882L16.247 1.884C16.2174 1.37444 15.9941 0.895488 15.6228 0.545227C15.2516 0.194965 14.7604 -9.35847e-05 14.25 3.36834e-08H2.25C1.73958 -9.35847e-05 1.24845 0.194965 0.877178 0.545227C0.505908 0.895488 0.282604 1.37444 0.253 1.884Z" fill="#9CA3AF"/>
                                            <path d="M16.25 4.118L8.25 8.118L0.25 4.118V10C0.25 10.5304 0.460714 11.0391 0.835786 11.4142C1.21086 11.7893 1.71957 12 2.25 12H14.25C14.7804 12 15.2891 11.7893 15.6642 11.4142C16.0393 11.0391 16.25 10.5304 16.25 10V4.118Z" fill="#9CA3AF"/>
                                        </svg>
                                        Email
                                        </div>
                                    </li>
                                    <li class="p-6 flex-1 space-y-2">
                                        <div class="text-sm leading-5 font-medium text-gray-700 text-center">
                                        <svg class="inline" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.75 1C0.75 0.447715 1.19772 0 1.75 0H3.90287C4.39171 0 4.8089 0.353413 4.88927 0.835601L5.62858 5.27147C5.70075 5.70451 5.48206 6.13397 5.0894 6.3303L3.54126 7.10437C4.65756 9.87832 6.87168 12.0924 9.64563 13.2087L10.4197 11.6606C10.616 11.2679 11.0455 11.0492 11.4785 11.1214L15.9144 11.8607C16.3966 11.9411 16.75 12.3583 16.75 12.8471V15C16.75 15.5523 16.3023 16 15.75 16H13.75C6.5703 16 0.75 10.1797 0.75 3V1Z" fill="#9CA3AF"/>
                                        </svg>
                                        Call
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                <!--end card-->
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        mounted() {
            this.loadPinContacts();
        },
        data(){
            return {
                search: '',
                contacts: [
                ],
                pinContacts: [],
            }
        },
        watch:{
            /**
            search pined contacts
            @author Kareem Lorenzana
            @created 2021-07-31
            @params string value
            *@return null
            **/
            search(value){
                console.log(value);
            }
        },
        methods:{
            loadPinContacts(){
                this.pinContacts =[{
                    id: 1,
                    name: 'Jane Cooper',
                    position: 'Regional Paradigm Technic...',
                    email: 'test@mail.com',
                    phone: '3222949223',
                    status: null,
                    photo: 'http://lorempixel.com/30/30/'
                },
                {
                    id: 2,
                    name: 'Kareem Lorenzana',
                    position: 'Developer...',
                    email: 'test@mail.com',
                    phone: '3222949223',
                    status: 'active',
                    photo: 'http://lorempixel.com/30/30/'
                },
                {
                    id: 3,
                    name: 'Marco Grijalva',
                    position: 'DBA',
                    email: 'test@mail.com',
                    phone: '3222949223',
                    status: 'active',
                    photo: 'http://lorempixel.com/30/30/'
                },
                {
                    id: 4,
                    name: 'Efraín Robles',
                    position: 'Frontend developer...',
                    email: 'test@mail.com',
                    phone: '3222949223',
                    status: 'busy',
                    photo: 'http://lorempixel.com/30/30/'
                }];
            }
        }
    }
</script>
