import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{

  appObj:StorageList;
  taskList:StorageList[]=[];

  constructor()
  {
    this.appObj= new StorageList()
  }

  submitList()
  {
    const obj = JSON.stringify(this.appObj)
    const pObj = JSON.parse(obj)
    this.taskList.push(pObj)
    localStorage.setItem("database", JSON.stringify(this.taskList))
  }
}


export class StorageList 
{
data: string;
date: string;
tags: string;

constructor()
{
  this.data='';
  this.date='';
  this.tags='';
}
}