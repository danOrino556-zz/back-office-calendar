import Component from '@glimmer/component';


export default class CalendarDatePicker extends Component {

  
  get previousDate(){

    const allDates = this.args.allDates;
    const currentIndes = allDates.indexOf(this.args.selectedDate);
    return allDates.objectAt(currentIndes - 1);
  }


  get nextDate(){

    const allDates = this.args.allDates;
    const currentIndes = allDates.indexOf(this.args.selectedDate);
    return allDates.objectAt(currentIndes + 1);
  }
}