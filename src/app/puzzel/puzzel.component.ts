import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzel',
  templateUrl: './puzzel.component.html',
  styleUrls: ['./puzzel.component.css']
})
export class PuzzelComponent implements OnInit {
   number_arr:number[] = [];

  constructor() {
    this.Set_Random_Position();
    document.addEventListener("DOMContentLoaded",e=>{

      this.set_positions();

      document.addEventListener("keydown",e => {

        if(e.keyCode ==37) //izq 0,3,6
        {
 

          console.log("mov left : " + this.number_arr[8] );
          if(this.number_arr[8] + 1 <= 8   && this.number_arr[8] != 2  && this.number_arr[8] != 5  && this.number_arr[8] != 8 )
          {
            this.move_to_(this.number_arr[8]+1);
          }
        }
        if(e.keyCode ==38) // arriba
        {
          console.log("mov left : " + this.number_arr[8]);
          if(this.number_arr[8] + 3 <= 8)
          {
            this.move_to_(this.number_arr[8]+3);
          }

        }
        if(e.keyCode ==39) // derecha 2,5,8
        {
          console.log("mov left : " + this.number_arr[8]);
          if(this.number_arr[8] - 1 >= 0 && this.number_arr[8] != 0 && this.number_arr[8] != 3 && this.number_arr[8] != 6 )
          {
            this.move_to_(this.number_arr[8]-1);
          }
        }
        if(e.keyCode ==40) //abajo
        {
          console.log("mov up : " + this.number_arr[8]);
          if(this.number_arr[8] - 3 >= 0)
          {
            this.move_to_(this.number_arr[8]-3);
          }
     
        }
        
      });


    })
  }

  ngOnInit(): void {
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
  

  Set_Random_Position()
  {
    let agregar:boolean = true;
    while(true)
    {
      agregar=true;

      if(this.number_arr.length >= 9)
      {
        break;
      }


      let num:number = this.getRandomInt(9);
      
      if(this.number_arr.length > 0)
      {
        if(this.number_arr.findIndex(n => num == n) != -1)
          {
            agregar =false;
          }
      }


      if(agregar)
      {
        this.number_arr.push(num);
      }


    }


    console.log(this.number_arr);
  }



  set_positions()
  {
      let pieces = document.getElementsByClassName("piece");

      if (pieces != null) {
        for(let i = 0 ; i < pieces.length ; i++)
        {
          let temp:string = this.number_arr[i].toString();
          pieces[i].setAttribute("style", "order:" + temp);
        }
      }
  }


  move_to_(pos:number)
  {
    let temp:number = this.number_arr[8];

    let tempo=this.number_arr.findIndex(e => e == pos);
    console.log("pos:" + pos + ' , ' + 'index: ' + tempo);

    this.number_arr[8]=this.number_arr[tempo];

    this.number_arr[tempo]= temp;

    this.set_positions();
  }


}
