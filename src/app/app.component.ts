import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    vingadores: Array<Vingador>;

    constructor() {
        this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers', 'https://upload.wikimedia.org/wikipedia/pt/b/bc/Steven_Rogers_%28Earth-616%29.jpg'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff', 'https://upload.wikimedia.org/wikipedia/pt/1/1c/Black_Widow_Vol_6_12.jpg'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers', ''),
            new Vingador(4, 'Deadpool', 'Wade Wilson', 'https://upload.wikimedia.org/wikipedia/pt/c/ce/Deadpool_Vol_4_7.jpg'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton', 'https://upload.wikimedia.org/wikipedia/pt/c/cc/Gavi%C3%A3o_Arqueiro_por_Clint_Langley.JPG', 'https://pt.wikipedia.org/wiki/Gavi%C3%A3o_Arqueiro')
        ];
    }

    ngOnInit(): void {
    }
}
