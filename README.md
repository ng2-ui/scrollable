# ng2-scrollable
Angular2 Automatic Scroll Detection With Animation


<a href="https://rawgit.com/ng2-ui/ng2-scrollable/master/app/index.html">
  <img src="http://i.imgur.com/9PWnNqe.png" width="50% border="1" />
</a>

Plunker Example: http://plnkr.co/edit/k5zEfS?p=preview

## Install

1. install ng2-scrollable

        $ npm install ng2-scrollable --save-dev

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-scrollable'] = 'node_modules/ng2-scrollable/dist';
        packages['ng2-scrollable'] = { main: 'ng2-scrollable.umd.js', defaultExtension: 'js' }

3. import Ng2ScrollableModule to your AppModule

        import { Ng2ScrollableModule } from 'ng2-scrollable';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2ScrollableModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }


## Usage it in your code

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

         
For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you.

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
You are only to be open-minded and interested in helping others.
As a contributor, you do following;

  * Updating README.md
  * Improving code comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 


### LICENSE 
MIT
