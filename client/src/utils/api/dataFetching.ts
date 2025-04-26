import axios from "axios";

export async function fetchFeedBacks(id: number) {
  try {
    const data = await axios.get(`http://localhost/3000/feedback/${id}`, {});
    if (data.status === 200) {
      return data.data;
    } else {
      console.error(data.status, data.statusText);
      return data.statusText;
    }
  } catch (e) {
    console.error(e);
  }
}
