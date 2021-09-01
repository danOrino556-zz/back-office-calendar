import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class Timeslot extends Controller {
  

  @action
  onBack(model){
    
    //model.rollbackAttributes();
    this.transitionToRoute("dashboard.calendar");
  }


  @action
  async onDelete(model){

    //await model.destroyRecord();
    this.transitionToRoute("dashboard.calendar");
  }


  @action
  async onSave(model){

    //await model.save();
    this.transitionToRoute("dashboard.calendar");
  }
}