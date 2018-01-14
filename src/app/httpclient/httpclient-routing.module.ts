import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '', children: [
                { path: 'posts', component: PostsComponent }
            ]
        }])
    ],
    exports: [
    ],
    declarations: []
})
export class HttpclientRoutingModule {

}

// import { NgModule } from '@angular/core';

// import { NameComponent } from './name.component';

// @NgModule({
//     imports: [],
//     exports: [],
//     declarations: [NameComponent],
//     providers: [],
// })
// export class NameModule { }
