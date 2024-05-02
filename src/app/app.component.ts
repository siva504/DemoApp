import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'DemoApp';
  // x=15;
  // y=20;
  // add(){
  //   return this.x+this.y;
  // }

  // city:string="Rajajmundry";
  // imagePath:string="../assets/3.png";

  // d:string=new Date().toLocaleDateString();

  // t:string=new Date().toLocaleTimeString();

  // updateTime=setInterval(()=>{
  //   this.t=new Date().toLocaleTimeString();
  // },1000);
  colorVariable:string='blue';

  isdisabled:boolean=false;
  isactive:boolean=true;

  myStyle:object={
    color:'lime',
    background:'gray',
    border:'5px solid red'
  }
  incrementCounter:number=0;

  increment(){
    this.incrementCounter++;
  }

  decrementCounter:number=0;
  decrement(){
    this.decrementCounter--;
  }

  name:string="Satya";
  changeName(e:any){
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    this.name=e.target.value;
  }
  // city="Rajahmundry"
}
