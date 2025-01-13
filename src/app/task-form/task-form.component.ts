import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  name: string = "";

  constructor(private taskService: TaskService) {

  }

  addTask(): void {
    if(this.name){
      const newTask = new Task(Date.now(), this.name, false)
      this.taskService.addTask(newTask);
      this.name = "";
    }
  }
 
}
