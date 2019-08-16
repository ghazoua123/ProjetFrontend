import { User } from './app2/user';
import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { BehaviorSubject } from 'rxjs';
   
@Injectable()
export class Globals {
    [x: string]: any;
    globalEventDistributor:any;
    user: User[];
    private data = new BehaviorSubject(this.user);
  currentMessage = this.data.asObservable();
  private click = new BehaviorSubject('add');
  bool = this.click.asObservable();
    
   constructor(private http: HttpClient) {
     
    }
    changeMessage(data: User[]) {
      this.data.next(data)
    }
    changeClick(b: string) {
      this.click.next(b)
    }
  

getAll(): Observable<any> {
    return this.http.get('http://localhost:9099/user/all');
  }
  getById(id: String):Observable<any>{
    return this.http.get('http://localhost:9099/user/'+id);
  }
  deleteUser(id: string) {
    return this.http.delete('http://localhost:9099/user/'+id)
  }
  addUser(user: User): Observable<any> {
    return this.http.post('http://localhost:9099/user/',user);
  }
  updateUser(user: User){
    return this.http.put('http://localhost:9099/user/',user);
  }

}