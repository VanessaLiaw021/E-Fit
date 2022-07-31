//Import required packages
import decode from 'jwt-decode';

//Class AuthService
class AuthService {

  //Get the user profile 
  getProfile() { return decode(this.getToken()) };

  //Function that see if user logged in 
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  //Function that see if token is expired 
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
          return true;
      } else {
          return false;
      };
    } catch (err) {
      return false;
    };
  };

  //Function that get the token 
  getToken() { return localStorage.getItem('id_token') };

  //Function that logged in user
  login(idToken) {

    //Save user token to local storage
    localStorage.setItem('id_token', idToken);

    //Reload the page to
    window.location.assign('/');
  };

  //Function that logout user 
  logout() {

    //Clear user token 
    localStorage.removeItem('id_token');

    //Reload the page and reset the state of application
    window.location.assign('/');
  };
};

//Export AuthService
export default new AuthService();