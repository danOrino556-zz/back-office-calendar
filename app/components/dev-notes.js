import Component from '@glimmer/component';
import { action} from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class DevNotes extends Component {


  @tracked showNotes = false;
  

  @action
  onToggleNotes(){
    this.showNotes = !this.showNotes;
  } 
}