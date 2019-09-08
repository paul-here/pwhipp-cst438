import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _http: HttpService) { } // he just dependancy injected a service!

  ngOnInit() {
    this._http.myMethod(); // boom, the created singleton is avail for method calls!
  }

}
