/*a) Após a leitura, crie uma Factory que, a partir da lista do exercício 6, dado um array, devolva o nome e a bio da pessoa.
b)Crie um código que responda quem criou a linguagem de programação Ada, essa resposta precisa estar como propriedade do objeto da pessoa relacionada */

type Info = {
    id: number;
    name: string;
    bio: string;
}

const lista: Info[]  = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."},
    {"id" : 5, "name": "Jean Ichbiah", "bio": "Jean Ichbiah, um cientista da computação francês e o designer-chefe inicial da Ada, uma linguagem de programação de propósito geral, fortemente digitada com compiladores validados certificados."}];

class Person{
    public data: Info[];

    constructor(List: Info[]){
        this.data=List;
    }

    public getBioById(Id: number): string{
        return this.data.find((value) => value.id === Id)?.bio as string;
    }

    public getNameById(Id: number): string{
        return this.data.find((value) => value.id === Id)?.name as string;
    }

    public getInfoById(Id: number): string[]{
        return [this.getBioById(Id), this.getNameById(Id)];
    }
}

class InfoFactory{
    public static getInfoById(arr: Info[],Id: number){
        return new Person(arr).getInfoById(Id);
    }
}

const aux: string[] = InfoFactory.getInfoById(lista, 3);
console.log(aux);

console.log(InfoFactory.getInfoById(lista, 5));

