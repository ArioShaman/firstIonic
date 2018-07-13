import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimplePage } from './simple';

@NgModule({
  declarations: [
    SimplePage,
  ],
  imports: [
    IonicPageModule.forChild(SimplePage),
  ],
})
export class SimplePageModule {}
