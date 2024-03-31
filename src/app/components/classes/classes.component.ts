import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  classes:Array<any>=[
    {id:1, classe:"L1a"},
  {id:2, classe:"L2b"},
  {id:3, classe:"S1"},
  {id:4,classe:"S2"}
  
  ];
}
