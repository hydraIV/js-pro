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
    _collectPrices(productGroup){ // эта функция создает массив цен группы продуктов, аргументов передаем эту группу
        let prices = []; //создаем массив для хранения всех цен
        productGroup.forEach(function (item){ // для каждого item из productGroup
            prices.push(item.price); // добавляем цену каждого товара в новый масив
        });
        return prices; // вернули массив prices
    }
    countTotal(){ // считаем сумму всех цен (элементов массива prices[])
        let total = this._collectPrices(this.data).reduce(function (sum, current) { 
            return sum + current; // с помощью reduce к каждому новому значению sum добавляем текущее значение массива
        });
        return total; // возвращаем сумму, вывод в консоль в init()
    }
}

// скорее всего перебрать цены товаров можно без отдельной функции, но я не знаю как это сделать

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
        this.cartProducts = []; // Массив товаров в корзине
        this.pushToCart(); // Метод для добавления товара в корзину
    }
    pushToCart(item){
        this.cartProducts.push(item); // Функция pushToCart принимает в качестве аргумента товар (item) и пушит его в массив cartProducts
    }
}

const products = new ProductsList();

// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 30},
//     {id: 3, title: 'Keyboard', price: 55},
//     {id: 4, title: 'Gamepad', price: 65},
// ];
//
// const renderProduct = (title, price, img = `https://placehold.it/200x150`) => {
//     return `<div class="product-item">
//                  <img src="${img}" alt="${title}">
//                  <div class="desc">
//                      <h3>${title}</h3>
//                      <p>${price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };
//
// const renderPage = list => {
//     // document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
//     for (let product of list){
//         document.querySelector('.products').insertAdjacentHTML('beforeend', renderProduct(product.title, product.price));
//     }
// };
//
// renderPage(products);