export class Vingador {
    id: number;
    nome: string;
    pessoa: string;
    urlDaFoto: string;
    urlWikipedia: string;

    constructor(id: number, nome: string, pessoa: string, urlDaFoto: string, urlWikipedia: string = '') {
        this.id = id;
        this.nome = nome;
        this.pessoa = pessoa;
        this.urlDaFoto = urlDaFoto;
        this.urlWikipedia = urlWikipedia;
    }
}
