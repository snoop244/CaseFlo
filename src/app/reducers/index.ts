import { ActionReducerMap} from '@ngrx/store';
import {ApplicationState} from '../store/application-state';
import {storeData} from './storeDataReducer';
import {uiState} from './uiStateReducer';


// see: registering reducers: https://github.com/ngrx/platform/blob/master/MIGRATION.md#registering-reducers
export const reducers: ActionReducerMap<ApplicationState> = {
  storeData,
  uiState
};
