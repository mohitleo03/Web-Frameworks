import { Component, OnInit } from '@angular/core';
import { RListService } from '../r-list.service';

@Component({
  selector: 'app-r-list',
  templateUrl: './r-list.component.html',
  styleUrls: ['./r-list.component.css'],
})
export class RListComponent implements OnInit {
  sex: string;
  list: any[];
  sendList: any[];
  constructor(private serviceTemp: RListService) {
    this.list = serviceTemp.getList();
  }
  ngOnInit(): void {
    this.serviceTemp.sex.subscribe((c) => {
      this.sex = c;
      this.list = this.serviceTemp.getList();
      this.list = this.list.filter((item) => item.sex == this.sex);
    });
  }
}
