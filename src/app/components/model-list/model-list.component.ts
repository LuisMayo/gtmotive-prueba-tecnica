import { ActivatedRoute, Route, Router } from '@angular/router';
import { MakeActions, ModelActions } from 'src/app/store/actions';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreType } from 'src/app/store/reducer';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css'],
})
export class ModelListComponent {
  constructor(
    private _store: Store<StoreType>,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  models = this._store.select((st) =>
    st.models.items.filter((item) =>
      item.Model_Name.toLowerCase().includes(st.models.filter.toLowerCase())
    )
  );

  ngOnInit() {
    this._store.dispatch(ModelActions.initModelList());
    const id = this._route.snapshot.paramMap.get('id');
    if (id == null) {
      this._router.navigate([]);
    } else {
      this._store.dispatch(
        ModelActions.requestedModelList({
          modelId: id,
        })
      );
    }
  }

  onFilter(event: Event) {
    this._store.dispatch(
      ModelActions.filtered({
        filter: (event.target as HTMLInputElement).value ?? '',
      })
    );
  }
}
