class Product {
      constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductList {
    products = [
        new Product(
            'PV system', 
            'https://invest-serwis.pl/images/speasyimagegallery/albums/1/images/img-2517.jpg', 
            'A 15 kW photovoltaic system', 
            14990.00
        ),
       
        new Product(
            'PV system',
            'https://invest-serwis.pl/images/speasyimagegallery/albums/1/images/img-2178.jpg',
            'A 8 kW photovoltaic system',
            7990.00
        )
    ];

    constructor() {}

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
            </div>
            `
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

const productList = new ProductList();
productList.render();
    