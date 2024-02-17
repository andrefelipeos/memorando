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
