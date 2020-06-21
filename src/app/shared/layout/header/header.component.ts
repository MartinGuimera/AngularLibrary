import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cambioColor1() {
    document.getElementById("link1").style.color = "blue";
    document.getElementById("link2").style.color = "rgba(0, 0, 0, .87)";
    document.getElementById("link3").style.color = "rgba(0, 0, 0, .87)";
  }

  cambioColor2() {
    document.getElementById("link1").style.color = "rgba(0, 0, 0, .87)";
    document.getElementById("link2").style.color = "blue";
    document.getElementById("link3").style.color = "rgba(0, 0, 0, .87)";
  }

  cambioColor3() {
    document.getElementById("link1").style.color = "rgba(0, 0, 0, .87)";
    document.getElementById("link2").style.color = "rgba(0, 0, 0, .87)";
    document.getElementById("link3").style.color = "blue";
  }

}
