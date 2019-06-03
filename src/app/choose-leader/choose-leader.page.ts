import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-choose-leader',
  templateUrl: './choose-leader.page.html',
  styleUrls: ['./choose-leader.page.scss'],
})
export class ChooseLeaderPage implements OnInit {
  public listUser: any = []
  constructor(public gamesv: GameService) { }

  ngOnInit() {
    console.log('in choose leader ', this.gamesv.infoGameComing)
    if (this.gamesv.infoGameComing) {
      let tempListUser = this.gamesv.infoGameComing ? this.gamesv.infoGameComing.listGamer.splice(this.gamesv.infoGameComing.numberPlayer) : [];
      this.listUser = tempListUser;
    }
  }
  checkEvent(e, id) {
    console.log('e', e)
    if (e) {
      if (e.detail.checked) {
        this.listUser.map(user => {
          if (user.id != id) {
            user.isChecked = false;
          }
        })
      }
    }
    console.log('list user', this.listUser)
  }
  doNext() {

  }
}
