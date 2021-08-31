import Controller from '@ember/controller';
import { action, set } from '@ember/object';


export default class Calendar extends Controller {
  

  @action
  onDateSelected(date){

    console.log(date)

    set(this.model, "date", date);
  }


  @action
  onTimeslotSelected(timeslot){
    this.transitionToRoute("dashboard.calendar.timeslot", timeslot.id);
  }
}