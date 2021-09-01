import Controller from '@ember/controller';
import { action, set } from '@ember/object';


export default class Date extends Controller {
  

  @action
  onDateSelected(date){

    const allCalendarDates = this.model.allCalendarDates;
    if(!allCalendarDates.includes(date)){
      return;
    }

    this.transitionToRoute("dashboard.day-view.date", date);
  }
  

  @action
  onTimeslotSelected(timeslot){
    this.transitionToRoute("dashboard.day-view.timeslot", timeslot.id);
  }
}