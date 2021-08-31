import Service, { inject as service } from '@ember/service';
import CalendarData from 'back-office-calendar/utils/timeslot-stub';


export default class Calendar extends Service{


  @service('request') requestSvc;
  @service store;


  getAllTimeSlots(){


    return this.requestSvc.fetch("calendarEndpoint").then(
      ()=>{    

        console.log(CalendarData)

        this.parseAllTimeSlots(CalendarData);
      }
    );
  }


  parseAllTimeSlots(calendarData = []){

    calendarData.forEach((singleDayTimeslots=[], dayIndex)=>{

      singleDayTimeslots.forEach((timeslot, timeslotIndex)=>{

        

        this.store.createRecord("timeslot", {
          id : dayIndex + "-" + timeslotIndex,
          ...timeslot
        });
      });
    });
  }
}
