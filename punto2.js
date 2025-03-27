// Lista de Compras (Array + for)

function ListaCompras(){
    this.productos = [];
    this.agregar = (producto) => {
        this.productos.push(producto)
    };
    this.mostrar = () => {
        console.log("Su lista es:")
        for (let i = 0; i < this.productos.length; i++){
            console.log((`${(i+1)}. ${this.productos[i]}`))
        }
    };
};

let Lista1 = new ListaCompras();

Lista1.agregar("Manzana")
Lista1.agregar("Mango")
Lista1.agregar("Durazno")

Lista1.mostrar()