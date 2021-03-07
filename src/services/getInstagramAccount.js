import axios from "axios";

const token =
  "IGQVJXb0RwblNHODIycDNqTmRsZAHh0NlVjbENBbEFYa0FrVWZA2Mm50ZA2xnZA3VvOWNNZAFZAnaGtZASTlQNWxydlEzc3dmMjR4ZAXRGMGFmeGZAnbVlrV2psSG9SZAVZAYb05qU0N0TE55S002c0hTRDNIMGJMdAZDZD";

async function getInstagramAccount(fields) {
  console.log("refetching");
  const { data } = await axios.get(
    `https://graph.instagram.com/me/media?fields=${fields}&access_token=id,username&access_token=${token}`
  );
  return data.data;
}

export default getInstagramAccount;
