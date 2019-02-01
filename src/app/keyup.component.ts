import { Component } from '@angular/core';

@Component({
  selector: 'Reasons',
  template: `
    <input #newReason
      (keyup.enter)="addReason(newReason.value)"
      (blur)="addReason(newReason.value); newReason.value='' ">
      <button (click)="getRestaurant(newReason.value)">Find This Restaurant!</button>
      <ul><li *ngFor="let reason of reasons">{{reason}}</li></ul>
  `
})
export class ReasonsComponent {
  reasons = ['Yellowstone National Park ', 'Indiana Dunes State Park', 'They make most of our poatoes!!'];
  addReason(newReason: string) {
    if (newReason) {
      this.reasons.push(newReason);
    }
  }
}