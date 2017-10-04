export interface IWorker {
    firstName: string;
    lastName: string;
    salary: number;
    email: string;
    birthDate: Date;
    address: {
        country: string;
        city: string;
        street: string;
        building: number;
    };
}
