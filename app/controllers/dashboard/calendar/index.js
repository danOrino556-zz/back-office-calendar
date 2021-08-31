import Controller from '@ember/controller';
import { action, set } from '@ember/object';


export default class Index extends Controller {
  
  @action
  onPreviousDate(){

    const allCalendarDates = this.model.allCalendarDates || [];
    const currentDateIndex = allCalendarDates.indexOf(this.model.selectedDate);
    const newDateIndex = currentDateIndex > 0? currentDateIndex - 1 : 0;
    set(this.model, "selectedDate", allCalendarDates.objectAt(newDateIndex));
  }


  @action
  onNextDate(){

    const allCalendarDates = this.model.allCalendarDates || [];
    const currentDateIndex = allCalendarDates.indexOf(this.model.selectedDate);
    const newDateIndex = currentDateIndex !== allCalendarDates.length - 1? currentDateIndex + 1 : allCalendarDates.length - 1;
    set(this.model, "selectedDate", allCalendarDates.objectAt(newDateIndex));
  }


  @action
  onDateSelected(date){
    set(this.model, "selectedDate", date);
  }


  @action
  onTimeslotSelected(timeslot){

    console.log(timeslot)
    this.transitionToRoute("dashboard.calendar.timeslot", timeslot.id);
  }
}