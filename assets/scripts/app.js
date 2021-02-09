class Product {
      constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ShoppingCart {
    items = [];

    addProduct(product) {
        this.items.push(product);
        this.totalOutput = `<h2>Total: \$${1}</h2>`;
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        console.log('Adding product to cart...');
        console.log(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
            
                </div>
            </div>
            `;
            const addCartButton = prodEl.querySelector('button');
            addCartButton.addEventListener('click', this.addToCart.bind(this));
            return prodEl;
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
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');
        
        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

    const shop = new Shop();
    shop.render();