window.Vue = require('vue').default;

Vue.component('main-component', require('./components/MainComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

/**global js for menu */
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
