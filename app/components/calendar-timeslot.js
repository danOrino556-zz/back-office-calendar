import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';


export default class CalendarTimeSlot extends Component {


  get startDate(){

    const {date, startTime} = this.args.model
    return this.getDateReference(date, startTime);
  }


  get endDate(){

    const {date, endTime} = this.args.model
    return this.getDateReference(date, endTime);
  }

  
  get numberOfThirtyBlocks(){

    const hourDifference = this.endDate.getHours() - this.startDate.getHours();
    const minuteDifference = this.endDate.getMinutes() - this.startDate.getMinutes();
    return Math.abs((hourDifference  * 60) + minuteDifference) / 30;
  }


  get timeslotAndConflicts(){

    return this.args.timeslots.filter((timeslot)=>{

      const {date, startTime, endTime } = timeslot;
      const timeslotStartDate =  this.getDateReference(date, startTime);
      const timeslotEndDate =  this.getDateReference(date, endTime);
      const occursDuringOrBeforeStart = timeslotStartDate.getTime() < this.endDate.getTime();
      const occursDuringOrBeforeEnd = timeslotEndDate.getTime() > this.startDate.getTime();
      return occursDuringOrBeforeStart && occursDuringOrBeforeEnd;
    });
  }


  getDateReference(date, hoursAndMinutes){

    const dateReference = new Date(date);
    const hoursAndMinutesValues = hoursAndMinutes.split(":");
    dateReference.setHours(hoursAndMinutesValues.objectAt(0))
    dateReference.setMinutes(hoursAndMinutesValues.objectAt(1));
    return dateReference;
  }


  getTimeslotStyle(timeslot, timeslotConflicts){

    const width = 100 / (timeslotConflicts.length );
    const timeslotIndex = timeslotConflicts.indexOf(timeslot);
    const leftOffset = width * timeslotIndex;
    return htmlSafe("width : " + width + "%; left : " + leftOffset  + "%");
  }
}