import { Component, OnInit, Input } from '@angular/core';
import { RListService } from '../r-list.service';

@Component({
  selector: 'r-button',
  templateUrl: './r-button.component.html',
  styleUrls: ['./r-button.component.css'],
})
export class RButtonComponent implements OnInit {
  @Input() customName: string;
  @Input() customValue: string;
  sex: string;
  constructor(private service: RListService) {}

  listFilter(value: string) {
    console.log(value);
    this.service.setSex(value);
  }

  ngOnInit(): void {}
}
