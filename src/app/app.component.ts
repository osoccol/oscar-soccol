import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oscar-soccol';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(translate.getBrowserLang());
    translate.addLangs(['fr', 'es', 'en']);
  }
}
