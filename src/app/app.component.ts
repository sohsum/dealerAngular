import { Component } from '@angular/core';
import {srv} from './srv.service';
import {vehicleInfo} from './model';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs';



@Component({
  selector: 'app-root',

  template: `
  Please provide the file path Below :
<input type = "text" name="fileName" id = "fileName">
<input type= "submit" value = "Submit" action= display(fileName)>
<br>
 Current Information
    
   <br>
   <table >
   <tr>
   <td>
  <b> DealNumber</b>
   </td>
  <td><b>CustomerName</b></td>  
  <td><b>DealershipName</b></td>
  <td><b>Vehicle</b></td>  
  <td><b>Price</b></td>
  <td><b>Date</b></td>
 
  </tr>
  
  <tr *ngFor="let l of list">
  <td>{{l.CustomerName}}</td>
  <td>{{l.DealershipName}}</td>
  <td>{{l.Vehicle}}</td>
  <td>{{l.Price}}</td>
  <td>{{l.Date}}</td>
  
  <tr>
  </table>
    

  `
 
})
export class AppComponent {
  title = 'stockProjectAngular';
  public list:vehicleInfo;
 public data:vehicleInfo;
 
constructor(private Api:srv ){}

ngOnInit():void 
{
}

displya(fName:string) {

this.Api.getData(fName).subscribe((data:vehicleInfo) =>{
  this.list=data;
});
}

}
