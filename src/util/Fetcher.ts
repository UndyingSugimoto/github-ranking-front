const wrap = <T>(task: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    task
      .then(response => {
        console.log("response");
        if (response.ok) {
          console.log("ok");
          console.log(response);
          response
            .json()
            .then(json => {
              // jsonが取得できた場合だけresolve
              resolve(json);
            })
            .catch(error => {
              reject(error);
            });
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

const fetcher = <T = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  return wrap<T>(fetch(input, init));
};

export default fetcher;
