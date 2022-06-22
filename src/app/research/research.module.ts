import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchComponent } from './research/research.component';
import { ResearchService } from './services/research.service';



@NgModule({
  declarations: [
    ResearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResearchComponent
  ],
  providers: [
    ResearchService
  ]
})
export class ResearchModule { }
