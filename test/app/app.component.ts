//our root app component
import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {Ng2ScrollableDirective} from 'ng2-scrollable';

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <ul style="padding-left: 25%">
      Scroll Within a Section<br/>
      <li [class.current]="id=='s1'" (click)="scrollTo('#s1')">1
      <li [class.current]="id=='s2'" (click)="scrollTo('#s2')">2
      <li [class.current]="id=='s3'" (click)="scrollTo('#s3')">3
      <li [class.current]="id=='s4'" (click)="scrollTo('#s4')">4
      <li [class.current]="id=='s5'" (click)="scrollTo('#s5')">5
      <li [class.current]="id=='s6'" (click)="scrollTo('#s6')">6
      <li [class.current]="id=='s7'" (click)="scrollTo('#s7')">7
      <li [class.current]="id=='s8'" (click)="scrollTo('#s8')">8
      <li [class.current]="id=='s9'" (click)="scrollTo('#s9')">9
    </ul>
    <div class="scrollable section" (scrolledTo)="id=$event" ng2-scrollable>
      <div id="s1">Section 1</div>
      <div id="s2">Section 2</div>
      <div id="s3">Section 3</div>
      <div id="s4">Section 4</div>
      <div id="s5">Section 5</div>
      <div id="s6">Section 6</div>
      <div id="s7">Section 7</div>
      <div id="s8">Section 8</div>
      <div id="s9">Section 9</div>
    </div>
    <br/>
    
    <ul class="window">
      Scroll within window<br/>
      wid: {{wid}}
      <li [class.current]="wid=='w1'" (click)="scrollTo('#w1')">One
      <li [class.current]="wid=='w2'" (click)="scrollTo('#w2')">Two
      <li [class.current]="wid=='w3'" (click)="scrollTo('#w3')">Three
      <li [class.current]="wid=='w4'" (click)="scrollTo('#w4')">Four
      <li [class.current]="wid=='w5'" (click)="scrollTo('#w5')">Five
      <li [class.current]="wid=='w6'" (click)="scrollTo('#w6')">Six
      <li [class.current]="wid=='w7'" (click)="scrollTo('#w7')">Seven
      <li [class.current]="wid=='w8'" (click)="scrollTo('#w8')">Eight
      <li [class.current]="wid=='w9'" (click)="scrollTo('#w9')">Nine
    </ul>
    <div class="scrollable window" (scrolledTo)="wid=$event" ng2-scrollable>
      <div id="w1">One</div>
      <div id="w2">Two</div>
      <div id="w3">Three</div>
      <div id="w4">Four</div>
      <div id="w5">Five</div>
      <div id="w6">Six</div>
      <div id="w7">Seven</div>
      <div id="w8">Eight</div>
      <div id="w9">Nine</div>
    </div>
  `,
  directives: [Ng2ScrollableDirective],
  styles: [`
    ul {list-style: none}
    ul li {display: inline-block; border: 1px solid #ccc; padding: 10px}
    ul li.current { background: #ccc; color: #fff}
    .scrollable {margin-left: 25%; height: 400px; border: 1px solid #ccc}
    .scrollable > div {height: 300px}
    .scrollable > div:nth-child(odd) { background-color: #ccc}
    
    ul.window {position: fixed; top: 160px; left: 0; width: 25%; padding: 0}
    ul.window li {display: block;}
    .scrollable.section {overflow:auto;}
    
   `]
})
export class App {
  scrollTo(selector) {
    Ng2ScrollableDirective.scrollTo(selector);
  }
}