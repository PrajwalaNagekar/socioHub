import {chatURL} from "../axiosInstance";
console.log("Chat API URL:", chatURL);
export const getMessages = (conversationId: string) =>
  chatURL.get(`/display-message/${conversationId}`);