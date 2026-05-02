const phrases = [
  "Todo está mal",
  "Tuve tres discusiones esta semana",
  "Nadie me escucha",
];

export default function DayOnePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-8">
      <section className="max-w-3xl mx-auto">
        <a href="/dashboard" className="text-sm text-zinc-400">
          ← Volver al dashboard
        </a>

        <div className="mt-8 mb-10">
          <p className="text-sm text-zinc-500 mb-3">Día 1 de 21</p>
          <h1 className="text-4xl font-bold mb-4">Comprensión clara</h1>
          <p className="text-xl text-zinc-300 leading-relaxed">
            No podés resolver correctamente algo que todavía no entendés.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Qué vas a entrenar hoy</h2>
          <p className="text-zinc-300 leading-relaxed">
            Antes de buscar soluciones, primero necesitás diferenciar hechos,
            emociones e interpretaciones. Muchas veces el problema real está
            tapado por ruido mental.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
          <p className="text-zinc-400 mb-5">
            Leé estas frases y pensá si son hechos, emociones o interpretaciones.
          </p>

          <div className="grid gap-3 mb-6">
            {phrases.map((phrase) => (
              <div
                key={phrase}
                className="rounded-2xl border border-zinc-800 bg-black p-4"
              >
                “{phrase}”
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-zinc-900 p-4">
              <h3 className="font-semibold mb-2">Hecho</h3>
              <p className="text-sm text-zinc-400">Algo comprobable.</p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-4">
              <h3 className="font-semibold mb-2">Emoción</h3>
              <p className="text-sm text-zinc-400">Lo que sentís.</p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-4">
              <h3 className="font-semibold mb-2">Interpretación</h3>
              <p className="text-sm text-zinc-400">La historia que armás.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Tu turno</h2>

          <label className="block text-sm text-zinc-400 mb-2">
            Escribí un problema actual
          </label>
          <textarea
            className="w-full min-h-28 rounded-2xl bg-black border border-zinc-800 p-4 text-white mb-5"
            placeholder="Ej: Estoy frustrado porque siento que no avanzo..."
          />

          <label className="block text-sm text-zinc-400 mb-2">
            Ahora describilo usando solo hechos concretos
          </label>
          <textarea
            className="w-full min-h-28 rounded-2xl bg-black border border-zinc-800 p-4 text-white"
            placeholder="Ej: Hace dos semanas que no termino una tarea importante..."
          />
        </div>

        <div className="rounded-3xl bg-white text-black p-6">
          <p className="text-lg font-semibold mb-4">
            La claridad aparece cuando dejás de reaccionar automáticamente.
          </p>

          <a
            href="/dias/2"
            className="inline-flex rounded-full bg-black text-white px-6 py-3 text-sm font-semibold"
          >
            Completar día 1
          </a>
        </div>
      </section>
    </main>
  );
}