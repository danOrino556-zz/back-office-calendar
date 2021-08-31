import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class Application extends Route {


  @service intl;


  beforModel(){

    //Dan : I usually put high level app code that applies to the entire app tree in one of these hooks 
    this.intl.setLocale("en");
  }


  redirect(model, transition){

    const targetName = transition.targetName;

    if(targetName === 'index'){
      this.replaceWith('login');
    }
  }


  @action
  onReloadApplication(){
    this.refresh();
  }
}
