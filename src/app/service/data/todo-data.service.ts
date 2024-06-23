import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  retrieveAllTodos(username: string): Observable<Todo[]>{
    return this.http.get<Todo[]>(`http://localhost:8080/user/${username}/todos`);
  }

  deleteTodo(username: string,id: number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  retrieveTodoById(username:string,id:number| undefined){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username: any,id: any,todo: any){
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }

  createTodo(username: any, todo: any){
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos}`,todo);
  }
}
