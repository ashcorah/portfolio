import axios from "axios";

let token = process.env.REACT_APP_IG_TOKEN;

async function refreshToken(token) {
  const { data } = await axios.get(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
  );

  return data.access_token;
}

async function getInstagramAccount(fields) {
  if (token) {
    token = await refreshToken(token);
  }

  const { data } = await axios.get(
    `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`
  );
  return data.data;
}

export default getInstagramAccount;
