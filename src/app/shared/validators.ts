import { ValidatorFn, AbstractControl } from '@angular/forms';

export class CommonValidators {
    static rangeValidator(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: any } | null => {
            if (isNaN(c.value) || c.value < min || c.value > max) {
                return { 'range': 'The value is not in the permitted range' };
            }
            return null;
        };
    }
}
