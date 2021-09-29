import { db } from "../data/data";
export interface Message {
  ownerId: string;
  fromName: string;
  subject: string;
  date: string;
  id: string;
  img: string;
}

export const getMessages = async () => {
  const ref = await db.collection("messages").get();

  let msges = Array<Message>();
  msges = ref.docs.map((d) => {
    return {
      fromName: d.data().text,
      subject: d.data().text,
      date: d.data().text,
      id: d.id,
      img: "https://via.placeholder.com/150",
    } as Message;
  });

  return msges;
};

export const getMessage = async (id: string) => {
  const ref = await db.collection("messages").doc(id).get();
  const data = {...ref.data()}
  const { ownerId, fromName, subject, date, id : messageId, img } = data as Message;

  return {
    ownerId,
    fromName,
    subject,
    date,
    id: messageId,
    img,
  } as Message;
};

export const postMessage = async (message: Message) => {
  
  const data = {
    ownerId: message.ownerId,
    fromName: message.fromName,
    subject: message.subject,
    date: message.date,
    id: message.id,
    img: message.img,
  };

  await db.collection("messages").doc().set(data);
};
