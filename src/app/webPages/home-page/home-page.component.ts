import { Component, OnInit } from '@angular/core';
import {User} from '../../modeles/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  usersList: User[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
