import { Component } from '@angular/core';
import { RightMenuComponent } from '../../../elements/components/menu/right-menu/right-menu.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RightMenuComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
