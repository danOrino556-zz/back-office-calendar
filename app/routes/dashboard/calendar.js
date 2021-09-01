import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class Calendar extends Route{

  
  @service('calendar') calendarSvc;


  async beforeModel(){

    try{
      await this.calendarSvc.getAllTimeSlots();
    }
    catch{
      console.log("there was a problem retrieving timeslot data")
    }
  }
}
