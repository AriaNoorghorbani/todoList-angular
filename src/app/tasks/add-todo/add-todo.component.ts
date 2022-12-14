import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTaskComponent {
  todoForm: FormGroup;
  addTaskMode: boolean = false;
  inputTaskMode = false;
  addTaskHeader: string = '+ Add task';
  panelOpenState: boolean = false;

  @Input() colId!: string;

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onAddTask() {
    debugger;
    if (
      this.todoForm.value.title.length > 1 &&
      this.todoForm.value.description.length > 1
    ) {
      this.todoService.addTaskToCol(this.colId, this.todoForm.value);
      console.log(this.colId, this.todoForm.value);
      this.todoForm.reset();
    } else {
      alert('Please input data for the task first');
    }
  }
}
