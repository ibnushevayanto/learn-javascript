class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title
        this.imageUrl = imageUrl
        this.price = price
        this.description = description
    }
}
class Attribute {
    constructor(name, value){
        this.name = name 
        this.value = value
    }
}
class Component {
    constructor(renderHookId, shouldRender = true){
        this.hookId = renderHookId
        if(shouldRender){
            this.render()
        }
    }
    createElement(element, elementClass, elementAtribute = []) {
        const el = document.createElement(element)
        if(elementClass) {
            el.className = elementClass
        }
        if(elementAtribute.length){
            for(const elementItem of elementAtribute) {
                el.setAttribute(elementItem.name, elementItem.value)
            }
        }
        const rootElement = document.querySelector(this.hookId)
        rootElement.append(el)
        return el
    }
}
class Cart extends Component {
    items = []
    constructor (renderHookId) {
        super(renderHookId)
    }

    set cartItems(value) {
        this.items = value
        this.totalOutput.innerText = `Total : \$${this.totalAmount.toFixed(2)}`
    }
    get totalAmount() {
        return this.items.reduce((prevValue, currentValue) => prevValue + currentValue.price, 0)
    }
    addProduct(product) {
        const dataItems = [ ...this.items ]
        dataItems.push(product)
        this.cartItems = dataItems
    }
    orderHandler(){
        console.log('add product...')
        console.log(this.items)
    }
    render() {
        const cartEl = this.createElement('section', 'cart')
        cartEl.innerHTML = `
        <h2>Total : \$${0}</h2>
        <button>Order Now!</button>
        `
        this.totalOutput = cartEl.querySelector('h2')
        const btnOrder = cartEl.querySelector('button')
        btnOrder.addEventListener('click', this.orderHandler.bind(this))
    }
}
class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId)
        this.product = product
        this.render()
    }
    addToCart() {
        App.addProduct(this.product)
    }
    element(){
        const elListContainer = this.createElement('li', 'product-item')
        elListContainer.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to cart</button>
                    </div>
                </div>
            `
        const elBtn = elListContainer.querySelector('button')
        elBtn.addEventListener('click', this.addToCart.bind(this))
    }
    render() {
        if(this.product){
            this.element()
        }
    }
}
class ProductList extends Component {
    #_products = []

    constructor(renderHookId) {
        super(renderHookId)
        this.fetchProduct()
    }
    fetchProduct(){
        this.#_products = [
            new Product('Dell XPS 13', 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', 1000.34, 'Laptop Mahal Tapi Windows'),
            new Product('Macbook Pro 15', 'https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', 2400.89, 'Laptop Mahal Sudah IOS')
        ]
        this.renderElement()
    }
    renderElement(){
        for (const data of this.#_products) {
            new ProductItem(data, 'ul.product-list')
        }
    }
    render() {
        this.createElement('ul', 'product-list')

        try {
            if(this.#_products && this.#_products.length){
                this.renderElement()
            } 
        } catch (error) {
            console.log(error)
        }
        
    }
}
class Shop {
    constructor() {
        this.render()
    }
    render() {
        this.cart = new Cart('#app')
        new ProductList('#app')

    }
}
class App {
    static cart

    static init() {
        const shop = new Shop()
        this.cart = shop.cart
    }

    static addProduct(product) {
        this.cart.addProduct(product)
    }
}
App.init()