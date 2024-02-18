import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState',
  [
    state('default', style({
      border: '2px solid #B2B6FF'
    })),
    state('highlighted', style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(90%)',
      transform: 'scale(1.02)'
    })),
    transition('default <=> highlighted', [animate(200)])
  ]
);

export const shownStateTrigger = trigger('shownState',
  [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(400, style({ opacity: 1 }))
    ]),
    transition(':leave', [animate(400, style({ opacity: 0 }))])
  ]
);
