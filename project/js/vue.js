const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: `/catalogData.json`,
        cartUrl: `/getBasket.json`,
        products: [],
        cartProducts: [],
        imgCatalog: `https://placehold.it/200x150`
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(product){
            if(this.cartProducts.includes(product)){
                product.quantity++
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
                    el.quantity=0;
                    this.products.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    el.quantity=0;
                    this.products.push(el);
                }
            });
        this.getJson(`${API + this.cartUrl}`)
            .then(data = [...data])
            .then(data => {
                for(let el of data){
                    this.cartProducts.push(el);
                }
            });
    }
})