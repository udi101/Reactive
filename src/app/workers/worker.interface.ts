export interface IWorker {
    firstName: string;
    lastName: string;
    age?: number;
    salary?: number;
    email?: string;
    birthDate?: Date;
    address?: {
        country: string;
        city: string;
        street: string;
        building: number;
    };
}
