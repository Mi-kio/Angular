import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

ngOnChanges(){
  //we can write events we want to perform on changes
  alert('data changed');
}
@Input() public data : any;

}
