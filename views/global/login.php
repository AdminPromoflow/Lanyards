<section id="login" class="login">
  <div id="containerLogin"  class="containerLogin">
    <div class="headLogin">
      <div class="headLoginContaner">
          <h1>Login</h1>
      </div>
      <img id="closeLogin" src="../assets/img/global/login/close.png" alt="">
    </div>
    <div class="bodyLogin">
      <label for="emailLogin">Please enter your login details:</label>
      <input id="emailLogin" type="text" name="" value="" placeholder="Please provide your email">
      <input id="passwordLogin" type="password" name="" value="" placeholder="and your password">
      <button id="loginButton" type="button" name="button"><strong class="fontWeightButtonLogin">Login</strong></button>
    </div>
    <div class="footerLogin">
      <h3>or login with:</h3>
      <div class="footerLoginOptionsContainer">
        <div id="loginWithGoogle1" class="footerLoginOptions">
          <img src="../../views/assets/img/global/login/google-icon.png" alt="">
        </div>
        <!-- The JS SDK Login Button -->

      <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
      </fb:login-button>

      <div id="status">
      </div>

      <!-- Load the JS SDK asynchronously -->
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
        <div id="loginWithFacebook1" class="footerLoginOptions">
          <img src="../../views/assets/img/global/login/facebook-icon.png" alt="">
        </div>
        <div id="loginWithApple1" class="footerLoginOptions">
          <img src="../../views/assets/img/global/login/apple-icon.png" alt="">
        </div>
      </div>
      <h4 id="openRegisterFromLogin">No account yet? Register here.</h4>
    </div>
  </div>
</section>
<script>

  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }


  function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '615665997605768',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v6.0'           // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };

  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

</script>
