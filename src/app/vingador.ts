export class Vingador {
    id: number;
    nome: string;
    pessoa: string;

    constructor(id: number, nome: string, pessoa?: string) {
        this.id = id;
        this.nome = nome;
        this.pessoa = pessoa;
    }
}