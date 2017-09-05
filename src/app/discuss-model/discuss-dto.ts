/**
 * Data transfer object to get discuss model data in a single call
 */
import {Participant} from '../case-participant-model/participant';
import {Thread} from './thread';
import {Message} from './message';

export interface AllParticipantDiscussData { // TODO: create a single API call on the backend to grab this data

  participants: Participant[];
  threads: Thread[];
  messages: Message[];
}
