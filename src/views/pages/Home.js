const Home = {
    render: async () => {
        return `
        <div class="home">

            <div class="logo">
                <img src="../../assets/img/huichol.png" alt="" width="310" height="55">
                <h1>Tévi</h1>
                <h2>Social Cultura MX</h2>
            </div>

            <div class="btn-access">
                <button class="btn-reg" ><a href="/#/registro"> Registro</a></button> <br>
                <button class="btn-inic"><a href="/#/login"> Inicia Sesión</a></button> <br>
                <div class="invitado">
                    <a href="/#/invitado" >Continuar como invitado</a>
                </div>
            </div>

        </div>
        `;
    },
    after_render: async () => {}
};
export default Home;