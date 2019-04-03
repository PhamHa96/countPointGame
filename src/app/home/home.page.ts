import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private username: string='';
  private password: string='';
  constructor(public afAuth: AngularFireAuth,public user: UserService, public router: Router) {
  }
	ngOnInit() {
	}

	async login() {
		const { username, password } = this
		try {
			// kind of a hack. 
			const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
			
			if(res.user) {
				this.user.setUser({
					username,
					uid: res.user.uid
        })
        console.log('res when login::', res)
				// this.router.navigate(['/tabs'])
			}
		
		} catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
				console.log("User not found")
			}
		}
	}
  

}