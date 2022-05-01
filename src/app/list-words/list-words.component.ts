import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable()
@Component({
  selector: 'list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css']
})
export class ListWordsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}