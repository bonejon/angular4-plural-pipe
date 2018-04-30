import { Component, OnInit, Input } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() data: any;
  @Input() item: string;

  itemPluralMapping = {
    'animal': {
      '=0' : '0 Animals',
      '=1' : '1 Animal',
      'other' : '# Animals'
    }, 
    'city': {
      '=0' : '0 Cities',
      '=1' : '1 City',
      'other' : '# Cities'
    },
    'friend': {
      '=0' : 'You have no friends, go out there and meet some!',
      '=1' : 'You have 1 friend, keep at it!',
      '=2': 'You have a few friends, I am impressed.',
      'other' : 'Wow, you have tons of friends!'
    },
  };

  constructor() { }

  ngOnInit() {
    this.data = [];
    this.item = 'friend';
  }



}
