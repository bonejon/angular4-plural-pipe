import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app';
  data:any  = [];
  item: string = "friend";
  dummyData = {
    animal: {
      icon: 'pets',
      title: 'Dog',
      text: 'A friendly dog'
    },
    city: {
      icon: 'location_city',
      title: 'New York',
      text: 'A city full of lights'
    },
    friend: {
      icon: 'mood',
      title: 'Patrick',
      text: 'A starfish that lives happily'
    }
  }

  setItem(item:string){
    this.item = item;
    this.data = [];
    this.add();
  }

  add(){
    if(this.item){
      this.data.push(this.dummyData[this.item]);
    }
  }

  remove(){
    if(this.data.length){
      this.data.pop();
    }
  }

}
