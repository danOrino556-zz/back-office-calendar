import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class Login extends Controller {


  @service('identity') identitySvc;
  

  @action
  onLogin(username, password){

    const loginTask = this.model.loginTask;
    loginTask.perform(username, password);
  }
}