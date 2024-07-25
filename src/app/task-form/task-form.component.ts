import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false
  };

  constructor(private taskService: TaskService, private router: Router) { }

  addTask(): void {
    this.task.id = Date.now(); // Simple ID generation
    this.taskService.addTask(this.task);
    this.router.navigate(['/tasks']);
  }
}
