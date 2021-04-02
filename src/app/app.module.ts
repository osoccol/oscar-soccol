import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OscoComponent } from './osco/osco.component';
import { MatDividerModule } from '@angular/material/divider';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    OscoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDividerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  let httpOptions = new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  });
  http.options('', {headers: httpOptions});
  http.head('', {headers: httpOptions});
  return new TranslateHttpLoader(http,
    environment.path + 'assets/i18n/');
}