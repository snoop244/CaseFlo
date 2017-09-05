
import {Participant} from '../case-participant-model/participant';
import {Thread} from '../discuss-model/thread';
import {Message} from '../discuss-model/message';

export interface StoreData {

  discussionParticipants: {[key: number]: Participant}; // TODO do we keep this separate from processParticipant?
  discussionThreadsPerParticipant: {[key: number]: Thread};
  discussionMessages: {[key: number]: Message};
}

export const INITIAL_STORE_DATA: StoreData = {
  discussionParticipants: {},
  discussionThreadsPerParticipant: {},
  discussionMessages: {}

}
