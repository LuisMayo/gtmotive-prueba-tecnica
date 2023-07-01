import { Component } from '@angular/core';
import { MakeActions } from 'src/app/store/actions';
import { Store } from '@ngrx/store';
import { StoreType } from 'src/app/store/reducer';

@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.css']
})
export class MakeListComponent {
  title = 'gtmotive-prueba-tecnica';
  makes = this._store.select((st) =>
    st.makes.items.filter((item) =>
      item.Make_Name.toLowerCase().includes(st.makes.filter.toLowerCase())
    )
  );

  constructor(private _store: Store<StoreType>) {}

  ngOnInit() {
    this._store.dispatch(MakeActions.requestedMakeList());
  }

  onFilter(event: Event) {
    this._store.dispatch(
      MakeActions.filtered({
        filter: (event.target as HTMLInputElement).value ?? '',
      })
    );
  }
}
