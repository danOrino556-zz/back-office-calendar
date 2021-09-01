import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class Date extends Route{


  @service('calendar') calendarSvc;


  model(params){

    const allTimeSlots = this.store.peekAll("timeslot");
    const allCalendarDates = allTimeSlots.mapBy("date").uniq();
    const sortedCalendarDates = allCalendarDates.sort().reverse();

    const dateMetadata = {
      "2021-08-30" : {
        titleKey : "dashboard.awesomePupsTitle",
        descriptionKey : "dashboard.awesomePupsDescription",
        image : ""
      }
    }

    return {
      date : params.date,
      allCalendarDates  : sortedCalendarDates,
      timeslots : allTimeSlots.filterBy("date", params.date),
      dateMetadata : dateMetadata[params.date]
    };
  }
}
