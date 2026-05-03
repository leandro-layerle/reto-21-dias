const days = [
  {
    number: 1,
    title: "Comprensión clara",
    description:
      "Aprendé a diferenciar hechos, emociones e interpretaciones.",
    status: "completed",
  },
  {
    number: 2,
    title: "Dividir el problema",
    description:
      "Transformá problemas grandes en pasos manejables.",
    status: "current",
  },
  {
    number: 3,
    title: "Generar soluciones",
    description:
      "Abrí posibilidades y evitá el pensamiento rígido.",
    status: "available",
  },
  {
    number: 4,
    title: "Priorizar",
    description:
      "Enfocá tu energía en lo realmente importante.",
    status: "locked",
  },
  {
    number: 5,
    title: "Plan de acción",
    description:
      "Convertí claridad en movimiento concreto.",
    status: "locked",
  },
];

const skills = [
  "Claridad",
  "Foco",
  "Decisión",
  "Acción",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#0B1020] via-[#111827] to-black text-white">
      <section className="relative px-6 py-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-14">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300 mb-3">
                Tu experiencia
              </p>

              <h1 className="text-5xl font-bold tracking-tight mb-4">
                Claridad 21
              </h1>

              <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                Avanzá día por día y entrená una forma más clara de pensar,
                decidir y actuar.
              </p>
            </div>

            <a
              href="/"
              className="hidden md:inline-flex rounded-full border border-white/10 bg-white/5 backdrop-blur px-5 py-3 text-sm hover:bg-white/10 transition"
            >
              Volver al inicio
            </a>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 mb-10">
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-zinc-400 mb-2">
                    Progreso actual
                  </p>

                  <h2 className="text-3xl font-bold">
                    3 de 21 días
                  </h2>
                </div>

                <div className="w-20 h-20 rounded-full border-4 border-violet-400/30 flex items-center justify-center text-xl font-bold">
                  14%
                </div>
              </div>

              <div className="h-4 rounded-full bg-white/10 overflow-hidden mb-6">
                <div className="h-full w-[14%] rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-zinc-400 mb-2">
                  Continuar experiencia
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Día 3 — Generar soluciones
                    </h3>

                    <p className="text-zinc-400">
                      Abrí posibilidades y evitá el pensamiento rígido.
                    </p>
                  </div>

                  <a
                    href="/dias/3"
                    className="rounded-full bg-white text-black px-5 py-3 text-sm font-semibold whitespace-nowrap"
                  >
                    Continuar
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <p className="text-sm text-zinc-400 mb-4">
                Habilidades entrenadas
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
                <p className="text-violet-200 text-sm mb-3">
                  Insight del día
                </p>

                <p className="text-lg leading-relaxed">
                  La claridad aparece más rápido cuando dejás de intentar
                  resolver todo al mismo tiempo.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-300 mb-3">
                  Recorrido
                </p>

                <h2 className="text-4xl font-bold tracking-tight">
                  Tus próximos desafíos
                </h2>
              </div>
            </div>

            <div className="grid gap-5">
              {days.map((day) => (
                <div
                  key={day.number}
                  className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/[0.07] transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div>
                      <p className="text-sm text-zinc-400 mb-2">
                        Día {day.number}
                      </p>

                      <h3 className="text-2xl font-semibold mb-3">
                        {day.title}
                      </h3>

                      <p className="text-zinc-400 max-w-2xl leading-relaxed">
                        {day.description}
                      </p>
                    </div>

                    <div>
                      {day.status === "completed" && (
                        <a
                          href={`/dias/${day.number}`}
                          className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-3 text-sm text-emerald-200"
                        >
                          Revisar día
                        </a>
                      )}

                      {day.status === "current" && (
                        <a
                          href={`/dias/${day.number}`}
                          className="inline-flex rounded-full bg-white text-black px-6 py-3 text-sm font-semibold"
                        >
                          Continuar
                        </a>
                      )}

                      {day.status === "available" && (
                        <a
                          href={`/dias/${day.number}`}
                          className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm"
                        >
                          Comenzar
                        </a>
                      )}

                      {day.status === "locked" && (
                        <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-6 py-3 text-sm text-zinc-500">
                          Bloqueado
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-zinc-400 mb-3">
                  🎥 Recursos
                </p>

                <p className="font-medium">
                  Videos, lecturas y ejercicios prácticos.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-zinc-400 mb-3">
                  🧠 Insights
                </p>

                <p className="font-medium">
                  Ideas breves para ayudarte a pensar mejor.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-zinc-400 mb-3">
                  ⚡ Challenges
                </p>

                <p className="font-medium">
                  Micro desafíos interactivos todos los días.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}