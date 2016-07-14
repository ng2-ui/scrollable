//main entry point
import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app.component';

bootstrap(App, [])
  .catch(err => console.error(err));