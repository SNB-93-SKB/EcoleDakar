import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions :Array<any>=[
    {title:"Home", "route":"/home", icon:"house"},
     {title:"Classes", "route":"/classes",icon:"list"},
     {title:"Students","route":"/students",icon:"list"},
     {title:"Newstudent","route":"/newstudent",icon:"plus"}
   ];
   currentAction:any;
 
   setCurrentAction(action:any){
     this.currentAction=action;
 
   }
}
