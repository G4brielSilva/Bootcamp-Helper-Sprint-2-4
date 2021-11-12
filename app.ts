/*a) Após a leitura, crie uma Factory que, a partir da lista do exercício 6, dado um array, devolva o nome e a bio da pessoa.
b)Crie um código que responda quem criou a linguagem de programação Ada, essa resposta precisa estar como propriedade do objeto da pessoa relacionada */


class InfoPerson{
    id: number;
    name: string;
    bio: string;
    adasCreator: boolean;

    constructor(rId: number, rName: string, rBio: string, radasCreator: boolean){
        this.id= rId;
        this.name=rName;
        this.bio=rBio;
        this.adasCreator=radasCreator;
    }
}

class Person{
    id: number;
    name: string;
    bio: string;
    adasCreator: boolean;

    constructor(rId: number, rName: string, rBio: string, radasCreator: boolean){
        this.id= rId;
        this.name=rName;
        this.bio=rBio;
        this.adasCreator=radasCreator;
    }

    private getBio(): string{
        return this.bio as string;
    }

    private getName(): string{
        return this.name as string;
    }

    public getInfo(): void{
        console.log(`\nName: ${this.getName()}, Bio ${this.getBio()}\n`);
        
        if (this.adasCreator) console.log(`${this.getName()} Criou a linguagem ada`);
    }
}

const lista: InfoPerson[]  = [
    {id : 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina", adasCreator: false},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia", adasCreator: false},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.", adasCreator: false},
    {id : 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.", adasCreator: false},
    {id : 5, name: "Jean Ichbiah", bio: "Jean Ichbiah, um cientista da computação francês e o designer-chefe inicial da Ada, uma linguagem de programação de propósito geral, fortemente digitada com compiladores validados certificados.", adasCreator: true}];

class PersonFactory{
    public static createPersonList(): Person[]{
        return lista.map((person: InfoPerson) => new Person(person.id, person.name, person.bio, person.adasCreator));
    }
}

const newList: Person[] = PersonFactory.createPersonList();

newList.forEach((person: Person)=>{
    person.getInfo();
});



