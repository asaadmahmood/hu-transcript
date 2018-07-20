import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'hut-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.scss']
})
export class OfficialComponent implements OnInit {
  @Input() group: FormGroup;
  @Output() eventRemoved = new EventEmitter<any>();

  constructor() {
  }

  removeEvent(index, category) {
    const currentEntry = {
      index,
      category
    }
    this.eventRemoved.emit(currentEntry);
  }

  get officialCategory(): FormArray {
    return this.group.get('officialCategory') as FormArray;
  };

  ngOnInit() {
  }

}