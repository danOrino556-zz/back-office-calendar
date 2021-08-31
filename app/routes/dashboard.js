import Route from '@ember/routing/route';


export default class Dashboard extends Route{


  model(){

    return {
    };
  }


  redirect(model, transition){

    const targetName = transition.targetName;

    if(targetName === 'dashboard.index'){
      this.transitionTo("dashboard.calendar");
    }
  }
}
