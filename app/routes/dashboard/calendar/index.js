import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class Index extends Route{


  @service('calendar') calendarSvc;


  async model(){

    const allTimeSlots = this.store.peekAll("timeslot");
    const allCalendarDates = allTimeSlots.mapBy("date").uniq();
    const sortedCalendarDates = allCalendarDates.sort();

    return {
      allCalendarDates  : allCalendarDates,
      selectedDate : allCalendarDates.firstObject,
      timeslots : allTimeSlots
    };
  }
}
