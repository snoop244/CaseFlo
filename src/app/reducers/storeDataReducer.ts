
import {INITIAL_STORE_DATA, StoreData} from '../store/store-data';
import {Action} from '@ngrx/store';
import {LOAD_PARTICIPANT_THREADS_ACTION, LoadParticipantThreadsAction} from '../store/actions';
import * as _ from 'lodash';


export function storeData(state: StoreData = INITIAL_STORE_DATA, action: Action): StoreData {

  switch (action.type) {
    case LOAD_PARTICIPANT_THREADS_ACTION:
      return handleLoadParticipantThreadsAction(state, action);

    default:
      return state;
  }
}


// REFERENCE: this is tough. See this lesson:
// https://angular-university.io/lesson/angular-ngrx-writing-our-first-reducer-function-step-by-step
// and for a summary of the whole thing:
// https://angular-university.io/lesson/angular-ngrx-summary-of-how-a-store%2C-actions-and-reducers-work
function handleLoadParticipantThreadsAction(state: StoreData, action: LoadParticipantThreadsAction): StoreData {
  return {
    discussionParticipants: _.keyBy(action.payload.participants, 'id'), // keyBy because we need a map, not an array here.
    discussionMessages: _.keyBy(action.payload.messages, 'id'),
    discussionThreadsPerParticipant: _.keyBy(action.payload.threads, 'id')

  };
}
