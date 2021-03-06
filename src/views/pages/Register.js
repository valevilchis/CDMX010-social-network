const Register = {
    render: async () => {
      return  `
      <div class="registro">

        <div class="logo">
            <img src="../../assets/img/huichol.png" alt="" width="310" height="55">
            <h1>Tévi</h1>
            <h2>Social Cultura MX</h2>
        </div>

        <div class="formulario-registro">
          <input type="text" placeholder="Nombre(s)" required><br>
          <input type="text" placeholder="Apellido" required><br>
          <input type="email" placeholder="E-mail" required><br>
          <input type="password" placeholder="Contraseña" required><br>
          <input type="password" placeholder="Confirmar Contraseña" required> <br>
          <button class="btn-registro"><a href="/#">Registrarse</a></button>
        </div>

    </div>
      `;
    },
    after_render: async () => {}
  };
  export default Register;