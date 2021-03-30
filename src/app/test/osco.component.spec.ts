import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { OscoComponent } from '../osco/osco.component';
import { AudioService } from '../services/audio.service';
import { UrlsService } from '../services/urls.service';

describe('OscoComponent', () => {
  let component: OscoComponent;
  let fixture: ComponentFixture<OscoComponent>;
  let audioService: AudioService;
  let urlsService: UrlsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscoComponent ],
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService]
    })
    .overrideComponent(OscoComponent, {
      set: {
        template: `
        <div id="a"></div>
        <div id="b"></div>
        `
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscoComponent);
    audioService = TestBed.inject(AudioService);
    urlsService = TestBed.inject(UrlsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onScroll(event)', () => {
    component.fadeInElementIdList = ['a', 'b'];
    let event = {
      target: {
        scrollingElement : {
          scrollTop: -window.innerHeight
        }
      }
    };
    component.onScroll(event);
    event.target.scrollingElement.scrollTop = 0;
    component.onScroll(event);
    component.onScroll(event);

    let element = document.getElementById('a');
    if (element) {
      expect(element.classList.contains('fade-in')).toBeTruthy();
    } else {
      expect(element).toBeNull();
    }

    component.fadeInElementIdList = ['z'];
    component.onScroll(event);
  });

  it('onContrastChange()', () => {
    component.contrastSelect = false;
    
    component.onContrastChange();
    expect(component.contrastSelect).toBeTruthy();
    expect(component.iconList[0].includes('white')).toBeTruthy();
    
    component.onContrastChange();
    expect(component.contrastSelect).toBeFalsy();
    expect(component.iconList[0].includes('white')).toBeFalsy();
  });

  it('onAudioChange()', () => {
    component.audioSelect = false;
    
    component.onAudioChange();
    expect(component.audioSelect).toBeTruthy();

    component.onAudioChange();
    expect(component.audioSelect).toBeFalsy();
  });

  it('onLangSelect("lang")', () => {
    component.langSelect = true;

    component.onLangSelect('fr');
    expect(component.langSelect).toBeFalsy();
    expect(component.audioSource[0].includes('FR')).toBeTruthy();
    expect(component.audioSelect).toBeFalsy();

    component.langSelect = true;
    component.onLangSelect('es');
    expect(component.langSelect).toBeFalsy();
    expect(component.audioSource[0].includes('ES')).toBeTruthy();
    expect(component.audioSelect).toBeFalsy();
  });
});
