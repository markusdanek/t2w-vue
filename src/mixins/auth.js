const auth0 = new Auth0({
  domain: 'mrks.eu.auth0.com',
  clientID: 'fjIMo36jLsTc4rYl6BOCIizBDK62hTZY',
  responseType: 'token',
  callbackURL: window.location.origin + '/#/'
})


let login = (username, password) => {
  auth0.login({
    connection: 'Username-Password-Authentication',
    responseType: 'token',
    email: username,
    password: password,
    scope: 'openid email'
  },
  function(err){
    if(err) {
      console.log(err);
      alert('Eror loging in')
    }
  })
}

let logout = () => {
  localStorage.removeItem('id_token');
  localStorage.removeItem('profile');
}

let checkAuth = () =>{
  if (localStorage.getItem('id_token')) {
    return true;
  } else {
    return false;
  }
}

let requireAuth = (to, from, next) => {
  if (!checkAuth()) {
    console.log('Auth failed');
    let path = 'login';
    let result = auth0.parseHash(window.location.hash);
    if (result && result.idToken) {
      localStorage.setItem('id_token', result.idToken);

      // redirect to home page
      path = 'impress';

      // get user profile data
      auth0.getUserInfo(result.idToken, function(err, profile) {
        if (err) {
          alert(err);
        }
        let user = JSON.stringify(profile);
        console.log(profile);
        localStorage.setItem('profile', user);
      });
    }
    next({
      path: path
    })
  } else {
    next()
  }
}


export default {
  checkAuth,
  login,
  logout,
  requireAuth
}
