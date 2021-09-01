import Service, { inject as service } from '@ember/service';


export default class Request extends Service{


  /**
   * Dan : I usually run all async requests through a common funcion when I can. 
   *       That way I can have a universal handler for 401 codes and whatnot if I need it
   */
  fetch(url, options = {}) {

    return new Promise((resolve, reject) => {

      // const defaultOptions = {
      //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //   mode: 'cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: 'same-origin', // include, *same-origin, omit
      //   headers: {
      //     'Content-Type': 'application/json'
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   redirect: 'follow', // manual, *follow, error
      //   referrerPolicy: 'no-referrer'
      // }

      // const allFetchOptions = {
      //   ...options,
      //   ...defaultOptions
      // }

      resolve();
  
      // fetch(url, options).then(....
    });
  }
}
      