import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  id: any;
  todo : any;
  constructor(private todoService: TodoDataService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo();
    this.todoService.retrieveTodoById('in28minutes',this.id).subscribe(
      response =>{
        console.log(response);
        this.todo = response;
      },
      error =>{
        console.log(error);
      }
    )
  }
  saveTodo() {
    console.log('In save Todo')
  }
}
