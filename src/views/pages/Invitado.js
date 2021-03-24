const Register = {
    render: async () => {
      return  `
      <div class="container p-4">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Tévi</a>
          <button class="btn btn-primary center" id="btn-save-post">Ver Publicaciones</button>
        </nav>
        <div class="row">
          <div class="col-md-6">
            <div class="card p-4">
              <div class="card-body">

                <form id="post-form">
                  <div class="card border-info mb-3" style="max-width: 20rem;" id="post-container">
                  </div>
                  <!-- <div class="col-md-6" id="post-container"></div> -->
                </form>

              </div>
            </div>
          </div>
          </div>
        </div>
      `;
    },
    after_render: async () => {}
  };
  export default Register;