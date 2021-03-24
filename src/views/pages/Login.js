// import {authGoogle,authFacebook} from '../../lib/authSociales.js';

const Login = {
    render: async () => {
      return `
      <div class="login">

        <div class="logo">
          <img src="../../assets/img/huichol.png" alt="" width="310" height="55">
          <h1>Tévi</h1>
          <h2>Social Cultura MX</h2>
        </div>

        <form class="usuario-pass" id="login-usr-pass">
          <input type="text" id="login-email" placeholder="Email"> <br>
          <input type="password" id="login-pass" placeholder="Contraseña"> <br> 
          <button type="submit" class="btn-inicio-ses">Iniciar Sesión</button> <br>
          <p> o iniciar con: </p>
        </form>

        <div class="sociales">
          <button class="btn-google" id="bt-goog"><a href="">Google</a></button> <br>
          <button class="btn-fb" id="bt-face"><a href="">Facebook</a></button> <br>
          <button class="btn-git"><a href="">Github</a></button> <br>
        </div>

      </div>
      `;
    },
    after_render: async () => {}
  };
  export default Login;
  