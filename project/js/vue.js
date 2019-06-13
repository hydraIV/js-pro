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
            if(product.id_product === this.cartProducts[product.id_product].id_product){
                product.quantity++;
                console.log(this.cartProducts);
            }else{
                this.cartProducts.push(product);
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
                } console.log(this.cartProducts);
            });
    }
})