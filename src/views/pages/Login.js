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

        <div class="usuario-pass">
          <input type="text" placeholder="Usuario"> <br>
          <input type="password" placeholder="Contraseña"> <br> 
          <button class="btn-inicio-ses"><a href="">Iniciar Sesión</a></button> <br>
          <p> o iniciar con: </p>
        </div>

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
  