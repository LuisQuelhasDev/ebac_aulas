function Personagem(classe, vida, proficiencias, passivas){
    this.classe = classe;
    this.vida = vida;
    this.proficiencias = proficiencias;
    this.passiva = passivas;
}

function Personagem1(classe, vida, proficiencias, passivas){
    Personagem.call(this, classe, vida, proficiencias, passivas);
}

function Personagem2(classe, vida, proficiencias, passivas){
    Personagem.call(this, classe, vida, proficiencias, passivas);
}

function Personagem3(classe, vida, proficiencias, passivas){
    Personagem.call(this, classe, vida, proficiencias, passivas);
}

const guerreiro1 = new Personagem1("Guerreiro", 12, "Armadura Pesada, Lâminas" , "Furia");
const mago1 = new Personagem2("Mago", 8, "Magia Elemental, Cajados", "Raio Arcano");
const ladino1 = new Personagem3("Ladino", 10, "Armadura Leve, Arcos", "Sumir");

console.log(guerreiro1);
console.log(mago1);
console.log(ladino1);