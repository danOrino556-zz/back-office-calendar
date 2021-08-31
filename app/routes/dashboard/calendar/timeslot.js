import Route from '@ember/routing/route';
import { isNone } from '@ember/utils';


export default class Timeslot extends Route{


  model(params){

    const timeslotId = params.timeslot_id;
    const allTimeslotModels = this.store.peekAll("timeslot");

    return {
      timeslot : allTimeslotModels.findBy("id", timeslotId)
    };
  }


  afterModel(model){

    if(isNone(model.timeslot)){
      this.transitionTo("dashboard.calendar");
    }
  }
}
