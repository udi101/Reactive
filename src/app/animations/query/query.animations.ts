import { trigger, style, state, transition, animate, group } from '@angular/animations';

export const queryAnimation = trigger('shark', [
    state('first', style({
        left: 0
    })),
    state('last', style({
        left: '100px'
    })),
    transition('first <=> last', [
        animate('300ms 100ms ease-out')
    ])
]);

export const lstAnimation = trigger('lstAnimation', [
    transition('* => *', [
        style({ opacity: 0, width: 20, color: 'red' }),
        group([
            animate('700ms', style({ width: '*' })),
            animate('300ms', style({ opacity: 1 })),
            animate('900ms', style({ color: 'black' }))
        ])
    ])
]);
