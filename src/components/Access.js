import React from 'react';

const authUrl = `https://wpreact.mindsharedevelopment.com?oauth=token`;

const base64ClientId = 'YWlGQWJKQVhXQkxwWEdSNHdVaGtxc0NuZURIaE13N1hPTXhadzdYczpKSVNHb0pLVkQyZzR1U3NKdzkwakY3Z3RVTnRxVnFURThMbHh1NnQ4';

const params = {
  'client_id': 'aiFAbJAXWBLpXGR4wUhkqsCneDHhMw7XOMxZw7Xs', // for testing
  'client_secret': 'JISGoJKVD2g4uSsJw90jF7gtUNtqVqTE8Llxu6t8', // for testing
  'grant_type': 'password',
  'username': 'authtest',
  'password': 'password'
}

const credentialParams = Object.keys(params).map((key) => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
}).join('&');

export const Access = () => {

  function validateResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  function fetchJSON() {
    fetch(authUrl, {
      method: 'POST',
      headers: {
        "Authorization": `Basic ${base64ClientId}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      body: credentialParams
    })
      .then(response => validateResponse(response))
      .then(res => res.json())
      .then(data => console.log("Your Access Token sir: ", data.access_token))
      .catch(err => console.log("Error: ", err));
  }


  return (
    <div>
    {console.log(fetchJSON())}
      <h2>Login!!!</h2>
    </div>

  )

}
