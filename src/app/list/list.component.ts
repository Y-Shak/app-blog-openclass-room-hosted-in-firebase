import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() arrayPost :Post[];
  constructor() { }

  ngOnInit(): void {
  }

}
