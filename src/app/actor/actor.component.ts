import { Component, OnInit, Input } from '@angular/core';
import { ActorsComponent } from '../actors/actors.component';
import { Actor } from '../Models/Actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

}
