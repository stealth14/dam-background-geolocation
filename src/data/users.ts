import { db, auth } from "../data/data";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

export const register = async (user: User, password: string) => {
  const ref = db.collection("users").doc();

  const data = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    id: ref.id,
  };

  await auth.createUserWithEmailAndPassword(data.email, password);

  await ref.set(data);
};

export const login = async (user: User, password: string) => {
  try {
    const result = await auth.signInWithEmailAndPassword(user.email, password);
    return result.user;
  } catch (error) {
    console.log(error);

    return false;
  }
};
