import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  id: any;
  todo : any;
  constructor(private todoService: TodoDataService,private route: ActivatedRoute,private router : Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.todo = new Todo(this.id,'in28minutes','',new Date(),false);
    if(this.id!= -1){
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
  }
  saveTodo() {
    console.log('In save Todo' + this.id);
    if(this.id == -1){
        // creae todo
        console.log('In create todo');
        this.todoService.createTodo('in28minutes',this.id).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['todos']);
          },
          error =>{

          }
        )
    } else{
      console.log('In update todo');
      this.todoService.updateTodo('in28minutes',this.id,this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos']);
        },
        error =>{
          console.log(error);
        }
      )
    }
  }
}
