import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public boxes = [
    {
      'title':'title1',
      'link':'https://sun1-3.userapi.com/c543101/v543101007/5f4f5/lywllo8t-jo.jpg'
    },
    {
      'title':'title2',
      'link':'https://pp.userapi.com/c841523/v841523370/79caf/IOi5jvkGdss.jpg'
    },
    {
      'title':'title3',
      'link':'https://pp.userapi.com/c841523/v841523370/79cb7/t_3EQzyEbpA.jpg'
    },
    {
      'title':'title4',
      'link':'https://pp.userapi.com/c841523/v841523370/79cbf/nmp3NE_Jxak.jpg'
    },
    {
      'title':'title5',
      'link':'https://pp.userapi.com/c841523/v841523370/79cc7/yygAvgZUIxc.jpg'
    },
    {
      'title':'title6',
      'link':'https://pp.userapi.com/c841523/v841523370/79ccf/Wsd4mRRpYLg.jpg'
    },                
  ]; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  itemTapped(item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
