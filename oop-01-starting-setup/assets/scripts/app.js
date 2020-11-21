class Product {
    title = 'DEFAULT'
    imageUrl
    description
    price

    constructor(title, image, desc, price) {
        this.title = title
        this.imageUrl = image
        this.description = desc
        this.price = price
    }
}

class ProductItem {
    constructor(product) {
        this.product = product
    }

    addToCartHandler() {
        console.log(this.product)
    }

    render() {
        const elItemProduct = document.createElement('li')
        const elContainerItemProduct = document.createElement('div')
        const elImageItemProduct = document.createElement('img')
        const elContainerDecriptionProduct = elContainerItemProduct.cloneNode(false)
        const elTitleProduct = document.createElement('h2')
        const elPriceProduct = document.createElement('h3')
        const elDescriptionProduct = document.createElement('p')
        const elBtnAddToCart = document.createElement('button')

        elItemProduct.classList.add('product-item')
        elImageItemProduct.setAttribute('src', this.product.imageUrl)
        elContainerDecriptionProduct.classList.add('product-item__content')
        elTitleProduct.textContent = this.product.title
        elPriceProduct.textContent = `\$${this.product.price}`
        elDescriptionProduct.innerText = this.product.description
        elBtnAddToCart.innerText = `Add To Cart`

        elBtnAddToCart.addEventListener('click', this.addToCartHandler.bind(this))

        return {
            elItemProduct,
            elContainerItemProduct,
            elImageItemProduct,
            elContainerDecriptionProduct,
            elTitleProduct,
            elPriceProduct,
            elDescriptionProduct,
            elBtnAddToCart
        }
    }
}
class ProductList {
    products = [
        new Product('Pillow', 'https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'A soft pillow', 19.99),
        new Product('Carpet', 'https://images.unsplash.com/photo-1444362408440-274ecb6fc730?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'Nice carpet', 20.99)
    ]

    constructor() {}

    render() {
        const renderHook = document.getElementById('app')
        const prodList = document.createElement('ul')
        prodList.classList.add('product-list')

        for (const product of this.products) {

            const productItem = new ProductItem(product)
            const {
                elItemProduct,
                elContainerItemProduct,
                elImageItemProduct,
                elContainerDecriptionProduct,
                elTitleProduct,
                elPriceProduct,
                elDescriptionProduct,
                elBtnAddToCart
            } = productItem.render()

            elItemProduct.insertAdjacentElement('beforeend', elContainerItemProduct)
            elContainerItemProduct.insertAdjacentElement('beforeend', elImageItemProduct)
            elContainerItemProduct.insertAdjacentElement('beforeend', elContainerDecriptionProduct)
            elContainerDecriptionProduct.insertAdjacentElement('beforeend', elTitleProduct)
            elContainerDecriptionProduct.insertAdjacentElement('beforeend', elPriceProduct)
            elContainerDecriptionProduct.insertAdjacentElement('beforeend', elDescriptionProduct)
            elContainerDecriptionProduct.insertAdjacentElement('beforeend', elBtnAddToCart)

            prodList.insertAdjacentElement('beforeend', elItemProduct)
        }

        renderHook.insertAdjacentElement('beforeend', prodList)
    }
}

const productList = new ProductList()

productList.render()