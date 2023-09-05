const BASE_URL =
  "https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/products";

export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${BASE_URL}${url}`;
    const response = await fetch(fullUrl, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (e) {
    alert(e.message);
  }
};
