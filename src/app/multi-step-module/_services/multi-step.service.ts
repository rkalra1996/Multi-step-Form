import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MultiStepService {

  private subject = new Subject();
  private finalData : object = {};

  getData = (): Observable<object> => this.subject.asObservable();
  
  sendData : any = (dataObj : object) => {
    this.finalData = {...this.finalData, ...dataObj};
    this.subject.next(this.finalData)};
  
  clearData = () => this.subject.next();
  
  constructor() { }
}
