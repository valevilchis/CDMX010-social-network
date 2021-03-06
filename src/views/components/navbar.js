const navBar = {
    render: async () => {
        const links = ['Login', 'Registro','Informacion', 'Prueba'];
        const navLinks = links
        .map(
            link => `
                <li class='nav-item'><a class="nav-link" href="/#/${link.toLowerCase()}">${link}</a></li>
            `
        )
        .join('\n');
        return `
            <nav class="navbar navbar-expand-md navbar-light ">
                <a class="navbar-brand" href="/#">
                    <img src="../../assets/img/logo.png" width="60" height="60" alt="Simbolo">
                    Yits´atil
                </a>
                <ul class="navbar-nav">
                    ${navLinks}
                </ul>
            </nav>
        `;
    },
    after_render: async() => {}
};
export default navBar;