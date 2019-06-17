import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BoardPlayingPage } from './board-playing.page';
import { ShowResultComponent } from '../popups/show-result/show-result.component';
import { ShareModule } from '../share/share.module';

const routes: Routes = [
  {
    path: '',
    component: BoardPlayingPage
  }
];

@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BoardPlayingPage],
  entryComponents: [ShowResultComponent]
})
export class BoardPlayingPageModule {}
