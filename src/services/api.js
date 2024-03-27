import axios from "axios";

export const requestPhotos = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=35YdqMFUVYORJ1_Z6Ti-nFesei5CNrXoMt15-kOzhj8"
  );
  return data;
};
