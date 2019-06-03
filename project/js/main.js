const products = [
    {id: 1, title: 'Notebook', price: 2000, tumbnail: 'https://items.s1.citilink.ru/484768_v04_b.jpg'},
    {id: 2, title: 'Mouse', price: 30, tumbnail: 'https://items.s1.citilink.ru/339095_v01_b.jpg'},
    {id: 3, title: 'Keyboard', price: 55, tumbnail: 'https://items.s1.citilink.ru/339097_v01_b.jpg'},
    {id: 4, title: 'Gamepad', price: 75, tumbnail: 'https://items.s1.citilink.ru/396400_v01_b.jpg'},
];

const renderProduct = (tumbnail, title, price) =>
    `<div class="product-item">
        <img src="${tumbnail}"></img>
        <h3>${title}</h3>
        <p>${price}&nbsp;$</p>
        <div class="buy-btn">Купить</div>
    </div>`;

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.tumbnail, item.title, item.price = 100)).join(''); 
    // map возвращает массив товаров, а нужен обычный HTML. Необходимо "склеить" все элементы массива в строку
    // В renderProduct убрал фигурный скобки, т.к. она сразу возвращает результат
    // Значение по умолчанию можно передать, присвоив одному из аргументов это значение в конце (item.price = 100), но здесь это не нужно
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);