const Page_User = {
    render: async () => {
      return  `
      <div class="container p-6">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <form id="form-post">
                  <div class="form-group">
                    <textarea 
                    id="description-post" 
                    rows="3" class="form-control" 
                    placeholder="¿Qué estas pensando.?">
                    </textarea>
                  </div>
                  <button class="btn btn-primary" id="btn-post"></button>
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
  export default Page_User;