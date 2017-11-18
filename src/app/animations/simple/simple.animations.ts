
import { trigger, state, animate, style, transition } from '@angular/animations';
export const clickerTrigger = trigger('clicker', [
    state('default', style({
        backgroundColor: '#3060f0'

    })),
    state('clicked', style({
        backgroundColor: 'orange',
        transform: 'translateX(300px) rotate(90deg)',
        height: '50px'
    })),
    transition('default <=> clicked', animate('300ms  ease-out'))
]);

export const numberEnteredStateTrigger =
    trigger('numberEnteredState', [
        state('unSelected', style({
            border: '1px solid black',
            fontWeight: 'normal',
            backgroundColor: 'white',
            padding: '6px',
            boxShadow: '2px 2px 4px',
            transform: 'scale(1)'
        })),
        state('selected', style({
            border: '2px solid black',
            padding: '6px',
            backgroundColor: '#2050a0',
            fontWeight: 'bold',
            color: 'white',
            transform: 'rotate(15deg) scale(1)'
        })),
        transition('unSelected => selected', [
            animate('200ms', style({ backgroundColor: 'yellow', transform: 'scale(1.2)' })),
            animate('500ms ease-out')
        ]),
        transition('selected => unSelected', [
            animate('200ms linear')
        ])
    ])