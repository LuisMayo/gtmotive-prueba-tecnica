import { Component, OnInit } from '@angular/core';

import { MakeActions } from './store/actions';
import { MakesResult } from './models/makes-response';
import { Store } from '@ngrx/store';
import { StoreType } from './store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gtmotive-prueba-tecnica';
}
