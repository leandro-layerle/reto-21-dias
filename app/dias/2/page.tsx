const sections = [
  "Depende de mí",
  "Depende de otros",
  "Puede esperar",
  "Primer paso mínimo",
];

export default function DayTwoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-8">
      <section className="max-w-4xl mx-auto">
        <a href="/dashboard" className="text-sm text-zinc-400">
          ← Volver al dashboard
        </a>

        <div className="mt-8 mb-10">
          <p className="text-sm text-zinc-500 mb-3">Día 2 de 21</p>

          <h1 className="text-4xl font-bold mb-4">
            Dividir el problema
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            Los problemas grandes generan parálisis.
            Los problemas divididos generan movimiento.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Qué suele pasar
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-black border border-zinc-800 p-5">
              <p className="text-zinc-300">
                “Tengo demasiadas cosas encima.”
              </p>
            </div>

            <div className="rounded-2xl bg-black border border-zinc-800 p-5">
              <p className="text-zinc-300">
                “No sé por dónde empezar.”
              </p>
            </div>

            <div className="rounded-2xl bg-black border border-zinc-800 p-5">
              <p className="text-zinc-300">
                “Todo parece urgente.”
              </p>
            </div>

            <div className="rounded-2xl bg-black border border-zinc-800 p-5">
              <p className="text-zinc-300">
                “Estoy bloqueado.”
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Challenge
          </h2>

          <p className="text-zinc-400 mb-6">
            Tomá el problema que escribiste ayer y dividilo.
          </p>

          <label className="block text-sm text-zinc-400 mb-2">
            Problema principal
          </label>

          <textarea
            className="w-full min-h-24 rounded-2xl bg-black border border-zinc-800 p-4 text-white mb-8"
            placeholder="Ej: No logro organizarme..."
          />

          <div className="grid md:grid-cols-2 gap-4">
            {sections.map((section) => (
              <div
                key={section}
                className="rounded-2xl border border-zinc-800 bg-black p-5"
              >
                <h3 className="font-semibold mb-3">{section}</h3>

                <textarea
                  className="w-full min-h-28 rounded-xl bg-zinc-950 border border-zinc-800 p-3 text-sm"
                  placeholder="Escribí aquí..."
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Idea importante
          </h2>

          <p className="text-zinc-300 leading-relaxed">
            Resolver un problema no siempre significa resolverlo completo.
            Muchas veces significa encontrar el siguiente paso correcto.
          </p>
        </div>

        <div className="rounded-3xl bg-white text-black p-6">
          <p className="text-lg font-semibold mb-4">
            Cuando dividís el problema, dejás de pelearte con algo enorme.
          </p>

          <a
            href="/dias/3"
            className="inline-flex rounded-full bg-black text-white px-6 py-3 text-sm font-semibold"
          >
            Completar día 2
          </a>
        </div>
      </section>
    </main>
  );
}