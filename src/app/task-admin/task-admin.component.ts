import { Component, Input, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-task-admin',
  templateUrl: './task-admin.component.html',
  styleUrls: ['./task-admin.component.css']
})
export class TaskAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  Create_task()
  {

    let tasks = document.getElementById('tasks');
    let title = document.getElementById('title') as HTMLInputElement;
    let body = document.getElementById('description') as HTMLTextAreaElement;

    if(tasks != null && title != null && body != null)
    {


      let temp = tasks.innerHTML;
      let title_temp = title.value;
      let content = body.value;


      temp += " <div class=\"task w-[40%]  min-h-[50%] max-h-[80%] bg-slate-300 mt-10 mb-20 ml-10 shadow-md shadow-slate-400\">\
      <div class=\"px-4 py-4\">\
          \<p class=\"bg-slate-100 rounded-full px-4 py-4\">"+ title_temp +  "</p>\
          <p class=\"mt-4 px-4 py-4 bg-slate-500 rounded-md text-white text-justify\">\
          " + content + "\
         </p>\
          <div class=\"w-full flex justify-center mt-4\">\
              <button class=\"border px-6 py-2 bg-red-300 hover:bg-red-500 duration-200 text-white \">Eliminar</button>\
              </div>\
          </div>\
      </div>";


      tasks.innerHTML = temp;


    }
    


  }
}
