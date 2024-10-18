class Carro {

    #marca;
    #modelo;
    #velocidade;

    constructor(marca, modelo, velocidade) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#velocidade = velocidade;
    }

    #acelerar() {
        this.#velocidade += 1;
        return `AUMENTOU A VELOCIDADE!:${this.#marca} ${this.#modelo} é ${this.#velocidade} km/h.`;
    }

    #frear() {
        this.#velocidade -= 1;
        return `DIMINUIU A VELOCIDADE!:${this.#marca} ${this.#modelo} é ${this.#velocidade} km/h.`;
    }

    acelerarCarro() {
        return this.#acelerar();
    }
    

    frearCarro() {
        return this.#frear();
    }

    getVelocidade() {
        return `Velocidade atual: ${this.#velocidade} km/h`;
    }

    getMarca() {
        return this.#marca;
    }

    getModelo() {
        return this.#modelo;
    }
    
}

const carro1 = new Carro('Toyota', 'Corolla', 60);
const carro2 = new Carro('Fiat', 'Uno Firma', 120);


console.log(carro1.acelerarCarro());
console.log(carro1.frearCarro());
console.log(carro1.getVelocidade());



console.log(carro2.acelerarCarro());
console.log(carro2.frearCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.acelerarCarro());
console.log(carro2.getVelocidade());

console.log(carro1.getMarca());
console.log(carro2.getMarca());