import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class Timeslot extends Model {

  
  @attr ('string') date;
  @attr ('string') startTime;
  @attr ('string') endTime;
  @attr ('string') activityName;
  @attr ('number') availableSpots;
  @attr ('number') bookedCount;
  @attr ('number') maxGuests;
}
