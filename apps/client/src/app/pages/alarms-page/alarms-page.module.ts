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
import { TextQuestionPopupModule } from '../../modules/text-question-popup/text-question-popup.module';
import { AlarmsOptionsPopupComponent } from './alarms-options-popup/alarms-options-popup.component';
import { PageLoaderModule } from '../../modules/page-loader/page-loader.module';
import { FullpageMessageModule } from '../../modules/fullpage-message/fullpage-message.module';
import { ClipboardModule } from 'ngx-clipboard';

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
    ClipboardModule,

    MapModule,
    CoreModule,
    PipesModule,
    ItemIconModule,
    AlarmsModule,
    SettingsModule,
    NameQuestionPopupModule,
    TextQuestionPopupModule,
    PageLoaderModule,
    FullpageMessageModule,

    NgZorroAntdModule,
    NgDragDropModule
  ],
  declarations: [AlarmsPageComponent, AlarmsOptionsPopupComponent],
  entryComponents: [AlarmsOptionsPopupComponent]
})
export class AlarmsPageModule {
}