import Component from '@glimmer/component';


export default class CalendarTimeSlot extends Component {

  
  get numberOfThirtyBlocks(){

    const {date, startTime, endTime } = this.args.model
    const startDate = this.getDateReference(date, startTime);
    const endDate = this.getDateReference(date, endTime);
    const hourDifference = endDate.getHours() - startDate.getHours();
    const minuteDifference = endDate.getMinutes() - startDate.getMinutes();

    return Math.abs((hourDifference  * 60) + minuteDifference) / 30;
  }


  getDateReference(date, hoursAndMinutes){

    const dateReference = new Date(date);
    const hoursAndMinutesValues = hoursAndMinutes.split(":");
    dateReference.setHours(hoursAndMinutesValues.objectAt(0))
    dateReference.setMinutes(hoursAndMinutesValues.objectAt(1));
    return dateReference;
  }
}