import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule,  } from '@ionic/angular';
import { ShowResultComponent } from '../popups/show-result/show-result.component';

@NgModule({
  declarations: [ShowResultComponent],
  imports: [
    IonicModule.forRoot(),
    CommonModule
  ]
})
export class ShareModule { }
