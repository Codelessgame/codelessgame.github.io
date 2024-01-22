import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ib',
  templateUrl: './ib.component.html',
  styleUrls: ['./ib.component.css']
})
export class IBComponent {
  @Input() Items: {
    title: string,
    subtitle: string,
    description: string,
    color: string
  }[] = []
  protected readonly onclick = onclick;

  enlargedIndex: number | null = null;
  toggleEnlarged(index: number): void {
    this.enlargedIndex = this.enlargedIndex === index ? null : index;
  }

  isEnlarged(index: number): boolean {
    return this.enlargedIndex === index;
  }
}
