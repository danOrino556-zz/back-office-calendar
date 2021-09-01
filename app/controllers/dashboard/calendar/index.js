import Controller from '@ember/controller';
import { action, set } from '@ember/object';


export default class Index extends Controller {
  

  @action
  onDateSelected(date){

    const allCalendarDates = this.model.allCalendarDates;
    if(!allCalendarDates.includes(date)){
      return;
    }

    set(this.model, "selectedDate", date);
  }


  @action
  onTimeslotSelected(timeslot){
    this.transitionToRoute("dashboard.calendar.timeslot", timeslot.id);
  }
}