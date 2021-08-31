import Service, { inject as service } from '@ember/service';


export default class Request extends Service{


  fetch(url, options = {}) {

    return new Promise((resolve, reject) => {

      //Dan : defaults shamelessly stolen from docs - would make this more specific to peek service layer 
      const defaultOptions = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer'
      }

      const allFetchOptions = {
        ...options,
        ...defaultOptions
      }

      resolve();
  
      // fetch(url, options).then(
  
      //   (response) => {
      //     const statusCode = response.status;
      //     if(statusCode === 200){
      //       return resolve(expectJson ? response.json() : response.text());
      //     }
          
      //     else{
      //       reject(response);
      //     }
      //   },
  
      //   (xhr) => {
      
      //     reject(xhr);
      //   }
      // );
    });
  }
}
      