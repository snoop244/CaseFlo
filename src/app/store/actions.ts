
import {Action} from "@ngrx/store";
import {AllParticipantDiscussData} from "../discuss-model/discuss-dto";

export const LOAD_PARTICIPANT_THREADS_ACTION = 'LOAD_PARTICIPANT_THREADS_ACTION';

export class LoadParticipantThreadsAction implements Action {

  type= 'LOAD_PARTICIPANT_THREADS_ACTION';  // FIXME note that I had to remove "readonly" ahead of "type" to remove an error in reducer

  constructor(public payload?: AllParticipantDiscussData) {}
}
