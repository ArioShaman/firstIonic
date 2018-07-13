import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
  public title:string;
  public box:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.box = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log(this.box);
    console.log('ionViewDidLoad ItemDetailsPage');
  }

}
