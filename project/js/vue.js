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
            this.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result){
                    let find = this.cartProducts.find(el => el.id_product === product.id_product);
                    if(find){
                       find.quantity++;
                    } else {
                        let prod = Object.assign({quantity: 1}, product);
                        this.cartProducts.push(prod);
                    }
                } else {
                    console.log('Error');
                }
            })     
        },
        deleteProduct(element){
            this.getJson(`${API}/deleteFromBasket.json`)
            .then(data => {
                if (data.result) {
                    let prodId = +element.id_product;
                    let find = this.cartProducts.find(el => el.id_product === prodId);
                    if (find.quantity > 1) {
                        find.quantity--;
                    } else {
                        this.cartProducts.splice(this.cartProducts.indexOf(find), 1);
                    }
                } else {
                    console.log('Error');
                }
            })
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