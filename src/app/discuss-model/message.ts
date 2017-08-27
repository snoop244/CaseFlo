
export interface Message { // multi-channel message
  id: number;
  threadId: number; // thread will have a planItemAssociation, which ties it to a case or case plan item
  participantId: number;
  channel: string; // the type of message CHAT, SMS, EMAIL, PHONE
  messageBody: string;
  timeStamp: number;
}
