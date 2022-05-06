import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { Observable, of } from 'rxjs';

@Injectable()
@Component({
  selector: 'list-words',
  template: `
    <div>
      <angular-tag-cloud
        [data]="data"
        [width]="options.width"
        [height]="options.height"
        [overflow]="options.overflow"
        (clicked)="logClicked($event)">
      </angular-tag-cloud>
    </div>
  `,
})
export class ListWordsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  words = [];

  ngOnInit() {
    setInterval(() => this.getWords(), 500);
  }

  logClicked(clicked: CloudData) {
    console.log(clicked);
    this.upVote(clicked.text);
  }
  upVote(id) {
    console.log(id);
    this.http
      .post<any>(
        'https://myfirstapi.alexanderschul1.repl.co/api/word/' + id,
        {}
      )
      .subscribe(
        (data) => {},
        (error) => console.error(error)
      );
  }

  getWords() {
    this.http
      .get<any>('https://myfirstapi.alexanderschul1.repl.co/api/word/', {})
      .subscribe(
        (data) => {
          console.log(data);
          this.words = data.words;
        },
        (error) => console.error(error)
      );
    this.newData();
  }
  newData() {
    const changedData$: Observable<CloudData[]> = of(this.words);
    changedData$.subscribe((res) => (this.data = res));
  }
  D;
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 0,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 0,
    overflow: false,
  };

  data: CloudData[] = this.words;
}
