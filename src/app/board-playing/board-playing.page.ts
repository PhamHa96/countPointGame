import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { ModalController } from '@ionic/angular';
import { ShowResultComponent } from '../popups/show-result/show-result.component';
@Component({
  selector: 'app-board-playing',
  templateUrl: './board-playing.page.html',
  styleUrls: ['./board-playing.page.scss'],
})
export class BoardPlayingPage implements OnInit {
  listUser: any = [];
  leader: any;
  stt: number = 1;
  adding: boolean = false;
  boardGame: any = {
    sttGame: 1,
    winner: ''
  }
  stringHTML: '';
  constructor(private gamesv: GameService , public modalController: ModalController) { }

  ngOnInit() {
    // let temp = this.gamesv.infoGameComing ? this.gamesv.infoGameComing.listGamer : [];
    // temp.map(data => {
    //   if (data.isChecked) {
    //     this.leader = data;
    //   } else {
    //     this.listUser.push(data);
    //   }
    // });
    this.leader = {
      id: 1,
      isChecked: true,
      isHost: false,
      money: 10000,
      name: 'A'
    };
    this.listUser = [
      {
        id: 2,
        isChecked: false,
        isHost: false,
        money: 10000,
        name: 'B'
      },
      {
        id: 3,
        isChecked: false,
        isHost: false,
        money: 10000,
        name: 'C'
      },
      {
        id: 4,
        isChecked: false,
        isHost: false,
        money: 10000,
        name: 'D'
      },
    ]
    //console.log('list user on board', this.listUser, this.leader);
  }
  
  addNewGame() {
    this.stt++;
  }
  counter(i: number) {
    return new Array(i);
  }
  async stopRound() {
    const modal = await this.modalController.create({
      component: ShowResultComponent,
      componentProps: { value: 123 },
      showBackdrop: true,
      cssClass: 'custom-popup'
    });
    // modal.onDidDismiss().then((dataReturned) => {

    // });
    return await modal.present();
  }
}
