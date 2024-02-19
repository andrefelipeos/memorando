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
      animate(200, style({ opacity: 1 }))
    ]),
    transition(':leave', [animate(200, style({ opacity: 0 }))])
  ]
);

export const lastToUpdateStatusTrigger = trigger('lastUpdatedState',
  [
    transition('* => lastUpdated', [
      animate(200, style({ transform: 'scale(0.6)' }))
    ])
  ]
);

export const filterAnimationTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate('400ms ease-out', style({ opacity: 1, width: '*' }))
  ]),
  transition(':leave', [
    animate('400ms ease-out', style({ opacity: 0, width: 0 }))
  ])
]);
