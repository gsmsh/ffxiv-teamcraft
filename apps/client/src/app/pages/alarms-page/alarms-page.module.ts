import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmsPageComponent } from './alarms-page/alarms-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { MapModule } from '../../modules/map/map.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ItemIconModule } from '../../modules/item-icon/item-icon.module';
import { AlarmsModule } from '../../core/alarms/alarms.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { SettingsModule } from '../settings/settings.module';
import { NameQuestionPopupModule } from '../../modules/name-question-popup/name-question-popup.module';
import { NgDragDropModule } from 'ng-drag-drop';

const routes: Routes = [
  {
    path: '',
    component: AlarmsPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild(routes),

    TranslateModule,

    MapModule,
    CoreModule,
    PipesModule,
    ItemIconModule,
    AlarmsModule,
    SettingsModule,
    NameQuestionPopupModule,

    NgZorroAntdModule,
    NgDragDropModule
  ],
  declarations: [AlarmsPageComponent]
})
export class AlarmsPageModule {
}