import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../model/Todo';
import { Route, Router } from '@angular/router';
/*
export class Todo{
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}
*/
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  public todos : Todo[] = [];
  message : string = '';

  constructor(private todoService: TodoDataService,private router: Router){}

  ngOnInit(): void {
    this.refreshTodos();
  }

  deleteTodo(id: any) {
    console.log(`In delete todo method- ${id}`);
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of Todo with order-${id} is Successful!`;
        this.refreshTodos();
      },
      error => {
        this.message = 'Some error occurred! Please try again';
        console.log(error);
      }
    );
    
  }

  private refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      },
      error => {
        this.message = 'Some error occurred! Please try again';
      }
    );
  }

  updateTodo(id: any) {
    console.log(`Update Todo ${id}`);
    /*
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of Todo with order-${id} is Successful!`;
        this.refreshTodos();
      },
      error => {
        this.message = 'Some error occurred! Please try again';
        console.log(error);
      }
        
    );
    */
    this.router.navigate(['todos',id]);
  }

  addTodo() {
    this.router.navigate(['todos',-1]);
  }
}




