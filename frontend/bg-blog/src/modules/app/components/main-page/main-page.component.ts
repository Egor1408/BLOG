import { Component } from '@angular/core';
import { RightMenuComponent } from '../../../elements/components/menu/right-menu/right-menu.component';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "../../../elements/components/home-page/home-page.component";
import { PostsComponent } from '../../../elements/components/posts/posts.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, RightMenuComponent, HomePageComponent, PostsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
