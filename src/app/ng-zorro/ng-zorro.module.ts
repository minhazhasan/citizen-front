import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports:[NgZorroAntdModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class NgZorroModule { }
