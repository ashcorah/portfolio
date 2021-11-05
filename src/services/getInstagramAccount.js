import axios from "axios";

const token =
  process.env.INSTAGRAM_TOKEN;

async function getInstagramAccount(fields) {
  console.log("refetching");
  const { data } = await axios.get(
    `https://graph.instagram.com/me/media?fields=${fields}&access_token=id,username&access_token=${token}`
  );
  return data.data;
}

export default getInstagramAccount;
