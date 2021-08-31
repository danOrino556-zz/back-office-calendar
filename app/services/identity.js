import Service, { inject as service } from '@ember/service';


export default class Identity extends Service{


  @service('request') requestSvc;


  isLoggedIn = false; //hand wave


  login(){

    this.isLoggedIn = true;
    return this.requestSvc.fetch("loginEndpoint")
  }


  logout(){

    this.isLoggedIn = false;
    return this.requestSvc.fetch("logoutEndpoint")
  }
}
