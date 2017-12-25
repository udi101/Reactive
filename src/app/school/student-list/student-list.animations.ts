import { trigger, state, style, animate, transition } from '@angular/animations';


export const divClick = trigger('divClick', [
    state('0', style({ color: 'red', backgroundColor: '#f0f0f0' })),
    state('1', style({ color: 'black', marginTop: '10px', backgroundColor: '#ffffff' })),
    transition('void => 1', [
        style({ height: '0px' }),
        animate('300ms ease-out')]),
    transition('1 => void', [
        animate('300ms ease-out', style({ height: '0px', marginTop: '0' }))])
]);
