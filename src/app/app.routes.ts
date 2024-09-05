import { Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditpostComponent } from './editpost/editpost.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'createpost',
        component: CreatepostComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component:ContactComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'editpost/:id',
        component:EditpostComponent
    },
    {
        path:'blogpost/:id',
        component:BlogpostComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
