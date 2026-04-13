export default function TorresCompraCashWebsite() {
  const business = {
    name: 'Torres Compra Cash',
    email: 'info@torrescompracash.com',
    phoneDisplay: '(787) 000-0000',
    phoneDigits: '17870000000',
    whatsappMessage:
      'Hola, quiero recibir una oferta cash para mi propiedad en Puerto Rico.',
    messengerUrl: 'https://m.me/torrescompracash',
    areas: ['San Juan', 'Carolina', 'Caguas', 'Bayamón', 'Ponce', 'Arecibo'],
    formAction: 'https://formspree.io/f/your-form-id',
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
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-black tracking-tight">{business.name}</div>
            <div className="text-xs text-white/60">Wholesaling Real Estate • Puerto Rico</div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 md:inline-flex"
            >
              WhatsApp
            </a>
            <a
              href="#contacto"
              className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]"
            >
              Solicita tu oferta
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.18),transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                Oferta cash • Cierre rápido • Puerto Rico
              </div>
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl">
                ¿Necesitas vender tu casa <span className="text-emerald-400">rápido</span>?
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                En {business.name} evaluamos propiedades en cualquier condición y te orientamos
                sobre una posible oferta cash sin vueltas ni procesos largos.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-2xl bg-emerald-500 px-6 py-4 text-base font-semibold text-neutral-950 shadow-xl shadow-emerald-500/30 transition hover:scale-[1.02]"
                >
                  Quiero una oferta cash
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Escríbenos por WhatsApp
                </a>
                <a
                  href={business.messengerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Abrir Messenger
                </a>
              </div>

              <div className="mt-6 max-w-xl text-sm text-white/60">
                Áreas comunes: {business.areas.join(' • ')}
              </div>

              <div className="mt-6 grid max-w-xl gap-3 text-sm text-white/75 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="font-bold text-white">Sin presión</div>
                  <div className="text-white/60">Orientación clara</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="font-bold text-white">Proceso simple</div>
                  <div className="text-white/60">Habla directo</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="font-bold text-white">Respuesta rápida</div>
                  <div className="text-white/60">WhatsApp y Messenger</div>
                </div>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-white/90 shadow-lg shadow-black/20"
                  >
                    <span className="mr-2 text-emerald-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Recibe orientación
                </div>
                <h2 className="text-2xl font-bold">Solicita una evaluación rápida</h2>
                <p className="mt-2 text-white/65">
                  Completa el formulario o escríbenos directo por WhatsApp.
                </p>

                <form action={business.formAction} method="POST" className="mt-6 space-y-4">
                  <input type="hidden" name="_subject" value="Nuevo lead - Torres Compra Cash" />
                  <input type="hidden" name="source" value="website" />
                  <input
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/35"
                    placeholder="Nombre"
                  />
                  <input
                    name="phone"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/35"
                    placeholder="Teléfono"
                  />
                  <input
                    name="propertyLocation"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/35"
                    placeholder="Pueblo o dirección de la propiedad"
                  />
                  <textarea
                    name="details"
                    required
                    className="min-h-[110px] w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/35"
                    placeholder="Condición de la propiedad y situación"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-yellow-400 px-6 py-4 text-base font-bold text-neutral-950 transition hover:scale-[1.01]"
                  >
                    Quiero mi oferta
                  </button>
                  <div className="grid gap-3 md:grid-cols-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Hablar por WhatsApp
                    </a>
                    <a
                      href={business.messengerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Hablar por Messenger
                    </a>
                  </div>
                  <p className="text-xs leading-6 text-white/45">
                    Cambia <span className="font-semibold text-white/70">formAction</span> por tu
                    endpoint de Formspree para recibir leads de verdad.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                <div className="text-3xl font-black text-emerald-400">Cash</div>
                <p className="mt-2 text-white/70">
                  Alternativa directa para dueños que quieren una opción rápida.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                <div className="text-3xl font-black text-yellow-400">Rápido</div>
                <p className="mt-2 text-white/70">
                  Proceso simple para personas que no quieren perder tiempo.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                <div className="text-3xl font-black text-emerald-400">Flexible</div>
                <p className="mt-2 text-white/70">
                  Evaluamos diferentes tipos de propiedades y situaciones.
                </p>
              </div>
              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Prueba social
                </div>
                <p className="mt-3 text-white/80">
                  Añade aquí testimonios reales, cierres o capturas de conversaciones para subir
                  confianza.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="situaciones" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Situaciones comunes
            </div>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Podemos evaluar propiedades en escenarios como estos
            </h2>
            <p className="mt-5 text-lg text-white/70">
              No todas las ventas son iguales. Por eso buscamos entender tu caso antes de
              presentarte una opción.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {situations.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
              >
                <div className="text-lg font-semibold">{item}</div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Cuéntanos tu situación y vemos si podemos ayudarte con una alternativa clara y
                  directa.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                Proceso
              </div>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Así funciona</h2>
              <p className="mt-5 text-lg text-white/70">
                Un proceso sencillo pensado para moverte rápido.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6 shadow-xl shadow-black/25"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-lg font-black text-neutral-950">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/15 to-yellow-300/10 p-8 shadow-2xl shadow-black/20">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Por qué elegirnos
              </div>
              <h2 className="mt-3 text-3xl font-black">
                Comunicación clara y enfoque directo
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                Sabemos que vender una propiedad puede sentirse pesado. Nuestro objetivo es darte
                claridad, rapidez y una conversación sencilla desde el principio.
              </p>
              <ul className="mt-8 space-y-4 text-white/85">
                <li>
                  <span className="text-emerald-400">✓</span> Respuesta rápida
                </li>
                <li>
                  <span className="text-emerald-400">✓</span> Evaluación sencilla
                </li>
                <li>
                  <span className="text-emerald-400">✓</span> Orientación sin compromiso
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-neutral-900/80 p-8 shadow-2xl shadow-black/20">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                FAQ
              </div>
              <div className="mt-6 space-y-5">
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="text-lg font-semibold">{item.q}</h3>
                    <p className="mt-2 leading-7 text-white/65">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                  Señales de confianza
                </div>
                <h3 className="mt-3 text-2xl font-bold">Sección ideal para Facebook Ads</h3>
                <p className="mt-3 text-white/70">
                  Aquí puedes colocar cierres, testimonios cortos, cantidad de propiedades
                  evaluadas o pueblos trabajados.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                <div className="text-lg font-bold">Testimonio #1</div>
                <p className="mt-3 text-white/70">
                  “El proceso fue claro y rápido. Pudimos hablar directo y resolver.”
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                <div className="text-lg font-bold">Testimonio #2</div>
                <p className="mt-3 text-white/70">
                  “Me orientaron sin presión y contestaron rápido por WhatsApp.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-white/10 bg-emerald-500/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="rounded-[2rem] border border-emerald-400/20 bg-neutral-950/80 p-8 shadow-2xl shadow-black/30 md:p-12">
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Hablemos
                  </div>
                  <h2 className="mt-3 text-3xl font-black md:text-5xl">
                    Solicita tu evaluación hoy
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                    Si estás pensando vender una propiedad en Puerto Rico, envíanos tu información.
                    Te orientamos sin compromiso.
                  </p>
                </div>

                <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div>
                    <div className="text-sm text-white/50">Email</div>
                    <div className="text-lg font-semibold">{business.email}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Teléfono</div>
                    <div className="text-lg font-semibold">{business.phoneDisplay}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Horario</div>
                    <div className="text-lg font-semibold">Lunes a Sábado</div>
                  </div>
                  <div className="grid gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-400 px-5 py-4 text-base font-bold text-neutral-950 transition hover:scale-[1.01]"
                    >
                      WhatsApp ahora
                    </a>
                    <a
                      href={business.messengerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base font-bold text-white transition hover:bg-white/10"
                    >
                      Messenger
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-neutral-950/95 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-4 py-3 text-sm font-bold text-neutral-950"
          >
            WhatsApp
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-bold text-neutral-950"
          >
            Oferta
          </a>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div>© 2026 {business.name}. Todos los derechos reservados.</div>
          <div>Wholesaling Real Estate • Puerto Rico</div>
        </div>
      </footer>
    </div>
  );
}
