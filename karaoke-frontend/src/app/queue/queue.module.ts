import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MainQueueComponent} from './main-queue/main-queue.component';

@NgModule({
  declarations: [ MainQueueComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class QueueModule { }
