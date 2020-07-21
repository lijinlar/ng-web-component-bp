import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
    <p>
      button works!
    </p>
    <h3> {{ name }} </h3>
  `,
  styles: [`
  h3 {
    background-color: orange;
  }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {
  @Input() name = "Mark"
  constructor() { }

  ngOnInit() {
  }

}
