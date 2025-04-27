class Animal {
    constructor(especie) {
        this.especie = especie;
    }
}

class Pitbull extends Animal {
    constructor(especie, nome, idade) {
        super(especie); // chama o construtor da classe mãe
        this.nome = nome;
        this.idade = idade;
    }

    fazer() {
        console.log(`O ${this.especie} tem ${this.idade} anos, tem o nome de ${this.nome} e ele está latindo`);
    }
}

class Buldogue extends Animal {
    constructor(especie, nome, idade) {
        super(especie);
        this.nome = nome;
        this.idade = idade;
    }

    fazer2() {
        console.log(`O ${this.especie} tem ${this.idade} anos, tem o nome de ${this.nome} e ele está com fome`);
    }
}

const rex = new Pitbull('cachorro', 'rex', 5);
rex.fazer();

const max = new Buldogue('cachorro', 'max', 3);
max.fazer2();

const bob = new Pitbull('cachorro', 'bob', 4);
bob.fazer();
