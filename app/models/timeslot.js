import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class Timeslot extends Model {

  
  @attr ('number') date;
  @attr ('number') startTime;
  @attr ('number') endTime;
  @attr ('number') activityName;
  @attr ('number') availableSpots;
  @attr ('number') bookedCount;
  @attr ('number') maxGuests;
}
