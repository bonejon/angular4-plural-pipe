import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() icon:string = "pets"; //location_city, mood
  @Input() cardTitle: string = "Card Title";
  @Input() cardText: string = "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively";

  constructor() { }

  ngOnInit() {
  }

}
