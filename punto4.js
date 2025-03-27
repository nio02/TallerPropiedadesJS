// Termómetro (Variables + condiciones)

function Termometro(){
    this.actualizar = (grados) => {
        if (grados > 30){
            console.log("¡Hace Calor!")
        } else if (grados < 10){
            console.log("¡Hace Frío!")
        } else {
            console.log("Temperatura agradable")
        }
    };
};

let termo1 = new Termometro()

termo1.actualizar(5)
termo1.actualizar(20)
termo1.actualizar(35)