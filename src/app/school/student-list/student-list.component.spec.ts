import { StudentListComponent } from './student-list.component';
import { IStudent } from './../interfaces/student.interface';

describe('student-list.component', () => {
    let studentListComponent: StudentListComponent,
        mockSchoolService;
    beforeEach(() => {
        mockSchoolService = jasmine.createSpyObj('mockSchoolService', ['getStudents']);
        studentListComponent = new StudentListComponent(mockSchoolService);
    });

    fit('should create a component', () => {
        expect(studentListComponent).toBeTruthy();
    });

    fit('Should call the service on the initialization', () => {
        mockSchoolService.getStudents.and.returnValue(<Array<IStudent>>{});
        studentListComponent.ngOnInit();
        expect(mockSchoolService.getStudents).toHaveBeenCalled();
    });
});
