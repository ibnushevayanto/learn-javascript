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

class Component{

    constructor(renderHookId, autoRender = true){
        this.hookid = renderHookId
        if(autoRender){
            this.render()
        }
    }

    createRootElement(tag, className, attributes){
        const rootElement = document.createElement(tag)
        if(className){
            rootElement.className = className
        }
        if (attributes && attributes.length > 0) {
            for(const attr of attributes){
                rootElement.setAttribute(attr.name, attr.value)
            }
        }

        document.getElementById(this.hookid).append(rootElement)
        return rootElement
    }
}
class ShoppingCart extends Component {
    items = []

    constructor(renderHookId){
        super(renderHookId)
        console.log('ok')
    }

    set cartItem(value){
        this.items = value
        this.totalOutput.innerText = `Total: \$${this.totalAmount ? this.totalAmount : 0}`
    }

    get totalAmount(){
        const sum = this.items.reduce((prevValue, curValue) => prevValue + curValue.price, 0)
        return sum.toFixed(2)
    }

    addProduct(product) {
        const updatedItems = [...this.items]
        updatedItems.push(product)
        this.cartItem = updatedItems
    }

    orderProduct(){
        console.log('order...')
        console.log(this.items)
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart')
        const totalEl = document.createElement('h2')
        const btnOrderEl = document.createElement('button')
        this.totalOutput = totalEl
        totalEl.innerText = `Total: $0`
        btnOrderEl.innerText = 'Order Now!'

        btnOrderEl.addEventListener('click', this.orderProduct.bind(this))

        cartEl.append(totalEl)
        cartEl.append(btnOrderEl)
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId, false)
        this.product = product
    }

    addToCartHandler() {
        App.addProductToChart(this.product)
    }

    render() {
        const elItemProduct = this.createRootElement('li', 'product-item')

        const elContainerItemProduct = document.createElement('div')
        const elImageItemProduct = document.createElement('img')
        const elContainerDecriptionProduct = elContainerItemProduct.cloneNode(false)
        const elTitleProduct = document.createElement('h2')
        const elPriceProduct = document.createElement('h3')
        const elDescriptionProduct = document.createElement('p')
        const elBtnAddToCart = document.createElement('button')

        elImageItemProduct.setAttribute('src', this.product.imageUrl)
        elContainerDecriptionProduct.classList.add('product-item__content')
        elTitleProduct.textContent = this.product.title
        elPriceProduct.textContent = `\$${this.product.price}`
        elDescriptionProduct.innerText = this.product.description
        elBtnAddToCart.innerText = `Add To Cart`

        elBtnAddToCart.addEventListener('click', this.addToCartHandler.bind(this))

        elItemProduct.appendChild(elContainerItemProduct)
        elContainerItemProduct.appendChild(elImageItemProduct)
        elContainerItemProduct.appendChild(elContainerDecriptionProduct)
        elContainerDecriptionProduct.appendChild(elTitleProduct)
        elContainerDecriptionProduct.appendChild(elPriceProduct)
        elContainerDecriptionProduct.appendChild(elDescriptionProduct)
        elContainerDecriptionProduct.appendChild(elBtnAddToCart)
    }
}
class ProductList extends Component {
    #_products = []

    constructor(renderHookId) {
        super(renderHookId, false)
        this.fetchData()
    }

    fetchData(){
        this.#_products = [
            new Product('Pillow', 'https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'A soft pillow', 19.99),
            new Product('Carpet', 'https://images.unsplash.com/photo-1444362408440-274ecb6fc730?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'Nice carpet', 20.99)
        ]

        this.render()
    }

    #_renderProduct(){
        for (const product of this.#_products) {

            const productItem = new ProductItem(product, 'prod-list')
            productItem.render()
        }
    }

    render() {
        this.createRootElement('ul', 'product-list', [{name:'id', value:'prod-list'}])

        if(this.#_products && this.#_products.length > 0){
            this.#_renderProduct()
        }
    }
}

class Shop {
    constructor() {
        this.render()
    }

    render() {
        this.cart = new ShoppingCart('app')
        new ProductList('app')
    }
}

class App {
    static cart

    static init() {
        const shop = new Shop()
        this.cart = shop.cart
    }
    static addProductToChart(product) {
        this.cart.addProduct(product)
    }
}

App.init()


class Person {
    constructor(name){
        this.name = name
    }
}

const person = new Person('ibnu')
// * untuk mengecheck terbuat dari class apa gunakan instanceof
console.log(person instanceof Person)