   export default function TorresCompraCashWebsite() {
  const business = {
    name: 'Torres Compra Cash',
    email: 'atmrealestatepr@gmail.com',
    phoneDisplay: '1(787)-415-4344',
    phoneDigits: '17874154344',
    whatsappMessage:
      'Hola, quiero recibir una oferta cash para mi propiedad en Puerto Rico.',
    messengerUrl: 'https://m.me/torrescompracash',
    areas: ['San Juan', 'Carolina', 'Caguas', 'Bayamón', 'Ponce', 'Arecibo'],
    formAction: 'https://formspree.io/f/mwvakrqe',
  };

  const whatsappUrl = `https://wa.me/${business.phoneDigits}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  const benefits = [
    'Ofertas cash',
    'Cerramos rápido',
    'Compramos en cualquier condición',
    'Proceso simple y directo',
  ];

  const situations = [
    'Propiedades con reparaciones',
    'Herencias',
    'Mudanza o urgencia',
    'Pagos atrasados',
    'No quieres listar con realtor',
    'Necesitas vender sin complicaciones',
  ];

  const steps = [
    {
      title: 'Cuéntanos sobre la propiedad',
      text: 'Envíanos la dirección, fotos y algunos detalles básicos.',
    },
    {
      title: 'Evaluamos tu caso',
      text: 'Revisamos la propiedad y la situación para presentarte una opción.',
    },
    {
      title: 'Recibes una oferta cash',
      text: 'Te presentamos una oferta y te explicamos el proceso con claridad.',
    },
    {
      title: 'Cerramos rápido',
      text: 'Si te conviene, coordinamos el cierre lo antes posible.',
    },
  ];

  const faqs = [
    {
      q: '¿Compran casas en cualquier condición?',
      a: 'Sí. Evaluamos propiedades en distintas condiciones, incluyendo casas que necesitan reparaciones.',
    },
    {
      q: '¿Tengo que hacer arreglos antes de vender?',
      a: 'No necesariamente. Podemos evaluar la propiedad tal y como está.',
    },
    {
      q: '¿Cobran comisión?',
      a: 'Nuestro enfoque es ofrecer una alternativa directa y sencilla. Podemos explicarte cómo funciona según tu caso.',
    },
    {
      q: '¿Qué información necesitan para empezar?',
      a: 'Dirección, condición general, fotos si las tienes, y tu situación o meta de venta.',
    },
  ];

  return (
    <div className="site">
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <div className="brand">{business.name}</div>
            <div className="brand-sub"> Real Estate • Puerto Rico</div>
          </div>

          <div className="topbar-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
              WhatsApp
            </a>
            <a href="#contacto" className="btn btn-primary">
              Solicita tu oferta
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <div>
              <div className="pill">Oferta cash • Cierre rápido • Puerto Rico</div>
              <h1 className="hero-title">
                ¿Necesitas vender tu casa <span>rápido</span>?
              </h1>
              <p className="hero-text">
                En {business.name} evaluamos propiedades en cualquier condición y te orientamos
                sobre una posible oferta cash sin vueltas ni procesos largos.
              </p>

              <div className="hero-buttons">
                <a href="#contacto" className="btn btn-primary">
                  Quiero una oferta cash
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                  Escríbenos por WhatsApp
                </a>
                <a
                  href={business.messengerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Abrir Messenger
                </a>
              </div>

              <div className="areas">Áreas comunes: {business.areas.join(' • ')}</div>

              <div className="mini-grid">
                <div className="mini-card">
                  <strong>Sin presión</strong>
                  <span>Orientación clara</span>
                </div>
                <div className="mini-card">
                  <strong>Proceso simple</strong>
                  <span>Habla directo</span>
                </div>
                <div className="mini-card">
                  <strong>Respuesta rápida</strong>
                  <span>WhatsApp y Messenger</span>
                </div>
              </div>

              <div className="benefits-grid">
                {benefits.map((item) => (
                  <div key={item} className="benefit-card">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="form-card">
              <div className="section-label">Recibe orientación</div>
              <h2>Solicita una evaluación rápida</h2>
              <p>Completa el formulario o escríbenos directo por WhatsApp.</p>

              <form action={business.formAction} method="POST" className="lead-form">
                <input type="hidden" name="_subject" value="Nuevo lead - Torres Compra Cash" />
                <input type="hidden" name="source" value="website" />

                <input name="name" required placeholder="Nombre" />
                <input name="phone" required placeholder="Teléfono" />
                <input name="propertyLocation" required placeholder="Pueblo o dirección de la propiedad" />
                <textarea
                  name="details"
                  required
                  placeholder="Condición de la propiedad y situación"
                />

                <button type="submit" className="btn btn-gold full">
                  Quiero mi oferta
                </button>

                <div className="form-actions">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-outline full">
                    Hablar por WhatsApp
                  </a>
                  <a
                    href={business.messengerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline full"
                  >
                    Hablar por Messenger
                  </a>
                </div>

               
              </form>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            <div className="stat-card">
              <div className="stat-title green">Cash</div>
              <p>Alternativa directa para dueños que quieren una opción rápida.</p>
            </div>
            <div className="stat-card">
              <div className="stat-title gold">Rápido</div>
              <p>Proceso simple para personas que no quieren perder tiempo.</p>
            </div>
            <div className="stat-card">
              <div className="stat-title green">Flexible</div>
              <p>Evaluamos diferentes tipos de propiedades y situaciones.</p>
            </div>
            <div className="stat-card highlight">
              <div className="section-label">Prueba social</div>
              <p>Añade aquí testimonios reales, cierres o capturas para subir confianza.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Situaciones comunes</div>
              <h2>Podemos evaluar propiedades en escenarios como estos</h2>
              <p>
                No todas las ventas son iguales. Por eso buscamos entender tu caso antes de
                presentarte una opción.
              </p>
            </div>

            <div className="cards-grid three">
              {situations.map((item) => (
                <div key={item} className="info-card">
                  <h3>{item}</h3>
                  <p>
                    Cuéntanos tu situación y vemos si podemos ayudarte con una alternativa clara y
                    directa.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-header">
              <div className="section-label gold-text">Proceso</div>
              <h2>Así funciona</h2>
              <p>Un proceso sencillo pensado para moverte rápido.</p>
            </div>

            <div className="cards-grid four">
              {steps.map((step, idx) => (
                <div key={step.title} className="step-card">
                  <div className="step-number">{idx + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div className="feature-box">
              <div className="section-label">Por qué elegirnos</div>
              <h2>Comunicación clara y enfoque directo</h2>
              <p>
                Sabemos que vender una propiedad puede sentirse pesado. Nuestro objetivo es darte
                claridad, rapidez y una conversación sencilla desde el principio.
              </p>
              <ul>
                <li>✓ Respuesta rápida</li>
                <li>✓ Evaluación sencilla</li>
                <li>✓ Orientación sin compromiso</li>
              </ul>
            </div>

            <div className="faq-box">
              <div className="section-label gold-text">FAQ</div>
              <div className="faq-list">
                {faqs.map((item) => (
                  <div key={item.q} className="faq-item">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cards-grid three">
            <div className="info-card">
              <div className="section-label gold-text">Señales de confianza</div>
              <h3>Sección ideal para Facebook Ads</h3>
              <p>
                Aquí puedes colocar cierres, testimonios cortos, cantidad de propiedades evaluadas
                o pueblos trabajados.
              </p>
            </div>
            <div className="info-card">
              <h3>Testimonio #1</h3>
              <p>“El proceso fue claro y rápido. Pudimos hablar directo y resolver.”</p>
            </div>
            <div className="info-card">
              <h3>Testimonio #2</h3>
              <p>“Me orientaron sin presión y contestaron rápido por WhatsApp.”</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="container contact-box">
            <div>
              <div className="section-label">Hablemos</div>
              <h2>Solicita tu evaluación hoy</h2>
              <p>
                Si estás pensando vender una propiedad en Puerto Rico, envíanos tu información. Te
                orientamos sin compromiso.
              </p>
            </div>

            <div className="contact-card">
              <div>
                <span>Email</span>
                <strong>{business.email}</strong>
              </div>
              <div>
                <span>Teléfono</span>
                <strong>{business.phoneDisplay}</strong>
              </div>
              <div>
                <span>Horario</span>
                <strong>Lunes a Sábado</strong>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-gold full">
                WhatsApp ahora
              </a>
              <a
                href={business.messengerUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline full"
              >
                Messenger
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-bar">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-gold full">
          WhatsApp
        </a>
        <a href="#contacto" className="btn btn-primary full">
          Oferta
        </a>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 {business.name}. Todos los derechos reservados.</div>
          <div> Real Estate • Puerto Rico</div>
        </div>
      </footer>
    </div>
  );
}         
