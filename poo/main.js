function animal(especie) {
    this.especie = especie;
}

function pitbull(especie, nome, idade) {
    animal.call(this, especie);
    this.nome = nome;
    this.idade = idade;
    this.fazer = function(){
        console.log(`o ${this.especie} tem ${this.idade} anos, tem o nome de ${this.nome} e ele está latindo`)
    }
}

function buldogue(especie, nome, idade) {
    animal.call(this, especie);
    this.nome = nome;
    this.idade = idade;
    this.fazer2 = function(){
        console.log(`o ${this.especie} tem ${this.idade} anos, tem o nome de ${this.nome} e ele está com fome`)
    }
}

const rex = new pitbull('cachorro', 'rex', 5)
rex.fazer()

const max = new buldogue('cachorro', 'max', 3)
max.fazer2()

const bob = new pitbull('cachorro', 'bob', 4);
bob.fazer();