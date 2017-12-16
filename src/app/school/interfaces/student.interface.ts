export interface IStudent {
    name: string;
    last: string;
    age: number;
    degrees?: Array<string>;
    address: {
        street: string;
        streetNumber: number;
    };
}
