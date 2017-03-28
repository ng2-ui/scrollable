//our root app component
import {Component, ViewChild, ViewContainerRef} from '@angular/core';
//noinspection TypeScriptCheckImport
import {NguiScrollableDirective} from '@ngui/scrollable';

@Component({
  selector: 'my-app',
  providers: [],
  templateUrl: './app.tpl.html'
})
export class AppComponent {
  id: string = 's1';
  hid: string = 'h1';
  wid: string = 'w1';
  scrollTo(selector, parentSelector, horizontal) {
    NguiScrollableDirective.scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      0               // distance from top or left
    );
  }
}