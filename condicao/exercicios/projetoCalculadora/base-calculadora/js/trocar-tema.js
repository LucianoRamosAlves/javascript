

export default function trocar() {
    const main = document.querySelector("main");
    const root = document.querySelector(":root");
    if (main.dataset.theme === "dark") { //! tenho o main, depedencia
      //* peguei esse root la em cima
      root.style.setProperty("--bg-color", "#f1f5f9") //* setProperty é pra eu acessar uma propiedade
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a") //! tenho o root, depedencia
      main.dataset.theme = "light"
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      main.dataset.theme = "dark"
    }
  }

  //! preciso configurar, preciso pega as cores e o main, tenho dependentes