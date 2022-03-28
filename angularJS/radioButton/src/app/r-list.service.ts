import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RListService {
  sex: BehaviorSubject<string>;

  changeMessage(message: string) {
    this.sex.next(message);
  }
  constructor() {
    this.sex = new BehaviorSubject('female');
  }

  getSex() {
    return this.sex;
  }
  setSex(value: string) {
    this.sex.next(value);
  }
  getList() {
    return [
      { name: 'Mohit', rollno:'179',sex:'male',Marks:'90' },
      { name: 'Ritika', rollno: '034', sex: 'female', Marks: '80' },
      { name: 'Manish', rollno: '173', sex: 'male', Marks: '85' },
      { name: 'Namit', rollno: '185', sex: 'male', Marks: '93' },
      { name: 'Vanshika', rollno: '188', sex: 'female', Marks: '86' }
    ];
  }
}
