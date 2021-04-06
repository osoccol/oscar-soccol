import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { OscoComponent } from '../osco/osco.component';
import { AudioService } from '../services/audio.service';
import { UrlsService } from '../services/urls.service';

describe('OscoComponent with adapted template', () => {
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
        <div id="icons"></div>
        <div id="experiences"></div>
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
});
