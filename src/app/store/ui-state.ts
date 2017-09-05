
import {isUndefined} from "util";

export interface UiState { // TODO do we need a UIState for Do, Discuss, Delegate?

  userId: number; // TODO Is user different than participant?  I think so.
  currentDiscussThreadId: number;

}

export const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  currentDiscussThreadId: undefined
};
