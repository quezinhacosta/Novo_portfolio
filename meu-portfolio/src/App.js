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
            <h2>Eu sou <br></br>
            Quezia Costa</h2>
          </div>

          <div className="home-image">
            <img
              src="/imagens/MINHAFOTO.png"
              alt="Ilustração de Quezia"
            />
          </div>
      </section>

      <section id="sobre" className="section sobre">
          <div className="sobre-container">
            <div className="sobre-esquerda">
              <h2>Sobre Mim</h2>
              <img
                src="/imagens/foto-minha.jpg"
                className="profile-img"
              />
            </div>
            <div className="sobre-direita">
              <ul className="sobre-lista">
                <li>Cientista da Computação em formação | previsão de formação para 2027.2</li>
                <li>Estudante de Iniciação Científica</li>
                <li>Ex-monitora de Cálculo 1</li>
                <li>Desenvolvedora Web</li>
                <li>Palestrante</li>
                <li>Entusiasta em Ciência de Dados</li>
              </ul>
            </div>
          </div>
        </section>

      <section id="experiencias" className="section experiencias">

        <h2>Experiências e Formação</h2>

        <div className="cards-container">

          <div className="card">
            <h3>Iniciação Científica - Bolsista</h3>
            <p>
              Pesquisa voltada para desenvolvimento de softwares de auxilio
              para crianças com dislexia utilizando inteligência artificial.
              O PIBIC conta a leitura e estudo de periodicos, estudo cientifico, produção de artigo de revisão, 
            </p>
          </div>

          <div className="card">
            <h3>Projeto voluntário</h3>
            <p>
              Organizar o site oficial da igreja batista central do Carpina. O site contou com HTML, CSS, JS e responsividade.
            </p>
          </div>

          <div className='card'>
            <h3>Estrutura de cados</h3>
            <p>Projeto em C para reforçar manipulação de arquivos e dados acadêmicos.</p>
          </div>

          <div className='card'>
            <h3>Layout da página inicial do Google</h3>
            <p>Layout desenvolvido para fins educacionais na semana da computação.</p>
          </div>

          <div className='card'>
            <h3>Palestra na semana da computação na UNICAP</h3>

          </div>

          <div className='card'> 
            <h3> Palestra para a comunidade Front-end do Recife</h3>

          </div>

          <div className='card'>
            <h3>Python/Excel</h3>
            <p>Aplicação que utiliza Python para análises de palavras originais e derivadas a partir de comparações.</p>
          </div>

          <div className='card'>
            <h3>Stonks Viewer</h3>
            <p>Aplicação web que utiliza Python e React para fornecer análises de ações baseadas em dados históricos e aprendizado de máquina.</p>
          </div>

          <div className='card'>
            <h3>Labirinto dos Mistérios</h3>
            <p>Jogo feito completamente em Java.</p>
          </div>

          <div className='card'>
            <h3>Projetos extensionistas</h3>

          </div>

          <div className='card'>
            <h3>Padawan</h3>

          </div>

          <div className='card'>
            <h3>Hackaton UNICAP</h3>

          </div>

          <div className='card'>
            <h3>Cursos extras</h3>
          </div>

          <div className='card'>
            <h3>BootCamp Magnus NOW!</h3>
          </div>

          <div className='card'>
            <h3>Monitoria de Cálculo 1</h3>
          </div>

        </div>

      </section>


      <section id="projetos" className="section projetos">

        <h2>Projetos</h2>

        <div className="cards-container">
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