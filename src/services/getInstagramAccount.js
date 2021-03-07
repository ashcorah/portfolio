import axios from "axios";

const token =
  "IGQVJYcWRIRVJjM1Q3dDU4OTY4LThJbWlvYlNsNTNyaHc5dXIzNmdaVEtzNDhFTGk5RVlUdmVDTVZAET2k2di11d0w5X1ZAaS0x1MUJmaXUxcTliV1BfbjloLW9pNHV0ZAUJFS2VxZAmlSQ0FVaG1ldGVxcQZDZDv";

async function getInstagramAccount(fields) {
  const { data } = await axios.get(
    `https://graph.instagram.com/me/media?fields=${fields}&access_token=id,username&access_token=${token}`
  );
  return data.data;
}

export default getInstagramAccount;
