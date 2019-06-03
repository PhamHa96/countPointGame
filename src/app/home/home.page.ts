import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public username: string = 'test@gmail.com';
	public password: string = '123456';
	constructor(public afAuth: AngularFireAuth, public usersv: UserService, public router: Router, private toast: Toast) {
	}
	ngOnInit() {
	}

	async login() {
		const { username, password } = this
		try {
			// kind of a hack. 
			const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)

			if (res.user) {
				this.usersv.setUser({
					username: res.user.displayName,
					uid: res.user.uid
				})
				this.toast.show(`Login successfully`, '10000', 'center').subscribe(
					toast => {
						//console.log(toast);
					}
				);
				console.log('res when login::', res)
				this.router.navigate(['/main'])
			}

		} catch (err) {
			console.dir(err)
			if (err.code === "auth/user-not-found") {
				console.log("User not found")
				this.toast.show(`Login failed, user not found!`, '10000', 'center').subscribe(
					toast => {
						console.log(toast);
					}
				);
			}
			if (err.code === "auth/invalid-email") {
				console.log("The email address is badly formatted")
				this.toast.show(`Login failed, the email address is badly formatted!`, '10000', 'center').subscribe(
					toast => {
						console.log(toast);
					}
				);
			}
		}
	}


}