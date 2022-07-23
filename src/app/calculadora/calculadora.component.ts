import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  n1:number = 0;
  n2:number = 0;
  sum:boolean = false;
  rest:boolean = false;
  mult:boolean = false;
  div:boolean = false;
  result:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


  Wait_Operations()
  { 

    if(this.sum)
    {
        this.n2 = this.n1 + this.n2;
        this.sum = false;
        return true;
    }else if(this.rest)
    {
      this.n2 = this.n2 - this.n1;
      this.rest = false;
      return true;

    }else if(this.div)
    {
      this.n2 = this.n2 / this.n1;
      this.div = false;
      return true;

    }else if(this.mult)
    {
      this.n2 = this.n2 * this.n1;
      this.mult = false;
      return true;

    }

    return false;

    
  }

  Set_Opeartion(sign:string)
  { 

    if(!this.Wait_Operations())
    {
      this.n2 = this.n1;
    }


    switch (sign) {
      case "+":
        this.sum = true;
        break;
      case "-":
        this.rest = true;        
        break;
      case "x":
        this.mult = true;
        break;
      case "/":
        this.div = true;
        break;
      case "=":
        this.Add_to_Registre();
        break;
}
this.clear_Screen();
}


  set_to_screen(n:number)
  {

    var screen = (document.getElementById("screen") as HTMLInputElement);

    if(screen != null)
    {

      var tempo = screen.value;
      if(n == -1)
      {
        tempo = tempo.substring(0,tempo.length-1);
        screen.setAttribute("value",tempo.toString());
        
        if(tempo.length > 0)
        {
          this.n1 = parseInt(tempo);
        }else{
          this.n1 = 0;
        }


        return;
      }

     tempo = tempo + n.toString();
     this.n1 = parseInt(tempo);
      screen.setAttribute("value",tempo.toString());
    }

  }


  private clear_Screen(){
    var screen = (document.getElementById("screen") as HTMLInputElement);

    if(screen != null)
    {
      var tempo = "";
      screen.setAttribute("value",tempo.toString());
    }

    this.n1 = 0;
  }



  Add_to_Registre()
  {
      let regis  = document.getElementById("registros");
      if(regis != null)
      {
        let cod_temp  = regis.innerHTML;
        cod_temp += "<div class=\"w-[80%] h-[20%] mx-auto mt-5 bg-slate-300 flex flex-col justify-center text-3xl text-slate-700 px-6 text-right\">\
        " + this.n2 + "\
        </div>";

        regis.innerHTML = cod_temp;
      }
  }

}
