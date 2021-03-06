const Register = {
    render: async () => {
      return  `
      <div class="container p-4">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">

                <form id="post-form">
          
                  <div class="form-group">
                    <textarea id="post-description" rows="3" class="form-control" placeholder="¿Qué estas pensando?"></textarea>
                  </div>
                  <button class="btn btn-primary" id="btn-save-post">
                    Publicar
                  </button>
                </form>

              </div>
            </div>
          </div>

          <div class="col-md-6" id="post-container">

          </div>
        </div>
      </div>
      `;
    },
    after_render: async () => {}
  };
  export default Register;