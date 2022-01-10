import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'node-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  @Input()
  page!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
