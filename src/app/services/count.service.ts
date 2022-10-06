import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
    Counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }
}
