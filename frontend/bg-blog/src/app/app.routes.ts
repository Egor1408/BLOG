import { Routes } from '@angular/router';
import { HomePageComponent } from '../modules/elements/components/home-page/home-page.component';
import { PostsComponent } from '../modules/elements/components/posts/posts.component';
import { LibraryComponent } from '../modules/library/components/library/library.component';
import { AboutUsComponent } from '../modules/elements/components/about-us/about-us.component';

export const routes: Routes = [
	{ path: 'home-page-component', component: HomePageComponent },
	{ path: 'posts-component', component: PostsComponent },
	{ path: 'library-component', component: LibraryComponent },
	{ path: 'about-us-component', component: AboutUsComponent },
];
