import { useState } from "react";

type Proyecto = {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  aprendizaje: string;
  tecnologias: string[];
  url?: string;
  repoUrl?: string;
  visual: "fila" | "estante";
};

const tecnologias = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite"];

const proyectos: Proyecto[] = [
  {
    id: "fila-creativa",
    nombre: "Fila creativa",
    categoria: "Práctica de React · Módulo 03",
    descripcion:
      "Una mini app de turnos para que el clásico «¿quién sigue?» no dependa de la memoria colectiva. React muestra la fila y atiende en orden FIFO: quien llega primero, sale primero.",
    aprendizaje:
      "Practiqué estado en React, arreglos y FIFO: quien llega primero es quien se atiende primero.",
    tecnologias: ["React", "TypeScript"],
    url: "https://fila-creativa-pearl.vercel.app",
    repoUrl: "https://github.com/Santiagooooo-Phyton/Fila-Creativa-",
    visual: "fila",
  },
  {
    id: "estante-compartido",
    nombre: "Estante Compartido",
    categoria: "Aplicación web · Proyecto final",
    descripcion:
      "Un catálogo que consulta libros desde una API, guarda favoritos y permite reservar. Una estantería digital que sí recuerda dónde dejaste tus favoritos.",
    aprendizaje:
      "Practiqué consultas a una API, manejo de estados y cómo guardar favoritos para que sigan ahí al volver.",
    tecnologias: ["React", "TypeScript", "Vite", "API"],
    url: "https://proyecto-estanteria.vercel.app",
    repoUrl: "https://github.com/Santiagooooo-Phyton/Proyecto-Estanteria-",
    visual: "estante",
  },
];

function IconoFlecha() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.2 10h11.4M10.5 4.8l5.2 5.2-5.2 5.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TerminalVisual() {
  return (
    <div className="terminal-scene" aria-hidden="true">
      <div className="terminal-orbit orbit-one" />
      <div className="terminal-orbit orbit-two" />
      <div className="terminal-window">
        <div className="terminal-bar">
          <div className="window-dots"><i /><i /><i /></div>
          <span>santiago@dev: ~/portafolio</span>
          <span className="terminal-lock">●</span>
        </div>
        <div className="terminal-code">
          <div><span className="line-number">01</span><span><b>const</b> idea = <em>"algo genial"</em>;</span></div>
          <div><span className="line-number">02</span><span /></div>
          <div><span className="line-number">03</span><span><b>function</b> <strong>construir</strong>(idea: <i>string</i>) {'{'}</span></div>
          <div><span className="line-number">04</span><span className="indent"><b>return</b> &lt;<strong>Proyecto</strong> idea={'{'}idea{'}'} /&gt;;</span></div>
          <div><span className="line-number">05</span><span>{'}'}</span></div>
          <div><span className="line-number">06</span><span /></div>
          <div><span className="line-number">07</span><span className="comment">// si falla: revisar, aprender, repetir</span></div>
          <div className="terminal-cursor-row"><span className="line-number">08</span><span className="cursor-block" /></div>
        </div>
        <div className="terminal-output"><span className="output-check">✓</span><span>npm run dev</span><span className="output-ready">servidor listo</span></div>
      </div>
      <div className="floating-bug"><span>✳</span><div><strong>bug resuelto</strong><small>+1 punto de experiencia</small></div></div>
      <div className="scene-caption"><span>IDEAS → CÓDIGO → APRENDIZAJE</span><span>SP / 001</span></div>
    </div>
  );
}

function Presentacion({ nombre, descripcion }: { nombre: string; descripcion: string }) {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> PORTAFOLIO PERSONAL <span className="eyebrow-year">2026</span></p>
        <h1 id="hero-title">Hago cosas<br />con <em>código.</em></h1>
        <p className="hero-intro">Soy <strong>{nombre}</strong>, {descripcion}</p>
        <div className="hero-actions">
          <a className="button button-lime" href="#proyectos">Ver mis proyectos <IconoFlecha /></a>
          <a className="text-link" href="#sobre-mi">Más sobre mí <span>↓</span></a>
        </div>
        <div className="hero-note"><span className="prompt-mark">&gt;_</span><span>Aprendiendo frontend, un error útil a la vez.</span></div>
      </div>
      <TerminalVisual />
      <a className="scroll-cue" href="#sobre-mi" aria-label="Desplazarse a la sección sobre mí"><span /> SCROLL PARA EXPLORAR</a>
    </section>
  );
}

function PresentacionPersonal() {
  return (
    <section className="about section-wrap" id="sobre-mi" aria-labelledby="about-title">
      <div className="section-label"><span>02</span><span>SOBRE MÍ</span><span className="label-line" /></div>
      <div className="about-content">
        <div>
          <p className="eyebrow">HOLA, SOY SANTIAGO</p>
          <h2 id="about-title">Curioso por naturaleza.<br /><em>Programador en proceso.</em></h2>
        </div>
        <div className="about-text">
          <p>Me gusta construir cosas para la web y entender qué pasa detrás de cada botón. Estoy aprendiendo programación frontend; mi plan es que el código funcione a la primera. Mi plan real es aprender a encontrar el error cuando no lo hace.</p>
          <p>También me interesan la arquitectura, el dibujo técnico y el diseño 3D. Aportan otra forma de pensar los proyectos, aunque últimamente mi conversación favorita es entre React y la consola.</p>
          <div className="interest-list" aria-label="Áreas de interés">
            <span>Desarrollo web</span><span>React</span><span>Resolver bugs</span><span>Arquitectura</span>
          </div>
        </div>
      </div>
      <div className="about-rule"><span>APRENDER · PROBAR · VOLVER A INTENTAR</span><span>VERSIÓN 1.0 — EN PROGRESO</span></div>
    </section>
  );
}

function ListaTecnologias({ lista }: { lista: string[] }) {
  return (
    <section className="skills section-wrap" id="tecnologias" aria-labelledby="skills-title">
      <div className="section-label"><span>03</span><span>STACK EN CONSTRUCCIÓN</span><span className="label-line" /></div>
      <div className="skills-content">
        <div className="skills-heading">
          <p className="eyebrow">HERRAMIENTAS QUE PRACTICO</p>
          <h2 id="skills-title">Mi caja de herramientas <em>(y de bugs).</em></h2>
          <p>No las colecciono por decoración: las estoy usando para construir proyectos y entender cómo funcionan.</p>
          <div className="code-pill"><span className="pill-dot" /> aprendiendo.constantemente = true</div>
        </div>
        <ul className="technology-list">
          {lista.map((tecnologia, index) => (
            <li key={tecnologia}><span className="technology-number">0{index + 1}</span><span>{tecnologia}</span><span className="technology-arrow">↗</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectVisual({ tipo }: { tipo: Proyecto["visual"] }) {
  if (tipo === "fila") {
    return (
      <div className="project-art queue-art" aria-hidden="true">
        <span className="art-index">01 / FIFO</span>
        <div className="app-window queue-window">
          <div className="app-window-head"><div className="window-dots"><i /><i /><i /></div><span>fila-creativa.tsx</span><span className="window-menu">•••</span></div>
          <div className="queue-content"><span className="mini-label">SIGUIENTE EN LA FILA</span><div className="queue-person"><span className="person-avatar">L</span><div><strong>Lina</strong><small>Pregunta sobre React</small></div><span className="queue-position">#01</span></div><div className="queue-footer"><span className="queue-dot" /> 2 personas esperando <span>Atender →</span></div></div>
        </div>
        <span className="art-caption">FIRST IN, FIRST OUT</span>
      </div>
    );
  }
  return (
    <div className="project-art shelf-art" aria-hidden="true">
      <span className="art-index">02 / API CONNECTED</span>
      <div className="catalog-window">
        <div className="catalog-top"><span className="catalog-mark">&lt;/&gt;</span><span>estante-compartido</span><span className="api-status"><i /> API</span></div>
        <div className="catalog-body"><div className="catalog-copy"><span className="mini-label">CATÁLOGO DIGITAL</span><strong>Encuentra tu<br />siguiente lectura.</strong><span className="catalog-cta">Explorar libros <IconoFlecha /></span></div><div className="mini-books"><i /><i /><i /></div></div>
        <div className="catalog-footer"><span>GET /api/libros</span><span className="catalog-success">200 OK</span></div>
      </div>
      <span className="art-caption">UNA API, MUCHOS LIBROS, CERO POLVO</span>
    </div>
  );
}

function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="project-card">
      <ProjectVisual tipo={proyecto.visual} />
      <div className="project-info">
        <div className="project-meta"><span>{proyecto.categoria}</span><span className="project-id">{proyecto.id === "fila-creativa" ? "01" : "02"}</span></div>
        <h3>{proyecto.nombre}</h3>
        <p>{proyecto.descripcion}</p>
        <div className="project-learning"><span>LO QUE PRACTIQUÉ</span><p>{proyecto.aprendizaje}</p></div>
        <ul className="project-tags" aria-label={`Tecnologías de ${proyecto.nombre}`}>
          {proyecto.tecnologias.map((tecnologia) => <li key={tecnologia}>{tecnologia}</li>)}
        </ul>
        <div className="project-actions">
          {proyecto.url && <a className="project-link" href={proyecto.url} target="_blank" rel="noreferrer">Ver demo <IconoFlecha /></a>}
          {proyecto.repoUrl && <a className="project-link project-source" href={proyecto.repoUrl} target="_blank" rel="noreferrer">Ver código ↗</a>}
        </div>
        {!proyecto.url && !proyecto.repoUrl && (
          <span className="project-pending">Sin enlace público todavía</span>
        )}
      </div>
    </article>
  );
}

function ListaProyectos({ lista }: { lista: Proyecto[] }) {
  return (
    <section className="projects section-wrap" id="proyectos" aria-labelledby="projects-title">
      <div className="section-label"><span>04</span><span>PROYECTOS</span><span className="label-line" /></div>
      <div className="projects-heading">
        <div><p className="eyebrow">COSAS QUE YA SALIERON DE LOCALHOST</p><h2 id="projects-title">Código en acción.<br /><em>Errores, también.</em></h2></div>
        <p>Cada proyecto deja algo nuevo: a veces un componente; a veces una forma distinta de preguntar «¿por qué no compila?».</p>
      </div>
      <div className="projects-grid">
        {lista.map((proyecto) => <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />)}
      </div>
    </section>
  );
}

function Voleibol() {
  return (
    <section className="volleyball section-wrap" id="voleibol" aria-labelledby="volleyball-title">
      <div className="section-label"><span>01</span><span>FUERA DEL CÓDIGO</span><span className="label-line" /></div>
      <div className="volleyball-content">
        <div className="volleyball-copy">
          <p className="eyebrow">OTRA DE MIS PASIONES</p>
          <h2 id="volleyball-title">Mi lugar también<br />está <em>en la cancha.</em></h2>
          <p>Llevo cerca de siete años jugando voleibol. Gracias al esfuerzo y la dedicación que le he puesto, desde hace cuatro años represento a nuestro departamento en diferentes competencias. Cada entrenamiento y cada partido me han enseñado a trabajar en equipo, confiar en los demás y estar listo para la siguiente jugada.</p>
          <p>Y sí, también encuentro algo de programar en la cancha: a veces una recepción no sale o aparece un bug inesperado. Toca ajustar, volver a intentarlo y celebrar cuando todo conecta. Si cae el punto, mejor todavía.</p>
          <div className="volleyball-tags"><span>TRABAJO EN EQUIPO</span><span>ESTRATEGIA</span><span>SEGUIR INTENTANDO</span></div>
        </div>
        <div className="volleyball-visual">
          <img className="volleyball-photo" src="/equipo-voleibol.jpg" alt="Santiago y sus compañeros de equipo de voleibol celebran con sus medallas y trofeo en la cancha." />
          <span className="volleyball-index">PASIÓN / 01</span>
          <div className="volleyball-badge"><span className="volley-dot" /><span><strong>JUEGO EN EQUIPO</strong><small>la mejor estrategia</small></span></div>
          <span className="volleyball-caption">UNA JUGADA A LA VEZ</span>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section className="contact section-wrap" id="contacto" aria-labelledby="contact-title">
      <div className="section-label"><span>05</span><span>CONTACTO</span><span className="label-line" /></div>
      <div className="contact-panel">
        <div><p className="eyebrow">EL SIGUIENTE PROYECTO PODRÍA EMPEZAR AQUÍ</p><h2 id="contact-title">¿Hacemos algo<br /><em>con código?</em></h2><p className="contact-joke">Prometo leer tu mensaje antes de sugerir «reinicia el servidor».</p></div>
        <a className="contact-link" href="mailto:Santiagoperdomo1306@gmail.com"><span>Santiagoperdomo1306@gmail.com</span><IconoFlecha /></a>
        <span className="contact-asterisk" aria-hidden="true">{ }</span>
      </div>
    </section>
  );
}

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Santiago Perdomo, inicio"><span className="brand-mark">SP<span>_</span></span><span>SANTIAGO<br />PERDOMO <i>— DEV</i></span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuAbierto} aria-controls="site-nav" onClick={() => setMenuAbierto(!menuAbierto)}>{menuAbierto ? "Cerrar" : "Menú"}</button>
        <nav className={menuAbierto ? "site-nav is-open" : "site-nav"} id="site-nav" aria-label="Navegación principal">
          <a href="#sobre-mi" onClick={cerrarMenu}>Sobre mí</a><a href="#tecnologias" onClick={cerrarMenu}>Tecnologías</a><a href="#voleibol" onClick={cerrarMenu}>Voleibol</a><a href="#proyectos" onClick={cerrarMenu}>Proyectos</a><a className="nav-contact" href="#contacto" onClick={cerrarMenu}>Hablemos <IconoFlecha /></a>
        </nav>
      </header>
      <main>
        <Presentacion nombre="Santiago Perdomo Vargas" descripcion="estoy aprendiendo a convertir ideas, curiosidad y errores de consola en páginas que sí funcionan." />
        <Voleibol />
        <PresentacionPersonal />
        <ListaTecnologias lista={tecnologias} />
        <ListaProyectos lista={proyectos} />
        <Contacto />
      </main>
      <footer className="site-footer"><a className="footer-brand" href="#inicio">SP<span> / SANTIAGO PERDOMO</span></a><span>Compilado con curiosidad, no con magia.</span><a href="#inicio">VOLVER ARRIBA ↑</a></footer>
    </div>
  );
}
