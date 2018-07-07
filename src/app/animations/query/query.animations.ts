import { trigger, style, state, transition, animate, group, keyframes } from '@angular/animations';

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
            animate('900ms', keyframes([
                style({
                    color: 'red',
                    offset: 0.2
                }),
                style({
                    color: 'blue',
                    offset: 0.8
                }),
                style({
                    color: 'black',
                    offset: 1
                })
            ]))
        ])
    ])
]);
