import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-work-cards',
  templateUrl: './my-work-cards.component.html',
  styleUrls: ['./my-work-cards.component.css']
})
export class MyWorkCardsComponent {
    @Input() backgroundImage1 = ''
    @Input() backgroundImage2 = ''
    @Input() backgroundImage3 = ''
    @Input() url_1: string =''
    @Input() url_2: string =''
    @Input() url_3: string =''

    protected readonly createImageBitmap = createImageBitmap;

}
