export const axios = {
  get(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            setTimeout(() => {
              resolve(JSON.parse(xhr.responseText));
            }, 2000);
          } else {
            reject(new Error(`请求失败，状态码 ${xhr.status}`));
          }
        }
      };
      xhr.send(null);
    });
  },
};
