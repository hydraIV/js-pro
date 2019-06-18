Vue.component('search', {
    data(){
      return {
        userSearch: '',
      }
    },
    methods: {
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            $parent.filtered = $parent.products.filter(el => regexp.test(el.product_name));
        }
    },
    template:  `<form action="#" method="post" class="search-form" @submit.prevent="filter">
                    <input type="text" class="search-field" v-model="userSearch">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`
});