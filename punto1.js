//Libro (Objeto básico + if)

function Libro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.prestar = function(){
        if (this.prestado === false){
            this.prestado = true;
            return `Libro Disponible`
        } else {
            return `Lo sentimos. ${this.titulo} no está disponible.`
        }
    }
};

let libro1 = new Libro("Divina Comedia", "Dante Alighieri")
let libro2 = new Libro("Divina Comedia 2", "Dante Alighieri")

console.log(libro1)
console.log(libro1.prestar())
console.log(libro1.prestar())




