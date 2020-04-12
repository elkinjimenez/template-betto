import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = { icono: 'far fa-times-circle', accionMenu: true };

  constructor() { }

  ngOnInit() {

    this.abrirMenu();

  }

  abrirMenu() {

    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';

  }

  cerrarMenu() {

    document.getElementById('mySidebar').style.width = '32.4px';
    document.getElementById('main').style.marginLeft = '32.4px';

  }

  accionarMenu(event) {

    if (this.menu.accionMenu === true) {

      this.cerrarMenu();
      this.menu.accionMenu = false;
      this.menu.icono = 'fas fa-bars';

    } else if (this.menu.accionMenu === false) {

      this.abrirMenu();
      this.menu.accionMenu = true;
      this.menu.icono = 'far fa-times-circle';

    }

  }

}
