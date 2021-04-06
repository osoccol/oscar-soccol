import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oscar-soccol';
  langList: string[] = ['en', 'es', 'fr'];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.langList.includes(translate.getBrowserLang()) ? translate.getBrowserLang() : 'en');
    translate.addLangs(this.langList);
  }
}
