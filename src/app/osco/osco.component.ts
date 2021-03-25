import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationService } from '../services/animation.service';
import { UrlsService } from '../services/urls.service';

@Component({
  selector: 'app-osco',
  templateUrl: './osco.component.html',
  styleUrls: ['./osco.component.scss']
})
export class OscoComponent implements OnInit {
  fadeInElementIdList: string[] = ['elis', 'matdivider', 'hngroup', 'standards', 'review', 'tests'];
  langSelect: boolean = false;
  contrastSelect: boolean = false;
  audioSelect: boolean = false;
  iconUrls: string[] = [];
  icons: string[] = [];
  msbapTitle: string = 'Audio Title';
  msbapAudioUrl: string = 'Online MP3 File URL';   
  msbapDisplayTitle: boolean = true; 

  constructor(private animationService: AnimationService,
    private urlsService: UrlsService,
    private translate: TranslateService) {
  }

  ngOnInit() {
    this.iconUrls = this.urlsService.getHeaderIconsUrls();
    this.setIconUrls();
  }

  setIconUrls(color?: string) {
    if (color) {
      this.icons = ['url("' + this.iconUrls[0] + '-' + color +'.svg")', 'url("' + this.iconUrls[1] + '-' + color +'.svg")', 'url("' + this.iconUrls[2] + '-' + color +'.svg")'];
    } else {
      this.icons = ['url("' + this.iconUrls[0] +'.svg")', 'url("' + this.iconUrls[1] +'.svg")', 'url("' + this.iconUrls[2] +'.svg")'];
    }
  }

  onScroll(event: any) {
    let scrollTop = event.target.scrollingElement.scrollTop;
    this.fadeInElementIdList.forEach((elementId) => {
      this.animationService.setAnimation(elementId, 'fade-in', scrollTop);
    })
  }

  onLangChange() {
    this.langSelect = !this.langSelect;
  }

  onAudioChange() {
    this.audioSelect = !this.audioSelect;
  }

  onLangSelect(lang: string) {
    this.langSelect = false;
    this.translate.use(lang);
  }

  onContrastChange() {
    this.contrastSelect = !this.contrastSelect;
    if (!this.contrastSelect) {
      this.setIconUrls();
    } else {
      this.setIconUrls('white');
    }
  }
}
