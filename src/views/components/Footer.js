const Footer = {
    render: async () => {
      return`
        <p class="text-center">México - Cultura - Aprendizaje</p>  
        <p class="text-center "><em id="time"></em></p>  
      `;
    },
    after_render: async () => {
      const time = document.querySelector('#time');
      const updateTime = () => {
        const newDate = new Date();
        const clock = newDate.toTimeString().slice(0, 8);
        const date = newDate.toLocaleDateString().slice(0, 8);
        time.innerHTML = `${clock} ${date}`;
      };
      updateTime();
      setInterval(updateTime, 1000);
    }
  };
  
  export default Footer;