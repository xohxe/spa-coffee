const API_END_POINT =
  "https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev";
// local 에서는 https://cors-anywhere.herokuapp.com/ 추가

export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${API_END_POINT}/${url}`;
    const response = await fetch(fullUrl, options);
    //response.setHeader("Access-Control-Allow-Origin", "*");
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (e) {
    alert(e.message);
  }
};
