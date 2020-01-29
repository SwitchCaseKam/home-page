import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-page';
  chosenCard: string;

  selectedCard(cardName): void {
    console.log(cardName);
    this.chosenCard = cardName;
    console.log('chosenCard in app component = ', this.chosenCard);
    const el = document.getElementById('content');
    el.scrollIntoView({behavior: 'smooth'});
  }

}
