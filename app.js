class Product {
    constructor (name,price,year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    
    addProduct(product){
    
        const productList = document.querySelector('.product-list')
        //const productList = document.getElementById("product-list")
        const element = document.createElement('div')   
        element.innerHTML = `
            <div class="card text-center mb-4" >
                <div class="card-body">
                    <strong>Producto</strong>: ${product.name}
                    <strong>Precio</strong>: ${product.price}
                    <strong>Año</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
        productList.appendChild(element)
    }

    resetFrom(){
        document.getElementById('product-form').reset();
    }


    deleteProduct(element){
        if(element.name === 'delete' ){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Producto Eliminado','danger')
        }
    }

    showMessage(message, cssClass){
       const div = document.createElement('div')
       div.className = `alert alert-${cssClass} mt-1 text-center`
       div.appendChild(document.createTextNode(message))
       //Mostrando en el DOM
       const container = document.querySelector('.container-fluid')
       const app =  document.querySelector('.app')
       container.insertBefore(div,app)
       setTimeout(() => {
            document.querySelector('.alert').remove()
       },3000)
    }
}

// DOM

document.getElementById('product-form').addEventListener('submit', (event) =>{
    event.preventDefault()
    
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const year = document.getElementById('year').value
    
    const product = new Product(name,price,year)

    const ui = new UI()
    if(name === '' || price === '' || year === ''){
        return ui.showMessage('Campos Vacios !!!' , 'warning')
    }

    ui.addProduct(product)
    ui.resetFrom()
    ui.showMessage('Producto Agregado al Carrito','primary')

})
const ui = new UI()
ui.addProduct(new Product("dasd",144,2021))

document.querySelector('.product-list').addEventListener('click',(element)=>{
    const ui = new UI()
    ui.deleteProduct(element.target)
})