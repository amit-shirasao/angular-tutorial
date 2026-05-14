import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSettings } from './network-settings';

describe('NetworkSettings', () => {
  let component: NetworkSettings;
  let fixture: ComponentFixture<NetworkSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkSettings],
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
