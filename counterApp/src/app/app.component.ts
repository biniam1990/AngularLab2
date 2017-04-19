import { Component,Output } from '@angular/core';
import { CounterComponent } from './counter.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
   
    componentCounterValue:number=9;
//  public counterInit=9;
 
  counterChange( val:number){
    console.log(val);
   this.componentCounterValue=val;
  }
}
