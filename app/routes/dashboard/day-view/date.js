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

    const timeslotsForDate = allTimeSlots.filterBy("date", params.date);
    const allOwnerIds = [];
    const allOwnerValues = timeslotsForDate.mapBy("owners");
    allOwnerValues.forEach((owners)=>{
      allOwnerIds.addObjects(owners || []);
    });
    const allUniqueOwnerIds = allOwnerIds.sort().uniq();
    const selectedOwnerIds = allUniqueOwnerIds.map((id)=>{return id;})

    return {
      date : params.date,
      allCalendarDates  : sortedCalendarDates,
      timeslots : timeslotsForDate,
      dateMetadata : dateMetadata[params.date],
      availableOwnerIds : allUniqueOwnerIds,
      selectedOwnerIds : selectedOwnerIds
    };
  }
}
