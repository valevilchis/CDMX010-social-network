const Error404 = {
    render: async () => {
      return `
        <section>
          <h1 class="text-center">Error 404. Pagina no encontrada.</h1>
        </section>
      `;
    },
    after_render: async () => {}
  };
  export default Error404;
  