import { getMessages, getMembers } from "./data";

// {
//   "messageId": "12356",
//   "userId": "613651251",
//   "fullName": "Robin Balmforth",
//   "timestamp": "2017-02-23T14:57:20.629Z",
//   "email": "robin@example.com",
//   "message": "Hello, World!",
//   "avatar": null
// },

export const getChatLog = async () => {
  const req = await Promise.all([getMembers(), getMessages()]);
  const res = await Promise.all(req.map(res => res));
  const users = res[0];
  const messages = res[1];

  const json = messages.map(m => {
    const user = users.find(u => u.id === m.userId);
    return {
      messageId: m.id,
      userId: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      timestamp: m.timestamp,
      email: user.email,
      message: m.message,
      avatar: user.avatar
    };
  });

  return json;
};
