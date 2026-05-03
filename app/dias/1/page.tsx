const examples = [
  {
    text: "Todo está mal",
    type: "Interpretación",
  },
  {
    text: "Tuve tres discusiones esta semana",
    type: "Hecho",
  },
  {
    text: "Nadie me escucha",
    type: "Interpretación",
  },
];

export default function DayOnePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B1020] via-[#111827] to-black text-white overflow-hidden">
      <section className="relative px-6 py-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-500/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <a href="/dashboard" className="text-sm text-zinc-400">
            ← Volver al dashboard
          </a>

          <div className="mt-12 mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300 mb-5">
              Día 1 de 21
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              Comprensión clara
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl">
              La mayoría de las personas intenta resolver problemas…
              sin entender realmente qué está pasando.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-sm text-zinc-400 mb-3">
                Reacción automática
              </p>

              <p className="text-lg leading-relaxed">
                Actuar rápido sin comprender.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-sm text-zinc-400 mb-3">
                Ruido mental
              </p>

              <p className="text-lg leading-relaxed">
                Mezclar emociones con hechos.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-sm text-zinc-400 mb-3">
                Objetivo del día
              </p>

              <p className="text-lg leading-relaxed">
                Aprender a observar con más claridad.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-black/30 backdrop-blur-xl p-8 mb-10">
            <h2 className="text-3xl font-semibold mb-6">
              ¿Por qué pasa esto?
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Cuando estamos frustrados, cansados o saturados,
              nuestro cerebro intenta completar información automáticamente.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Eso hace que muchas veces confundamos:
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="rounded-full bg-violet-500/20 border border-violet-400/20 px-4 py-2 text-sm">
                Hechos
              </span>

              <span className="rounded-full bg-cyan-500/20 border border-cyan-400/20 px-4 py-2 text-sm">
                Emociones
              </span>

              <span className="rounded-full bg-pink-500/20 border border-pink-400/20 px-4 py-2 text-sm">
                Interpretaciones
              </span>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-black/30 backdrop-blur-xl p-8 mb-10">
            <h2 className="text-3xl font-semibold mb-6">
              Ejemplos rápidos
            </h2>

            <div className="grid gap-4">
              {examples.map((example) => (
                <div
                  key={example.text}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center justify-between"
                >
                  <p className="text-lg">“{example.text}”</p>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-zinc-300">
                    {example.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-black/30 backdrop-blur-xl p-8 mb-10">
            <h2 className="text-3xl font-semibold mb-6">
              Challenge
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Pensá en un problema actual e intentá describirlo con claridad.
            </p>

            <label className="block text-sm text-zinc-400 mb-3">
              ¿Qué problema estás viviendo?
            </label>

            <textarea
              className="w-full min-h-32 rounded-3xl bg-black/40 border border-white/10 p-5 text-white mb-8"
              placeholder="Ej: Me siento estancado y no sé cómo avanzar..."
            />

            <label className="block text-sm text-zinc-400 mb-3">
              Ahora describilo usando solo hechos concretos
            </label>

            <textarea
              className="w-full min-h-32 rounded-3xl bg-black/40 border border-white/10 p-5 text-white"
              placeholder="Ej: Hace semanas que postergué decisiones importantes..."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400 mb-3">
                🎥 Recurso sugerido
              </p>

              <p className="font-medium">
                Cómo dejar de reaccionar automáticamente
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400 mb-3">
                📄 Lectura breve
              </p>

              <p className="font-medium">
                Diferencia entre hecho e interpretación
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400 mb-3">
                🧠 Idea clave
              </p>

              <p className="font-medium">
                La claridad reduce ansiedad.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] bg-white text-black p-8">
            <p className="text-2xl font-semibold leading-relaxed mb-6">
              La claridad aparece cuando dejás de reaccionar automáticamente.
            </p>

            <a
              href="/dias/2"
              className="inline-flex rounded-full bg-black text-white px-7 py-4 text-sm font-semibold"
            >
              Continuar al Día 2
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}