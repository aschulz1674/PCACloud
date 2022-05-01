import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputWordComponent } from './input-word/input-word.component';
import { ListWordsComponent} from './list-words/list-words.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, InputWordComponent,ListWordsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
