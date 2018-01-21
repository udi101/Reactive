import { StudentListComponent } from './student-list.component';
import { IStudent } from './../interfaces/student.interface';
import { Observable } from 'rxjs/Observable';

describe('student-list.component', () => {
    let studentListComponent: StudentListComponent;
    let mockSchoolService;
    beforeEach(() => {
        mockSchoolService = jasmine.createSpyObj('mockSchoolService', ['getStudents']);
        studentListComponent = new StudentListComponent(mockSchoolService);
    });

    fit('should create a component', () => {
        expect(studentListComponent).toBeTruthy();
    });

    fit('Should call the service on the initialization', () => {
        mockSchoolService.getStudents.and.returnValue(<Array<IStudent>>{});
        mockSchoolService.ttr = Observable.of(false);
        studentListComponent.ngOnInit();
        expect(mockSchoolService.getStudents).toHaveBeenCalled();
    });
});
