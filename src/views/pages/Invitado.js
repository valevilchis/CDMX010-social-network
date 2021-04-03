const Register = {
    render: async () => {
      return  `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Tévi</a>
      </nav>
      <div class="container p-4">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form id="form-publicaciones">
                  <div class="form-group">
                    <textarea id="publicacion-descripcion" rows="3" class="form-control" placeholder="¿Qué nos quieres compartir?" autofocus></textarea>
                  </div>
                  <button class="btn btn-success" id="btn-publicar">Publicar</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6" id="container-publicaciones"></div>
        </div>
      </div>
      `;
    },
    after_render: async () => {}
  };
  export default Register;