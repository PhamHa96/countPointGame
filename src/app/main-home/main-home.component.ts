import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {

  constructor(private usersv: UserService) { }

  ngOnInit() {
    this.usersv.reAuth()
  }
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

}
