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

Vue.component('cart-component', {
    data() {
        return {
            cartProducts: [],
            imgCart: `https://placehold.it/100x100`,
            isVisible: true,
        }
    },
    template:  `<div class="cart-comp-wrap">
                    <button @click="toggleCart" class="btn-cart" type="button">Корзина</button>
                    <div :class="{ invisible: isVisible }" class="cartProducts">
                        <p v-if="!$parent.cartProducts.length">Cart is empty</p>
                        <div class="cart-item" v-for="product of $parent.cartProducts" :key="product.id_product">
                            <div class="product-bio">
                                <img :src="imgCart" :alt="product.product_name">
                                <div class="product-desc">
                                    <p class="product-title">{{product.product_name}}</p>
                                    <p class="product-quantity">Quantity: {{product.quantity}}</p>
                                    <p class="product-single-price">{{product.price}} each</p>
                                </div>
                            </div>
                            <div class="right-block">
                                <p class="product-price">{{product.quantity*product.price}}</p>
                                <button class="del-btn" @click="$parent.deleteProduct(product)">&times;</button>
                            </div>
                        </div>
                    </div>
                </div>`
});