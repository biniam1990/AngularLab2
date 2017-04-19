import { Component, OnInit,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<input type="button" value="-" (click)="decrease()">{{counterValue}}
  <input type="button" value="+"(click)="increase()"> <ng-content></ng-content> `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Output() counterChange:EventEmitter<number>;
  counterValue=0;
  constructor() {
        this.counterChange=new EventEmitter();
   }
    @Input()
     set counter (val:number){
        this.counterValue=val;
        this.changed();
     }
     changed(){
       this.counterChange.emit(this.counterValue);
     }
   increase(){
     this.counterValue++;
     this.changed();
     return false; //to stop the propagation
   }
   decrease(){
     this.counterValue--;
     this.changed();
     return false; 
   }
  ngOnInit() {
  }

}
