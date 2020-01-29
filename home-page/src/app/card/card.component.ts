import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  cardTitle = 'Default title';
  @Input()
  cardDescriptionFront = 'Card description front';
  @Input()
  cardDescriptionBack = 'Card description back';
  @Input()
  cardImg = '';
  @Input()
  footer = 'false';

  @Output()
  chosenCard = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.cardTitle);
  }

  selectCard(cardName: string): void {
    console.log('emit card Name: ' + cardName);
    this.chosenCard.emit(cardName);
  }
}
