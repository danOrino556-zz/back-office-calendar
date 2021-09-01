import Service, { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';
import TimeslotData from 'calendar-challenge/utils/timeslot-stub';
import OwnersData from 'calendar-challenge/utils/owners-stub';


export default class Calendar extends Service{


  @service('request') requestSvc;
  @service store;


  //Dan : I usually break these kinds of methods into separate call/parse methods once a fetch is in the equation
  async getAllOwners(){

    //await this.requestSvc.fetch("ownersEndpoint");
    const existingOwnerRecords = this.store.peekAll("owner");

    OwnersData.forEach((owner)=>{

      const matchingRecord = existingOwnerRecords.findBy("id", owner.id);

      if(isPresent(matchingRecord)){
        matchingRecord.setProperties(owner, i);
      }
      else{
        this.store.createRecord("owner", owner);
      }
    })
  }


  async getAllTimeSlots(){

    //await this.requestSvc.fetch("calendarEndpoint");
    const existingTimeslotRecords = this.store.peekAll("timeslot");

    TimeslotData.forEach((singleDayTimeslots=[], dayIndex)=>{

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
