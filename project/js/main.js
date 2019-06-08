class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this.init();
    }
    init(){
        this._fetchProducts();
        this._render();
        console.log(`Итого: ${this.countTotal()}`);
    }
    _fetchProducts(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 30},
            {id: 3, title: 'Keyboard', price: 55},
            {id: 4, title: 'Gamepad', price: 65},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let item of this.data){
            const product = new ProductItem(item);
            this.allProducts.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }
    countTotal(){ 
        let total = 0;
        for (let item of this.allProducts){
            total += item.price;
        }
        return total;
    }
}

class ProductItem {
    constructor(product, img = `https://picsum.photos/200/300?grayscale`){
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                     <h3>${this.title}</h3>
                     <p>${this.price}&nbsp;$</p>
                     <div class="buy-btn">Купить</div>
             </div>`
    }
}
class Cart {
    constructor(){
        this.cartProducts = [];
        this.pushToCart();
        this.deleteFromCart();
        this.clearCart();
    }
    pushToCart(item){
        this.cartProducts.push(item); // Добавление товара в корзину
    }
    deleteFromCart(item){
        this.cartProducts.splice(item.id,1); // Удаление товара из корзины
    }
    clearCart(){
        this.cartProducts.length = 0; // Очистка корзины
    }
}

const products = new ProductsList();