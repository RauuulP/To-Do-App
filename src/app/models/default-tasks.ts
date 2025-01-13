import { Task } from "./task.model";

export const DEFAULT_TASKS: Task[] = [
  new Task(1,  'Buy groceries', false, 'Purchase milk, bread, and eggs from the supermarket.'),
  new Task(2,  'Clean the house', false, 'Vacuum and mop the floors.'),
  new Task(3,  'Complete Angular tutorial', false, 'Work through the Angular fundamentals module.'),
  new Task(4,  'Prepare dinner', false, 'Cook pasta and make a salad.'),
  new Task(5,  'Wash the car', false, 'Use the new soap.'),
  new Task(6,  'Go to the gym', false, "Don't forget to take the protein."),
  new Task(7,  'Create a new to-do app with Angular', false, 'Uplift your skills.'),
  new Task(8,  'Go fo a walk', false, 'Enjoy the fresh air')
];