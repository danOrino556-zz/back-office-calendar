import Component from '@glimmer/component';
import { inject as service } from '@ember/service';


export default class OwnerInfo extends Component {


  @service store;


  get ownerModel(){
    
    const allOwnerModels = this.store.peekAll("owner").filterBy("isNew", true);
    return allOwnerModels.findBy("id", this.args.ownerId);
  }
}