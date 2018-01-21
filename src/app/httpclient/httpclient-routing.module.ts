import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '', children: [
                { path: 'posts', component: PostsComponent, data: { name: 'udi' } }
            ]
        }])
    ],
    exports: [
    ],
    declarations: []
})
export class HttpclientRoutingModule {

}
