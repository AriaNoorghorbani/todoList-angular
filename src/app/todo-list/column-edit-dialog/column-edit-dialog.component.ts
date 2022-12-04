import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/interface/task.model';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-column-edit-dialog',
  templateUrl: './column-edit-dialog.component.html',
  styleUrls: ['./column-edit-dialog.component.scss'],
})
export class ColumnEditDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ColumnEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { colId: string; colTitle: string },
    public todoService: TodoService
  ) {}

  ngOnInit(): void {}

  onSave() {
    this.todoService.editCol(this.data.colId, this.data.colTitle);

    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
