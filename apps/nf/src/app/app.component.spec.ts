import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [HttpClientTestingModule],
    shallow: true
  })

  beforeEach(() => spectator = createComponent());

  it('should create the app', () => {
    expect(spectator.component).toBeDefined();
  });
});