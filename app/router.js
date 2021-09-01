import EmberRouter from '@ember/routing/router';
import config from 'back-office-calendar/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {


  this.route('dashboard', {path: 'dashboard/'}, function() {

    this.route('day-view', {path: 'day/'}, function() {
      this.route('timeslot', {path: '/:timeslot_id'});
      this.route('date', {path: '/:date'});
    });
  });
});
