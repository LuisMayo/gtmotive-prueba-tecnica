import { makeReducer, modelReducer } from './store/reducer';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Effects } from './store/effect';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModelListComponent } from './components/model-list/model-list.component';
import { MakeListComponent } from './components/make-list/make-list.component';

@NgModule({
  declarations: [AppComponent, ModelListComponent, MakeListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    StoreModule.forRoot({ makes: makeReducer, models: modelReducer }),
    EffectsModule.forRoot(Effects),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
