import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Periodic, Utils } from '../entities/Periodic';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: Periodic) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      symbol: new FormControl(null, [Validators.required]),
      created: new FormControl(null, [Validators.required]),
    });

    if (this.data) {
      this.data.created = this.data.created ? this.data.created : Utils.todayAsString();
      this.form.patchValue(this.data);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  close(): void {
    this.data = this.form.getRawValue();
    this.dialogRef.close(this.data);
  }

  get title(): string {
    if (this.data && this.data.id) {
      return 'Edit periodic element';
    }
    return 'Add new periodic element';
  }

}
