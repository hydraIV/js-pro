const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: `/catalogData.json`,
        cartUrl: `/getBasket.json`,
        products: [],
        cartProducts: [],
        imgCatalog: `https://placehold.it/200x150`,
        imgCart: `https://placehold.it/100x100`
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(product){
            for(let item of this.cartProducts){
                if(item.id_product === product.id_product) {
                    product.quantity++;
                } else {
                    console.log('PUSH');
                    this.cartProducts.push(product);
                }
            }
        },
        deleteProduct(product){

        }
    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cartProducts.push(el);
                }
            });
    }
})