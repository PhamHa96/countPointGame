import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {
  public userName: string = '';
  constructor(private usersv: UserService, public afAuth: AngularFireAuth, public router: Router, public gamesv: GameService) { }

  ngOnInit() {
    this.userName = this.usersv.getUsername();
  }
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/home'])
    });
  }
  onChooseTypeGame(typeGame) {
    console.log('typeGame', typeGame)
    if (this.gamesv.typeGameInit) {
      this.gamesv.typeGameInit.next(typeGame);
    }
    this.router.navigate(['/choose'])
  }
}
