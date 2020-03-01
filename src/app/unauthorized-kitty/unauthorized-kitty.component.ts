import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-unauthorized-kitty',
  templateUrl: './unauthorized-kitty.component.html',
  styleUrls: ['./unauthorized-kitty.component.sass']
})
export class UnauthorizedKittyComponent implements OnInit {

  storeShelvesMax: number[] = [-50, 50];
  insideStoreElement: HTMLElement;

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    //console.log(this.insideStoreElement);
    //this.insideStoreElement.setAttribute('x')
  }

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit(): void {
    this.insideStoreElement = document.getElementById('InsideStore');
  }

}
