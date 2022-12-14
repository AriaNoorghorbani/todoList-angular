import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Confirm } from 'src/app/columns/columns/columns.component';

@Component({
  selector: 'app-task-delete-dialog',
  templateUrl: './task-delete-dialog.component.html',
  styleUrls: ['./task-delete-dialog.component.scss'],
})
export class TaskDeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TaskDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Confirm
  ) {}

  ngOnInit(): void {}

  onSave() {}

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  }
}
