import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {vehicleInfo} from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class srv {
  apiURL: string = 'http://localhost:60697/api/values/';
  public data:vehicleInfo;
    constructor(private httpClient: HttpClient) {}
  
  getData(id:string):Observable<vehicleInfo>{
  return  this.httpClient.get<vehicleInfo>(this.apiURL+id);      
    }
  }

