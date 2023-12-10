import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent {
  click: string= "SEE MORE";
  @Input() link_1="";
  @Input() link_2: string="";
  @Input() link_3: string="";

}
