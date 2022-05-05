import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Injectable()
@Component({
  selector: 'list-words',
  template: `
    <div>
      <angular-tag-cloud
        [data]="data"
        [width]="options.width"
        [height]="options.height"
        [overflow]="options.overflow">
      </angular-tag-cloud>
    </div>
  `,
})
export class ListWordsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  words = '';
  ngOnInit() {
    setInterval(() => this.getWords(), 1000);
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
  }

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 0,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 0,
    overflow: false,
  };

  data: CloudData[] = [
    {
      text: 'Weight-8-link-color',
      weight: 8,
      link: 'https://google.com',
      color: '#ffaaee',
    },
    {
      text: 'Weight-10-link',
      weight: 10,
      link: 'https://google.com',
      tooltip: 'display a tooltip',
    },
    // ...
  ];
}
