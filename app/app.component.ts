//our root app component
import {Component, ViewChild, ViewContainerRef} from '@angular/core';
//noinspection TypeScriptCheckImport
import {Ng2ScrollableDirective} from 'ng2-scrollable';

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
    Ng2ScrollableDirective.scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      10              // distance from top or left
    );
  }
}