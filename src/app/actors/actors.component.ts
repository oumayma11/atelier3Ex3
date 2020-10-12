import { Component, OnInit } from '@angular/core';
import { Actor } from '../Models/Actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  listActors: Actor[];

  constructor() { }

  ngOnInit(): void {
    this.listActors = [
      { 'lastName': 'Robert', 'firstName': 'Julia' },
      { 'lastName': 'Walker', 'firstName': 'Paul' },
      { 'lastName': 'Pitt', 'firstName': 'Brad' }



    ]
  }

}
