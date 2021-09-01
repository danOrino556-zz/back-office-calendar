import Controller from '@ember/controller';
import { isPresent, isEmpty } from '@ember/utils';
import { action, set } from '@ember/object';


export default class Date extends Controller {


  @action
  filterTimeslotsByOwner(availableOwnerIds, selectedOwnerIds, timeslot){

    if(isEmpty(availableOwnerIds)){
      return true;
    }

    const timeslotOwners = timeslot.owners;
    const isOwnedByASelectedOwner = timeslotOwners.any((ownerId)=>{
      return selectedOwnerIds.includes(ownerId);
    });

    return isOwnedByASelectedOwner;
  } 
  

  @action
  onDateSelected(date){

    const allCalendarDates = this.model.allCalendarDates;
    if(!allCalendarDates.includes(date)){
      return;
    }

    this.transitionToRoute("dashboard.day-view.date", date);
  }


  @action
  onOwnerSelected(ownerId){

    const selectedOwnerIds = this.model.selectedOwnerIds || [];
    if(selectedOwnerIds.includes(ownerId)){
      selectedOwnerIds.removeObject(ownerId);
    }
    else{
      selectedOwnerIds.pushObject(ownerId);
    }
  }
  

  @action
  onTimeslotSelected(timeslot){
    this.transitionToRoute("dashboard.day-view.timeslot", timeslot.id);
  } 
}