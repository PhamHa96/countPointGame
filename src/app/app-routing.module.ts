import { MainHomeComponent } from './main-home/main-home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
  { path: 'main', component: MainHomeComponent, canActivate: [AuthService] },
  { path: 'choose', loadChildren: './choose/choose.module#ChoosePageModule' },
  { path: 'choose-leader', loadChildren: './choose-leader/choose-leader.module#ChooseLeaderPageModule' },
  { path: 'board-playing', loadChildren: './board-playing/board-playing.module#BoardPlayingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
