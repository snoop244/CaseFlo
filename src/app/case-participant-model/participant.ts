export interface Participant {
  id: number;
  firstName: string;
  lastName: string;
  discussionRole: string; // what role are they playing in the discussion FIXME participant should be generic, not discussion specific.
}
