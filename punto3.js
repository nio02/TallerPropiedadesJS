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
        console.log("El semaforo está en", this.color)
    };
};

let semaforo1 = new Semaforo();


semaforo1.cambiar()
semaforo1.cambiar()
semaforo1.cambiar()