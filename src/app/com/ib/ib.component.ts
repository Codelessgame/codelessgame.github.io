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
  enlargedIndices: number[] = [];

  toggleEnlarged(index: number): void {
    if (this.isEnlarged(index)) {
      // Remove index if already enlarged
      this.enlargedIndices = this.enlargedIndices.filter((i) => i !== index);
    } else {
      // Add index if not enlarged
      this.enlargedIndices.push(index);
    }
  }

  isEnlarged(index: number): boolean {
    return this.enlargedIndices.includes(index);
  }
}
