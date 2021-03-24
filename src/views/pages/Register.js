const Register = {
    render: async () => {
      return  `
      <div class="registro">

        <div class="logo">
            <img src="../../assets/img/huichol.png" alt="" width="310" height="55">
            <h1><a href="/">Tévi</a></h1>
            <h2>Social Cultura MX</h2>
        </div>

        <form class="formulario-registro" id="form-user-pass">
          <input type="text" id="regist-email" placeholder="E-mail" required><br>
          <input type="password" id="regist-pass" placeholder="Contraseña" required><br>
          <button type="submit" class="btn-registro">Registrarse</button>
        </form>

    </div>
      `;
    },
    after_render: async () => {}
  };
  export default Register;