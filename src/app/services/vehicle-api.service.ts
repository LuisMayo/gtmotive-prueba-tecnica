import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MakesResponse } from '../models/makes-response';
import { ModelsResponse } from '../models/models-response';

@Injectable({
  providedIn: 'root',
})
export class VehicleApiService {
  readonly baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/';

  constructor(private _http: HttpClient) {}

  getAllMakes() {
    return this._http.get<MakesResponse>(
      this.baseUrl + 'GetAllMakes?format=json'
    );
  }

  getModelsByMake(make: string | number) {
    return this._http.get<ModelsResponse>(
      `${this.baseUrl}GetModelsForMakeId/${make}?format=json`
    );
  }
}
