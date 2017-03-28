import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import {NguiScrollableDirective} from "./scrollable.directive";

export { NguiScrollableDirective };

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [NguiScrollableDirective],
  exports: [ NguiScrollableDirective ]
})
export class NguiScrollableModule {}

