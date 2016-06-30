# ng2-scrollable
Angular2 Automatic Scroll Detection With Animation


<a href="h://plnkr.co/edit/Yq78qE?p=preview">
  <img src="http://i.imgur.com/0qcxg8X.png" width="50% border="1" />
</a>

## Install

1. install ng2-scrollable

        $ npm install ng2-scrollable

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-scrollable'] = 'node_modules/ng2-scrollable';
        packages['ng2-scrollable'] = { main: 'dist/index.js', defaultExtension: 'js' 

## Usage it in your code

1. import and add directive in your component

        import {Ng2ScrollableDirective} from 'ng2-scrollable';

        @Component({
          selector: 'my-app',
          templateUrl: './app/app.tpl.html',
          directives: [Ng2ScrollableDirective]
        })
        export class AppComponent {
          @ViewChild(Ng2ScrollableDirective) scrollable;
        }


2. You are ready. use it in your template

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

### LICENSE 
MIT
