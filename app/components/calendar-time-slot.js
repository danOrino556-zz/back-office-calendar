import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';


export default class CalendarTimeSlot extends Component {

  
  get numberOfThirtyBlocks(){

    const {date, startTime, endTime } = this.args.model
    const startDate = this.getDateReference(date, startTime);
    const endDate = this.getDateReference(date, endTime);
    const hourDifference = endDate.getHours() - startDate.getHours();
    const minuteDifference = endDate.getMinutes() - startDate.getMinutes();

    return Math.abs((hourDifference  * 60) + minuteDifference) / 30;
  }


  get timeslotAndConflicts(){

    const timeslots = this.args.timeslots;

    return timeslots.filter((timeslot)=>{

      const occursDuringOrBeforeStart = timeslot.startTime <= this.args.model.endTime;
      const occursDuringOrBeforeEnd = timeslot.endTime >= this.args.model.startTime;
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
    return htmlSafe("width : " + width + "% !important; left : " + leftOffset  + "%");
  }
}