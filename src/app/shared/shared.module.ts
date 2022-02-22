import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  // return new TranslateHttpLoader(http, `/mf/satd-insight/i18n/`, '.json');
    // libs
    return new TranslateHttpLoader(http, `/i18n/`, '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot(
      {
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
      },
    }
    )
  ],
  exports: [TranslateModule]
})
export class SharedModule { }
