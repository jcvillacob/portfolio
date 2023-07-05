import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuActive: boolean = false;
  elementos: any[] = [
    {class: 'fa-solid fa-house' , title: 'Home'},
    {class: 'fa-solid fa-video' , title: 'Videos'},
    {class: 'fa-solid fa-school' , title: 'Cursos'},
    {class: 'fa-solid fa-clipboard-check' , title: 'Terminados'},
    {class: 'fa-solid fa-briefcase' , title: 'Briefcase'}
  ]


  menuActivating(): void {
    this.menuActive = !this.menuActive;
  }
}
