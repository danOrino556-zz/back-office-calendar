import Service, { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';
import CalendarData from 'back-office-calendar/utils/timeslot-stub';


export default class Calendar extends Service{


  @service('request') requestSvc;
  @service store;


  async getAllTimeSlots(){

    await this.requestSvc.fetch("calendarEndpoint");
    this.parseAllTimeSlots(CalendarData);
  }


  parseAllTimeSlots(calendarData = []){

    calendarData.forEach((singleDayTimeslots=[], dayIndex)=>{

      const existingTimeslotRecords = this.store.peekAll("timeslot");

      singleDayTimeslots.forEach((timeslot, timeslotIndex)=>{

        const uniqId = dayIndex + "-" + timeslotIndex; //brittle - would ideally have an id attr returned
        const matchingRecord = existingTimeslotRecords.findBy("id", uniqId);

        if(isPresent(matchingRecord)){
          matchingRecord.setProperties(timeslot);
        }
        else{
          this.store.createRecord("timeslot", {
            id : uniqId,
            ...timeslot
          });
        }
      });
    });
  }
}
