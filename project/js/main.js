
const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject();
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     }
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this._getProducts()
            .then(() => this._render());
    }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.data = [...data];
            })
            .catch(error => console.log('error'));
    }
    // _fetchProducts(){
    //     this.data = [
    //         {id: 1, title: 'Notebook', price: 2000},
    //         {id: 2, title: 'Mouse', price: 30},
    //         {id: 3, title: 'Keyboard', price: 55},
    //         {id: 4, title: 'Gamepad', price: 65},
    //     ];
    // }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum + item.price, 0)
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let item of this.data){
            const product = new ProductItem(item);
            this.allProducts.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }
}

class ProductItem {
    constructor(product, img = `https://placehold.it/200x150`){
        this.id_product = product.id_product;
        this.product_name = product.product_name;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                <img src="${this.img}" alt="${this.product_name}">
                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
                <div class="buy-btn">Купить</div>
             </div>`
    }
}
class Cart {
    constructor(){
        this.cartProducts = [];
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
    _renderCart(){
        const cartBlock = document.querySelector('.cart'); // render корзины. Добавляем товары из массива cartProduct в блок .cart
        for (let item of this.cartProducts){
            cartBlock.innerHTML = ''; // очищаем содержимое корзины и перерисовываем заново
            cartBlock.insertAdjacentHTML('beforeend', cartProduct.renderCartProduct());
        }
    }
    }
class CartProduct extends ProductItem {
    constructor(){
        super();
        this.quantity;
        // создаю дочерний класс CartProduct и хочу добавить новый параметр "колличество".
        // Правильно ли я понимаю, если я далее создам new CartProduct(), то в новом объекте будут
        // все свойства и методы родителя + quantity?
    }
    renderCartProduct(){ // render товара корзины
        return `<div class="cart-product-item">
                <img src="${this.img}" alt="${this.product_name}">
                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
                <input type="number"></input>
                <div class="delete-btn">Удалить</div>
             </div>`
    }                  
}                      
    
const products = new ProductsList();

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
