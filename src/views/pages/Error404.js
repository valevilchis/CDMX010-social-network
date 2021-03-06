const Error404 = {
    render: async () => {
      return `
      <div class="wrapper">
        <div class="container">
            <div class="section-error">
                <section>
                    <h1 class="error text-center">404</h1>
                    <span class="info">File not found</span>
                </section>
            </div>
        </div>
    </div>
      `;
    },
    after_render: async () => {}
  };
  export default Error404;
  