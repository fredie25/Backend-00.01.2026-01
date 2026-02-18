console.log("Inicio de la aplicacion");

let objGato01={
    nombre: "Pancho",
    sexo: "Macho",
    peso: 4.5,
    color: "Atigrado",
    raza: "Mestiza",
    dormir(){
        console.log("Se esta durmiendo")
    },
    despertar(){
         console.log("Se esta despertando")
    }
}

let objGato02={
    nombre: "Felipa",
    sexo: "Hembra",
    peso: 4,
    color: "Calico",
    raza: "Mestiza",
    dormir(){
        console.log("Se esta durmiendo")
    },
    despertar(){
         console.log("Se esta despertando")
    }
}

objGato01.despertar()
//abstraccion

//encapsulamiento

let admin = true;

class Television{
    #precio = 0;
    constructor(serie, marca,modelo,fechaCompra,formato,tamaño,sistemaOperativo){
        this.serie = serie;
        this.marca = marca;
        this.modelo = modelo;
        this.fechaCompra = fechaCompra;
        this.formato = formato;
        this.tamaño = tamaño;
        this.sistemaOperativo = sistemaOperativo;
    }
    encender(){
        console.log(`La television ${this.modelo} se esta encendiendo`)
    }
    apagar(){
        console.log(`La television se esta apagando`)
    }
    setPrecio(newPrecio){
        if(admin){
            this.#precio = newPrecio
        }
    }
    getPrecio(){
        return `S/. ${this.#precio}`;
    }
}

let objTV1 = new Television("00009","JVC","KTV0001","2025-10-25","LED",55,"GoogleTV");

console.log(objTV1.nombre);

let objTV2 = new Television("0009999","Samsung","Cristal","2022-09-01","OLED", 55,"Tizen");

console.log(objTV2.modelo);

objTV2.encender();
objTV1.encender();

objTV2.modelo = "Apple TV";

console.log(objTV2.modelo);

console.log(objTV1.getPrecio());

objTV1.setPrecio(900);

console.log(objTV1.getPrecio());