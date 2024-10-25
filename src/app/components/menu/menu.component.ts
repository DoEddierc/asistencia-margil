import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class MenuComponent  implements OnInit {

  @Input() titulo?:string;

  constructor() { }

  ngOnInit() {}

}
