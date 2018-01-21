import { PostsComponent } from './posts.component';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';



fdescribe('checking posts', () => {
    let component;
    let mockPostService;
    let mockActivatedRoute;
    beforeEach(() => {
        mockPostService = jasmine.createSpyObj('mockPostService', ['getPosts']);
        mockActivatedRoute = jasmine.createSpyObj('mockPostService', ['']);
        component = new PostsComponent(mockPostService, mockActivatedRoute);
    });

    fit('component to be truth', () => {
        expect(component).toBeTruthy();
    });

    fit('Get data from service', () => {
        mockPostService.getPosts.and.returnValue(Observable.of(false));
        mockActivatedRoute.data = Observable.of('false');
        component.ngOnInit();
        expect(mockPostService.getPosts).toHaveBeenCalled();
    });
});


