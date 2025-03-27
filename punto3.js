//Semáforo (If/else + estados)

function Semaforo(){
    this.color = "rojo";
    this.cambiar = () => {
        if (this.color == "rojo"){
            this.color = "verde"
        } else if(this.color == "verde"){
            this.color = "amarillo"
        } else if (this.color == "amarillo"){
            this.color = "rojo"
        }
    };
};

let semaforo1 = new Semaforo();

console.log(semaforo1.color)
semaforo1.cambiar()
console.log(semaforo1.color)
semaforo1.cambiar()
console.log(semaforo1.color)
semaforo1.cambiar()