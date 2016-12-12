import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import {Ng2ScrollableDirective} from "./ng2-scrollable.directive";

export { Ng2ScrollableDirective };

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [Ng2ScrollableDirective],
  exports: [ Ng2ScrollableDirective ]
})
export class Ng2ScrollableModule {}

