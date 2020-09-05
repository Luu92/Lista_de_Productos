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
                </div>
            </div>
        `;
        productList.appendChild(element)
    }

    deleteProduct(){
        
    }

    showMessage(){

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
    ui.addProduct(product)

})
const ui = new UI()
ui.addProduct(new Product("dasd",144,2021))