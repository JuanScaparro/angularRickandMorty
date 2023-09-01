import { Component } from '@angular/core';
import { RickandmortyService } from './services/rickandmorty.service';
import { Character, ResponseApi } from './interfaces/rickandmorty.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rickandmorty-app';

  rickandmortys: Character[] = [];

  constructor(private rickandmortyService: RickandmortyService) {}

  ngOnInit() {
    this.rickandmortyService
      .getRickandmortyData()
      .subscribe((resp) => this.getChar(resp));
  }

  getChar(resp: ResponseApi) {
    this.rickandmortys = resp.results;
    console.log(this.rickandmortys);
  }
}
