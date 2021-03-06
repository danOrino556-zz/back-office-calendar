import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class Application extends Route {


  @service intl;


  beforModel(){

    //Dan : I usually put high level app code that applies to the entire app tree in one of these hooks
    //example - this.intl.setLocale("en-us");
  }


  redirect(model, transition){

    const targetName = transition.targetName;

    if(targetName === 'index'){
      this.replaceWith('dashboard');
    }
  }


  @action
  onReloadApplication(){
    this.refresh();
  }
}
