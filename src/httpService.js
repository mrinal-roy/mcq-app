import axios from "axios";

export const httpService = (method, url, param) => {
  return new Promise((resolve, reject) => {
    let token = "";

    const data = param;
    
        const headers = {
            // 'Authorization': "Bearer " + token,
            // "Content-Type": "application/json" 
            }
        if (method.toUpperCase() === "POST") {
          axios
            .post(url, data)
            .then(response => {
              return resolve(response);
            })
            .catch(error => {
              return reject(error);
            });
        } else if (method.toUpperCase() === "PUT") {
            axios
              .put(url,data,{headers})
              .then(response => {
                return resolve(response);
              })
              .catch(error => {
                return reject(error);
              });
          } else if (method.toUpperCase() === "GET") {
          axios
            .get(url, { headers: headers })
            .then(response => {
              //  console.warn(response);
              return resolve(response);
            })
            .catch(error => {
              return reject(error);
            });
        }
      
      // .catch(error => { });
  });
};
