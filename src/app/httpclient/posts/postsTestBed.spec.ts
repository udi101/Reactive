import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostsService } from './../posts.service';
import { Observable } from 'rxjs/Observable';

fdescribe('Check posts with testBed', () => {
    TestBed.configureTestingModule({
        declarations: [PostsComponent],
        providers: [PostsService]
    });
    fit('should work with async', fakeAsync(() => {
    const fixture = TestBed.createComponent(PostsComponent);
    const app = fixture.debugElement.componentInstance;
    const postService = fixture.debugElement.injector.get(PostsService);
    const spy = spyOn(postService, 'getPosts').and.returnValue(Observable.of(null));
    fixture.detectChanges();
    tick();
    expect(app.posts).toBe(null);
     }));
});

