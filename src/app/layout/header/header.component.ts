import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

const letters = "AÁBCČDĎEÉĚFGHIÍJKLMNŇOÓPQRŘSŠTŤUÚŮVWXYZŽ0123456789"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() value: string = ''
  currentValue = this.value
  interval: any

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('value')) {
      this.currentValue = this.value
    }
  }

  startAnimation() {
    clearInterval(this.interval)

    this.currentValue = this.value
    let iteration = 0

    this.interval = setInterval(() => {
      this.currentValue = this.value
        .split("")
        .map((char, index) =>
          index >= iteration
            ? letters[Math.floor(Math.random() * letters.length)]
            : char
        )
        .join("")

      if (iteration >= this.value.length) {
        clearInterval(this.interval)
      }

      iteration += 1 / 3
    }, 30)
  }

}
