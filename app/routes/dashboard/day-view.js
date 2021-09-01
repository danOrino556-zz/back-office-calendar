import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class DayView extends Route{

  
  @service('calendar') calendarSvc;


  /**
   * Dan : 
   *  - I put these here only since they arent actually asyncronous yet. 
   *  - Any even remotely slow asyncronous code I usually move down to the component layers and 
   *    manage via ember-concurrency
   *  - If I had to have this here and it was slow you could always add a loading template for the route
   *    but thats kinda old IMO
   */
  async beforeModel(){

    try{
      await this.calendarSvc.getAllTimeSlots();
      await this.calendarSvc.getAllOwners();
    }
    catch{
      console.log("there was a problem retrieving timeslot/owner data")
    }
  }


  model(){

    const allTimeSlots = this.store.peekAll("timeslot");
    const allCalendarDates = allTimeSlots.mapBy("date").uniq();
    const sortedCalendarDates = allCalendarDates.sort().reverse();

    return {
      allCalendarDates  : sortedCalendarDates,
    };
  }


  afterModel(model, transition){

    const targetName = transition.targetName;

    if(targetName === 'dashboard.day-view.index'){

      const firstDate = model.allCalendarDates.firstObject;
      this.transitionTo("dashboard.day-view.date", firstDate);
    }
  }
}
