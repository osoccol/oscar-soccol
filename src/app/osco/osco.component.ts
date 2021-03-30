import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationService } from '../services/animation.service';
import { AudioService } from '../services/audio.service';
import { UrlsService } from '../services/urls.service';

@Component({
  selector: 'app-osco',
  templateUrl: './osco.component.html',
  styleUrls: ['./osco.component.scss']
})
export class OscoComponent implements OnInit {
  @Input() langList: string[] = [];

  // add to the list ids of elements that will fade-in when scrolled into for the first time
  fadeInElementIdList: string[] = ['elis', 'matdivider', 'hngroup', 'standards', 'review', 'tests'];

  // header controls 
  langSelect: boolean = false;
  contrastSelect: boolean = false;
  audioSelect: boolean = false;

  // load and save the path of assets
  iconUrlList: string[] = [];
  iconList: string[] = [];
  flagUrlList: string[] = [];
  flagList: string[] = [];

  // Audio sources
  audioSource: string[] = [];

  constructor(
    private animationService: AnimationService,
    private urlsService: UrlsService,
    private audioService: AudioService,
    private translate: TranslateService) {
    this.iconUrlList = this.urlsService.getHeaderIconsUrlList();
    this.flagUrlList = this.urlsService.getFlagsIconsUrlList();
    this.audioSource = this.audioService.getAudioSourceList(translate.defaultLang);
  }

  ngOnInit(): void {
    this.audioSource = this.audioService.getAudioSourceList(this.translate.defaultLang);
    this.iconList = this.setIconList();
    this.flagList = this.setFlagList();
  }

  setIconList(color?: string): string[] {
    let iconList: string[] = [];
    if (color) {
      this.iconUrlList.forEach((iconUrl) => {
        iconList.push('url("' + iconUrl + '-' + color + '.svg")');
      });
    } else {
      this.iconUrlList.forEach((iconUrl) => {
        iconList.push('url("' + iconUrl + '.svg")');
      });
    }
    
    return iconList;
  }

  setFlagList(): string[] {
    let flagList: string[] = [];
    this.flagUrlList.forEach((flagUrl) => {
      flagList.push('url("' + flagUrl + '.png")')
    })
    return flagList;
  }

  onContrastChange(): void {
    this.contrastSelect = !this.contrastSelect;
    if (!this.contrastSelect) {
      this.iconList = this.setIconList();
    } else {
      this.iconList = this.setIconList('white');
    }
  }

  onLangChange(): void {
    this.langSelect = !this.langSelect;
  }

  onAudioChange(): void {
    this.audioSelect = !this.audioSelect;
  }

  onLangSelect(lang: string): void {
    this.onLangChange();
    this.translate.use(lang);
    this.audioSource = this.audioService.getAudioSourceList(lang);
    this.audioSelect = false;
  }

  onScroll(event: any): void {
    let scrollTop = event.target.scrollingElement.scrollTop;
    this.fadeInElementIdList.forEach((elementId) => {
      this.animationService.setAnimation(elementId, 'fade-in', scrollTop);
    })
  }
}