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
  const users = req[0];
  const messages = req[1];

  //Using a different avatar, hope you don't mind... =)
  const json = messages.map(m => {
    const user = users.find(u => u.id === m.userId);
    return {
      messageId: m.id,
      userId: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      timestamp: m.timestamp,
      email: user.email,
      message: m.message,
      //avatar: user.avatar
      avatar: `https://i.pravatar.cc/150?u=${user.id}`
    };
  });

  const sortedJson = json.sort((a, b) => {
    const aa = new Date(a.timestamp).valueOf();
    const bb = new Date(b.timestamp).valueOf();
    return bb - aa;
  });

  return sortedJson;
};
