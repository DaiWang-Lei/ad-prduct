const getUrlParam = (name: string) => {
  const query = window.location.search.substring(1);
  const paramArr = query.split("&");
  for (let index = 0; index < paramArr.length; index++) {
    const pair = paramArr[index].split("=");
    if (pair[0] === name) {
      return pair[1];
    }
  }
  return false;
};

export default {
  getUrlParam,
};
