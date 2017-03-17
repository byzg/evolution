import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { CellWaterComponent } from './cells/cell-water/cell-water.component';
import { CellPlantComponent } from './cells/cell-plant/cell-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    CellWaterComponent,
    CellPlantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
