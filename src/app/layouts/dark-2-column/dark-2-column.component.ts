import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dark-2-column',
  templateUrl: './dark-2-column.component.html',
  styleUrls: ['./dark-2-column.component.css']
})
export class Dark2ColumnComponent {
  @Input() title: string = "Title";
  @Input() title_green: string ="title-green"
  @Input() content: string = ""

}
