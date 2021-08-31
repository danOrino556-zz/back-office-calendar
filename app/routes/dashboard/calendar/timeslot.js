import Route from '@ember/routing/route';


export default class Timeslot extends Route{


  model(params){

    const timeslotId = params.timeslot_id;
    const allTimeslotModels = this.store.peekAll("timeslot");
    const matchingTimeslot = allTimeslotModels.findBy("id", timeslotId);

    return {
      timeslot : matchingTimeslot
    };
  }
}
