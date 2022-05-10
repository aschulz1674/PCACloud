import { Component, Inject, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable()
@Component({
  selector: 'input-word',
  templateUrl: './input-word.component.html',
  styleUrls: ['./input-word.component.css'],
})
export class InputWordComponent implements OnInit {
  constructor(private http: HttpClient) {}

  words = '';
  word = '';
  state = false;
  ngOnInit() {
    setInterval(() => this.canDo(), 1500);
  }

  onSubmit() {
    if (this.state == false) {
      this.state = true;
      console.log(this.word);
      this.http
        .post<any>(
          'https://myfirstapi.alexanderschul1.repl.co/api/word/' + this.word,
          {}
        )
        .subscribe(
          (data) => {
            if (data.error == true) {
              window.alert(data);
            }
          },
          (error) => console.error(error)
        );
    }
  }

  canDo() {
    this.state = false;
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
  }
  refresh() {
    this.getWords();
  }
}
