import axios from "axios";

const token =
  "IGQVJVZAnU4WUxRMm9rYjZAVTVJvQmpueTRzM0NBYkU4RjJLcDdkQ28wZA1hkUnVWZAkZAPQ1pIN21nTVg2WDlPU051ZAXljb1hrR25rTWRzcUFXbkwtbVVwRmg3STdqMWVUS0JuN3o0WXlQaGRsVUxGeXk0dAZDZD";

async function getInstagramAccount(fields) {
  console.log("refetching");
  const { data } = await axios.get(
    `https://graph.instagram.com/me/media?fields=${fields}&access_token=id,username&access_token=${token}`
  );
  return data.data;
}

export default getInstagramAccount;
