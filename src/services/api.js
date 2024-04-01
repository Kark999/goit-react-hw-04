import axios from "axios";

export const params = {
  client_id: "35YdqMFUVYORJ1_Z6Ti-nFesei5CNrXoMt15-kOzhj8",
  url: "https://api.unsplash.com/photos/",
  orientation: "landscape",
  page: 1,
  per_page: 12,
};

export const requestPhotos = async () => {
  const { data } = await axios.get(params.url, { params });
  return data;
};
