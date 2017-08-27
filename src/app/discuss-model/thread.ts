export interface Thread {
  id: number;
  messageIds: number[];
  planItemAssociation: string; // associate the thread with a case or case plan item - used to filter threads based on selected plan item.
  participants: {[key: number]: number}; // participant id as key and number of unread messages

}
