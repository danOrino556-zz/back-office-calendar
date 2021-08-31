import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class Login extends Route{


  @service('identity') identitySvc;
  @service intl;


  @(task(function*(username, password, mfaCode) {

    const identitySvc = this.identitySvc;

    return yield identitySvc.login(username, password, mfaCode).then(

      ()=>{
        this.transitionTo('dashboard');
      },

      (loginStatus)=>{
        console.log("error")
      }
    );
  }).drop())
  loginTask;


  model(){

    return {
      loginTask : this.loginTask,
    };
  }
}
