import {Component, Input} from '@angular/core';


@Component({
  selector: 'two-columns',
  templateUrl: './two-column.component.html',
  styleUrls: ['./two-column.component.css']
})
export class TwoColumnComponent {
  @Input() title: string = "Title";

  @Input() image_source: string | null = null;
  @Input() content_source: string | null = null;

  @Input() main_side: "left" | "right" = "right"
  @Input() color: "dark" | "light" = "light"

  @Input() extra_image_class = ""

}
