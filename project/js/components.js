Vue.component('search-component', {
    data() {
        return {
            searchLine: ``,
        }
    },
    methods: {
        filter(){
            let regexp = new RegExp(this.searchLine, 'i');
            this.$parent.filtered = this.$parent.products.filter(el => regexp.test(el.product_name));
        },
    },
    template:  `<form @submit.prevent="filter" action="#" method="post" class="search-form">
                <input v-model="searchLine" type="text" class="search-field">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
                </form>`
});