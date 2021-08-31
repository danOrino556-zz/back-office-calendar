import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class Dashboard extends Controller {


  @service('identity') identitySvc;
  

  @action
  onLogout(username, password){

    this.identitySvc.logout().then(
      ()=>{
        this.transitionToRoute("login")
      }
    )
  }
}