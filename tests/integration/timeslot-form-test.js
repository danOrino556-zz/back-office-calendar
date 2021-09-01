import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';


module('Integration | Component | timeslot-form', function(hooks) {

  setupRenderingTest(hooks);

  test('User input should update model value', async function(assert) {
    
    const store = this.owner.lookup('service:store');
    const timeslot = store.createRecord('timeslot');
    
    assert.expect(4);

    this.set('timeslot', timeslot);

    await render(hbs`<TimeslotForm @model={{this.timeslot}} />`);

    await fillIn('#activityName', "Going to Disneyland!!");
    assert.equal(this.timeslot.activityName, "Going to Disneyland!!");

    await fillIn('#availableSpots', 400);
    assert.equal(this.timeslot.availableSpots, 400);

    await fillIn('#bookedCount', 400);
    assert.equal(this.timeslot.bookedCount, 400);

    await fillIn('#maxGuests', 400);
    assert.equal(this.timeslot.maxGuests, 400);
  });
});