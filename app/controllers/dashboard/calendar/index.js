import Controller from '@ember/controller';
import { action, set } from '@ember/object';


export default class Index extends Controller {
  

  @action
  onDateSelected(date){
    set(this.model, "selectedDate", date);
  }


  @action
  onTimeslotSelected(timeslot){
    this.transitionToRoute("dashboard.calendar.timeslot", timeslot.id);
  }
}