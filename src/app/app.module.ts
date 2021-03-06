import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServiceLocator } from './services/service-locator.service';
import { RndService } from './services/rnd.service';
import { BoardService } from './services/board.service';
import { StarterService } from './services/starter.service';

import { Waters } from './collections/inanimate/waters';
import { Plants } from './collections/alive/plants';

import { AppComponent } from './components/app/app.component';
import { BoardComponent } from './components/board/board.component';
import { CellComponent } from './components/cells/cell/cell.component';
import { CellWaterComponent } from './components/cells/cell-water/cell-water.component';
import { CellPlantComponent } from './components/cells/cell-plant/cell-plant.component';
import { WaterComponent } from './components/bodies/water/water.component';
import { PlantComponent } from './components/bodies/plant/plant.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    CellWaterComponent,
    CellPlantComponent,
    WaterComponent,
    PlantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BoardService,
    RndService,
    StarterService,

    Waters,
    Plants
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
