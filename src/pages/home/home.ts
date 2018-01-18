import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  netResponse:any;
  constructor(public navCtrl: NavController, public network: PeopleServiceProvider) {

  }
  callGetService(name,city)
  {
    let p = this.network.callGet(name,city);
    p.then(data => {
      console.log("Received " + JSON.stringify(data.json().args));
      this.netResponse = JSON.stringify(data.json().args);
    })
  }

  callPostService(name,city)
  {
    let p = this.network.callPost(name,city);
    p.then(data => {
      console.log("Received " + JSON.stringify(data.json().data));
      this.netResponse = data.json().data;
    })
  }
}
