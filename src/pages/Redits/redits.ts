import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ReditService} from '../../app/services/redit.services';

@Component({
  selector: 'redits',
  templateUrl: 'redits.html'
})
export class ReditsPage {

  constructor(public navCtrl: NavController,private reditService:ReditService) {

  }

  ngOnInit(){
      console.log('OnInit ran ..');
  }

}
