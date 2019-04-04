import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {

  constructor(private usersv: UserService, public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/home'])
    });
  }

}
