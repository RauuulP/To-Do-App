import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  allTasksCompleted: boolean = false;
  showModal: boolean = false;
  selectedTask: Task | null = null;


  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.checkCompletedTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
    this.checkCompletedTasks();
  }

  updateTask(id: number): void{
    this.taskService.updateTask(id);
    this.tasks = this.taskService.getTasks();
    this.checkCompletedTasks();
  }

  checkCompletedTasks(): void {
    this.allTasksCompleted = this.tasks.length === 0 || this.tasks.every(task => task.completed);
    if (this.allTasksCompleted) {
      this.showModal = false;
      this.triggerConfetti()
    }
  }

  openTaskDescription(task: Task): void{
    this.selectedTask = task;
    if (task.description) {
      this.showModal = true;
    } else {
      alert("No description available for this task. Don't worry, you got this!")
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedTask = null;
  }


  triggerConfetti(): void {
    const duration = 5 * 1000; 
    const end = Date.now() + duration;
    
    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() },
        colors: ['#ff0000', '#0000ff', '#ffff00'],
        decay: 0.95
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}
