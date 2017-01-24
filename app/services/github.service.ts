import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{

	private username:string;
	private client_id = '49beb162d79d03390d75';
	private client_secret = '60214ae264426271c68393b207e0c32cfa5ae0d8';

	constructor(private _http: Http) {

		console.log('github service ready');
		this.username = 'adamSellers';
	}

	getUser() {

		return this._http.get('http://api.github.com/users/' + this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());

	}

	getRepos() {

		return this._http.get('http://api.github.com/users/' + this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());

	}

	updateUser(username:string) {

		this.username = username;

	}
}