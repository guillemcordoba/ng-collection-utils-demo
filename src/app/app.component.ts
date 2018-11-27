import { Component } from '@angular/core';
import { mergeAnalyzedFiles } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  simpleList = [{
    id: 'lsjfñs',
    name: 'Item 1'
  }];
}
