import axios, { AxiosHeaders } from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID cdBIRrKF7ipw_w51xsZjOOG-K5N97HT5OS_LFMjJVLw",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
