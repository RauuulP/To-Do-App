import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { DEFAULT_TASKS } from '../models/default-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = []

  constructor() { 
    this.tasks = DEFAULT_TASKS;
    this.saveTasks();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task):void {
    this.tasks.push(task);
    this.saveTasks();
  }

  deleteTask(id: number):void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks()
  }

  updateTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if(task) {
      task.completed = !task.completed;
      this.saveTasks();
    }
  }

  private saveTasks():void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
