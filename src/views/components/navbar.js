const navBar = {
    render: async () => {
        const links = ['Inicio', 'Login', 'Registro'];

        const navLinks = links
        .map(
            link => `
                <li class='nav-item'><a class="nav-link" href="/#/${link.toLowerCase()}">${link}</a></li>
            `
        )
        .join('\n');
        return `
            <nav class="navbar navbar-expand-md navbar-light bg-white">
                <a class="navbar-brand" href="/#">
                    <img src="../../assets/img/quet.png" width="80" height="80" alt="Quetzalcoatl">
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