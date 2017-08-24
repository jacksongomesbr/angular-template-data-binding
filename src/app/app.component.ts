import { Component, OnInit } from '@angular/core';

import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    vingadores: any;

    constructor() {
        this.title = 'Vingadores';
        this.vingadores = [
            'Capitão América (Steve Rogers)',
            'Viúva Negra (Natasha Romanoff)',
            'Ms. Marvel (Carol Danvers)',
            'Deadpool (Wade Wilson)',
            'Gavião Arqueiro (Clint Barton)'
        ];
    }

    ngOnInit(): void {
    }
}
