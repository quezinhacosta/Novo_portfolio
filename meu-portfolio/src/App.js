import './App.css';

function App() {
  return (
    <div className="portfolio-container">

      <nav className="navbar">
        <div className="logo">QC</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#experiencias">Experiências</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
          <li className="icon-link">
            <a href="/jogo-forca">
              <img src="/imagens/pedestrian-man.png" alt="Ir para jogo" className="nav-icon"/>
            </a>
          </li>
        </ul>
      </nav>

      <section id="home" className="home">
          <div className="home-text">
            <h1>Oi!</h1>
            <h2>Eu sou Quezia Costa</h2>
          </div>

          <div className="home-image">
            <img
              src="/imagens/MINHAFOTO.png"
              alt="Ilustração de Quezia"
            />
          </div>
      </section>

      <section id="sobre" className="section sobre">

        <h2>Sobre Mim</h2>

        <img src="" alt="Foto perfil" className="profile-img"/>

        <ul className="sobre-lista">
          <li>Cientista da Computação em formação | previsão de formação para 2027.2</li>
          <li>Estudante de Iniciação Científica</li>
          <li>Ex-monitora de Cálculo 1</li>
          <li>Desenvolvedora Web nas horas vagas</li>
          <li>Palestrante</li>
          <li>Entusiasta em Ciência de Dados</li>
        </ul>

      </section>

      <section id="experiencias" className="section experiencias">

        <h2>Experiências e Formação</h2>

        <div className="cards-container">

          <div className="card">
            <h3>Iniciação Científica</h3>
            <p>
              Pesquisa voltada para desenvolvimento de soluções tecnológicas
              para pessoas com dislexia utilizando inteligência artificial.
            </p>
          </div>

          <div className="card">
            <h3>Desenvolvimento Web</h3>
            <p>
              Desenvolvimento de aplicações web utilizando HTML, CSS,
              JavaScript e React.
            </p>
          </div>

        </div>

      </section>


      <section id="projetos" className="section projetos">

        <h2>Projetos</h2>

        <div className="cards-container">

          {/* Projeto 1 */}
          <div className="card projeto-card">

            <img
              src=""
              alt="Imagem do projeto"
              className="projeto-img"
            />

            <h3>Padawan ON</h3>

            <p>
              Aplicação web criada para auxiliar na organização
              e automatização de processos dentro do projeto Padawan.
            </p>

            <p className="tecnologias">
              Tecnologias: React, JavaScript, HTML, CSS
            </p>

            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="projeto-link"
            >
              Ver Projeto
            </a>

          </div>

          <div className="card projeto-card">
            <img
              src=""
              alt="Imagem do projeto"
              className="projeto-img"
            />
            <h3>Pig Me Up</h3>
            <p>
              Aplicação de controle financeiro pessoal para
              organização de gastos, metas e investimentos.
            </p>
            <p className="tecnologias">
              Tecnologias: Java, Mobile
            </p>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="projeto-link"
            >
              Ver Projeto
            </a>
          </div>

        </div>

      </section>


      <section id="contato" className="section contato">
        <h2>Entre em contato</h2>
        <div className="social-links">
          <a
            href="https://github.com/quezinhacosta"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:quezbea@email.com">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/quezia-costa-5195342b3/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </section>

      <footer>
        <p>© 2026 Desenvolvido por Quezia Costa</p>
      </footer>

    </div>
  );
}

export default App;