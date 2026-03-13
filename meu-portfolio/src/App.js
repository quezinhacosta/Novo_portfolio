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

        <section id="experiencias" className="section-experiencias">

          <h2>
            Principais <br /> experiências
          </h2>

          <div className="carousel">

            <button
              className="nav left"
              onClick={() => {
                document.getElementById("cards").scrollLeft -= 300;
              }}
            >
              <img
                src="/imagens/icons/login.png"
                alt="Botão de navegação"
                className="imagem-botao"
              />
            </button>

            <div className="cards-container" id="cards">

              <div className="card">
                <h3>Iniciação Científica - Bolsista</h3>
                <br />
                <p>
                  Pesquisa voltada para desenvolvimento de softwares para o auxílio
                  de crianças com dislexia utilizando inteligência artificial.
                  O PIBIC conta com leitura e estudo de periódicos, estudo científico
                  e produção de artigo de revisão.
                </p>
              </div>

              <div className="card">
                <h3>Projeto voluntário</h3>
                <br />
                <p>
                  Organização do site oficial da Igreja Batista Central do Carpina.
                  O site contou com HTML, CSS, JavaScript e responsividade.
                </p>

                <a
                  href="https://quezinhacosta.github.io/IGREJA_BATISTA_CENTRAL/"
                  target="_blank"
                  rel="noreferrer"
                  className="projeto-link"
                >
                  Ver Projeto
                </a>
              </div>

              <div className="card">
                <h3>Estrutura de dados</h3>
                <br />
                <p>
                  Projeto em C para reforçar manipulação de arquivos e dados acadêmicos.
                </p>

                <a
                  href="https://github.com/quezinhacosta/Projeto/blob/main/proj_manipula%C3%A7%C3%A3o.cpp"
                  target="_blank"
                  rel="noreferrer"
                  className="projeto-link"
                >
                  Ver repositório
                </a>
              </div>

              <div className="card">
                <h3>Layout da página inicial do Google</h3>
                <br />
                <p>
                  Layout desenvolvido para fins educacionais na semana da computação.
                </p>

                <a
                  href="https://quezinhacosta.github.io/Semana-da-computa-o/"
                  target="_blank"
                  rel="noreferrer"
                  className="projeto-link"
                >
                  Ver projeto
                </a>
              </div>

              <div className="card">
                <h3>Palestra na Semana da Computação - UNICAP</h3>
                <br />

                <img
                  src="/imagens/palestra1.jpeg"
                  alt="Palestra na UNICAP"
                  className="projeto-img"
                />

                <p>
                  A palestra teve como objetivo abordar assuntos do universo de
                  front-end de forma introdutória, com apresentação de projetos reais,
                  explicação de código e exercício em tempo real.
                </p>
              </div>

              <div className="card">
                <h3>Palestra para a comunidade Front-end do Recife</h3>
                <br />

                <img
                  src="/imagens/palestra.jpeg"
                  alt="Palestra Front-end Recife"
                  className="projeto-img"
                />

                <p>
                  Palestra introdutória sobre desenvolvimento front-end com
                  apresentação de projetos, explicação de código e exercícios práticos.
                </p>
              </div>

              <div className="card">
                <h3>Python / Excel</h3>
                <br />

                <p>
                  Aplicação que utiliza Python para análises de palavras originais e
                  derivadas a partir de comparações.
                </p>

                <a
                  href="https://github.com/quezinhacosta/algoritmo-analisador-palavras"
                  target="_blank"
                  rel="noreferrer"
                  className="projeto-link"
                >
                  Ver repositório
                </a>
              </div>

              <div className="card">
                <h3>Stonks Viewer</h3>
                <br />

                <p>
                  Aplicação web que utiliza Python e React para fornecer análises de
                  ações baseadas em dados históricos e aprendizado de máquina.
                </p>

                <a
                  href="https://github.com/quezinhacosta/stonks-viewer"
                  target="_blank"
                  rel="noreferrer"
                  className="projeto-link"
                >
                  Ver repositório
                </a>
              </div>

              <div className="card">
                <h3>Labirinto dos Mistérios</h3>
                <br />

                <p>
                  Jogo baseado em labirinto desenvolvido completamente em Java.
                </p>

                <a
                  href="https://github.com/quezinhacosta/Sweet-Bomb-"
                  target="_blank"
                  rel="noreferrer"
                  className="projeto-link"
                >
                  Ver repositório
                </a>
              </div>

              <div className="card">
                <h3>Padawan</h3>
                <br />

                <p>
                  Projeto extensionista da UNICAP voltado para alunos de Ciência da
                  Computação. Atuei como administradora, sendo responsável pela
                  organização e funcionamento do projeto.
                </p>
              </div>

              <div className="card">
                <h3>Hackathon UNICAP</h3>

                <img
                  src="/imagens/fotohack.jpeg"
                  alt="Hackathon UNICAP"
                  className="projeto-img"
                />

                <p>
                  O hackathon consistiu na análise e resolução de uma problemática
                  social focada na comunidade de Santo Amaro, em Recife.
                </p>
              </div>

              <div className="card">
                <h3>BootCamp Magnus NOW!</h3>
                <br />

                <img
                  src="/imagens/fotoboot.jpeg"
                  alt="Bootcamp Magnus"
                  className="projeto-img"
                />

                <p>
                  Participei do bootcamp do Programa de Estágio Magnum NOW 2026,
                  vivenciando desafios técnicos e dinâmicas que fortaleceram minhas
                  habilidades técnicas e comportamentais.
                </p>
              </div>

              <div className="card">
                <h3>Monitoria de Cálculo 1</h3>
                <br />

                <p>
                  A monitoria consistiu em auxiliar alunos de Ciência da Computação
                  no primeiro período, com foco na resolução de exercícios de
                  matemática básica, limites, derivação e integral.
                </p>
              </div>

            </div>

            <button
              className="nav right"
              onClick={() => {
                document.getElementById("cards").scrollLeft += 300;
              }}
            >
              <img src='/imagens/icons/logout.png'
                  className='imagem-botao'
                  alt="Botão de navegação"
              />
            </button>

          </div>

        </section>
        <section id="projetos" className="section-projetos">

          <h2>Projetos em andamento</h2>

          <div className="cards-container">

            <div className="card-andamento">

              <img
                src="/imagens/FOTO3.png"
                alt="Imagem do projeto"
                className="projeto-img"
              />

              <h3>Padawan ON</h3> <br>
              </br>

              <p>
                Aplicação web criada para auxiliar na organização
                e automatização de processos dentro do projeto Padawan.
              </p>

              <p className="tecnologias">
                Tecnologias: React, JavaScript, HTML, CSS, MySQL, Python
              </p>

              <a
                href="https://github.com/quezinhacosta/padawan-projeto"
                target="_blank"
                rel="noreferrer"
                className="projeto-link"
              >
                Ver Projeto
              </a>

            </div>

            <div className="card-andamento">
              <h3>Pig Me Up</h3> <br></br>
              <p>
                Aplicação de controle financeiro pessoal para
                organização de gastos, metas e investimentos.
              </p>
              <p className="tecnologias">
                Tecnologias: Java, Mobile
              </p>
              <a
                href="#"
                className="projeto-link"
              >
                Em desenvolvimento
              </a>
            </div>

            <div className="card-andamento">
              <h3>Terrinha</h3>
              <p>
                Aplicativo mobile para android. 
                Game para auxiliar crianças com dislexia no seu processo de aprendizagem.
              </p>
              <p className="tecnologias">
                Tecnologias: Mobile
              </p>
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