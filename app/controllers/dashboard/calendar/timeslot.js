import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class Timeslot extends Controller {
  

  @action
  onBack(){
    this.transitionToRoute("dashboard.calendar");
  }
}