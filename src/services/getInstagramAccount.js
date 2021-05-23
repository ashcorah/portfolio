import axios from "axios";

const token =
  "IGQVJVZAjFYUXl4bkQ1cU5qWmpuN3JxNFFOSVowYVNRWnh0Vm04UzRDeTdSel9mQzdIM3JiblJHUElHQXg1SDRWektzQ1YwRkw4ZA0lYM1ZAXRUQxWURIQnFNT0ZAUbG16MndZAVHZAkdmpheFZAJZAVExRXk4RAZDZD";

async function getInstagramAccount(fields) {
  console.log("refetching");
  const { data } = await axios.get(
    `https://graph.instagram.com/me/media?fields=${fields}&access_token=id,username&access_token=${token}`
  );
  return data.data;
}

export default getInstagramAccount;
