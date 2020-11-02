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

const productList = {
    products: [
        new Product('Pillow', 'https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'A soft pillow', 19.99),
        new Product('Carpet', 'https://images.unsplash.com/photo-1444362408440-274ecb6fc730?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'Nice carpet', 20.99)
    ],
    render() {
        const renderHook = document.getElementById('app')
        const prodList = document.createElement('ul')
        prodList.classList.add('product-list')

        for (const product of this.products) {
            const elItemProduct = document.createElement('li')
            const elContainerItemProduct = document.createElement('div')
            const elImageItemProduct = document.createElement('img')
            const elContainerDecriptionProduct = elContainerItemProduct.cloneNode(false)
            const elTitleProduct = document.createElement('h2')
            const elPriceProduct = document.createElement('h3')
            const elDescriptionProduct = document.createElement('p')
            const elBtnAddToCart = document.createElement('button')

            elItemProduct.classList.add('product-item')
            elImageItemProduct.setAttribute('src', product.imageUrl)
            elContainerDecriptionProduct.classList.add('product-item__content')
            elTitleProduct.textContent = product.title
            elPriceProduct.textContent = `\$${product.price}`
            elDescriptionProduct.innerText = product.description
            elBtnAddToCart.innerText = `Add To Cart`

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

productList.render()