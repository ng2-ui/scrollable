//our root app component
import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {Ng2ScrollableDirective} from 'ng2-scrollable';

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <ul>
      <li [class.current]="id=='s1'" (click)="scrollable.el.scrollTo('s1')">One
      <li [class.current]="id=='s2'" (click)="scrollable.el.scrollTo('s2')">Two
      <li [class.current]="id=='s3'" (click)="scrollable.el.scrollTo('s3')">Three
      <li [class.current]="id=='s4'" (click)="scrollable.el.scrollTo('s4')">Four
      <li [class.current]="id=='s5'" (click)="scrollable.el.scrollTo('s5')">Five
      <li [class.current]="id=='s6'" (click)="scrollable.el.scrollTo('s6')">Six
      <li [class.current]="id=='s7'" (click)="scrollable.el.scrollTo('s7')">Seven
      <li [class.current]="id=='s8'" (click)="scrollable.el.scrollTo('s8')">Eight
      <li [class.current]="id=='s9'" (click)="scrollable.el.scrollTo('s9')">Nine
    </ul>
    <div class="scrollable" (scrolledTo)="id=$event" ng2-scrollable>
      <div id="s1">One</div>
      <div id="s2">Two</div>
      <div id="s3">Three</div>
      <div id="s4">Four</div>
      <div id="s5">Five</div>
      <div id="s6">Six</div>
      <div id="s7">Seven</div>
      <div id="s8">Eight</div>
      <div id="s9">Nine</div>
    </div>
  `,
  directives: [Ng2ScrollableDirective],
  styles: [`
    ul {list-style: none}
    ul li {display: inline-block; border: 1px solid #ccc; padding: 10px}
    ul li.current { background: #ccc; color: #fff}
    .scrollable {height: 400px; overflow:auto; border: 1px solid #ccc}
    .scrollable > div {height: 300px}
    .scrollable > div:nth-child(odd) { background-color: #ccc}
   `]
})
export class App {
  @ViewChild(Ng2ScrollableDirective) scrollable;

  constructor() {}
}