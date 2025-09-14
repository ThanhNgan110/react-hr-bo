import axios from "axios";

export const httpRequest = axios.create({
  baseURL: 'https://tony-auth-express-vdee.vercel.app',
  timeout: 5000
})

export const initRequest = () => {
  httpRequest.interceptors.request.use(function (config) {
      console.log('request success: ', config)  

      const access_token = window.localStorage.getItem('access_token');
      if (access_token) {
        config.headers['x-auth-token'] = access_token
      }
      
      return config;
    }, function (error) {

      console.log('request fail: ', error)  
      return Promise.reject(error);
    },
  );

  httpRequest.interceptors.response.use(function onFulfilled(response) {
    console.log('response success: ', response)  
    return response.data;
  }, async function onRejected(error) {
    console.log('response faile: ', error)  

    // timeout
    if (error.code === "ECONNABORTED") {
      // do something to show popup
    }

    // access token + refresh token
    if (error?.response?.status === 401) {
      try {
        const bodyData = {
          "data": {
            "refresh_token": window.localStorage.getItem('refresh_token')
          }
        }
        const data = await httpRequest('/api/user/refresh-token', {
          method: 'POST',
          data: bodyData
        });
        const access_token = data.data.access_token;
        if (access_token) {
          window.localStorage.setItem('access_token', access_token);
          httpRequest.defaults.headers.common['x-auth-token'] = access_token;
          return httpRequest(error.config);
        }
        console.log("get user: ", data)
      } catch (err: any) {
        console.error('fail get user')
      }
    }

    // handle common error
    switch (error?.response?.status) {
      case 403: {
        // do something show page 403
        break;
      }
      case 404: {
        // do something 
        break;
      }
      case 503: {
        // do something
        break;
      }
      case 500: {
        // do something 
        break;
      }
      default:
        break;
    }

    return Promise.reject(error);
  });
}