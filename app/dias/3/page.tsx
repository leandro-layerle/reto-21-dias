const solutionTypes = [
  {
    title: "Solución rápida",
    description: "Algo que podrías probar hoy, aunque no sea perfecto.",
  },
  {
    title: "Solución segura",
    description: "Algo con bajo riesgo, aunque avance más lento.",
  },
  {
    title: "Solución incómoda",
    description: "Algo que evitás, pero probablemente necesitás mirar.",
  },
  {
    title: "Solución alternativa",
    description: "Una opción que no habías considerado al principio.",
  },
];

export default function DayThreePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-8">
      <section className="max-w-4xl mx-auto">
        <a href="/dashboard" className="text-sm text-zinc-400">
          ← Volver al dashboard
        </a>

        <div className="mt-8 mb-10">
          <p className="text-sm text-zinc-500 mb-3">Día 3 de 21</p>

          <h1 className="text-4xl font-bold mb-4">Generar soluciones</h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            Un problema con una sola salida suele sentirse imposible.
            El objetivo de hoy es abrir posibilidades.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Idea del día</h2>

          <p className="text-zinc-300 leading-relaxed mb-5">
            Muchas veces no estamos bloqueados porque no exista una solución.
            Estamos bloqueados porque solo estamos mirando una única forma de
            resolver el problema.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-black border border-zinc-800 p-4">
              <p className="text-sm text-zinc-500 mb-2">Bloqueo común</p>
              <p className="font-medium">“No tengo opción.”</p>
            </div>

            <div className="rounded-2xl bg-black border border-zinc-800 p-4">
              <p className="text-sm text-zinc-500 mb-2">Cambio mental</p>
              <p className="font-medium">“Todavía no vi opciones.”</p>
            </div>

            <div className="rounded-2xl bg-black border border-zinc-800 p-4">
              <p className="text-sm text-zinc-500 mb-2">Acción</p>
              <p className="font-medium">Buscar alternativas.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Challenge</h2>

          <p className="text-zinc-400 mb-6">
            Escribí distintas formas de abordar el problema. No busques la
            solución perfecta todavía. Primero buscá cantidad.
          </p>

          <label className="block text-sm text-zinc-400 mb-2">
            Problema que querés resolver
          </label>

          <textarea
            className="w-full min-h-24 rounded-2xl bg-black border border-zinc-800 p-4 text-white mb-8"
            placeholder="Ej: Quiero ordenar mi rutina, pero no sé por dónde empezar..."
          />

          <div className="grid md:grid-cols-2 gap-4">
            {solutionTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-black p-5"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 mb-4">
                  {item.description}
                </p>

                <textarea
                  className="w-full min-h-28 rounded-xl bg-zinc-950 border border-zinc-800 p-3 text-sm"
                  placeholder="Escribí una posibilidad..."
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Elegí una opción para probar
          </h2>

          <p className="text-zinc-400 mb-5">
            Ahora no elijas la más perfecta. Elegí la que te permita moverte.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            <button className="rounded-2xl border border-zinc-800 bg-black p-4 text-left hover:bg-zinc-900 transition">
              <p className="font-semibold mb-1">La más simple</p>
              <p className="text-sm text-zinc-500">
                Ideal para destrabar rápido.
              </p>
            </button>

            <button className="rounded-2xl border border-zinc-800 bg-black p-4 text-left hover:bg-zinc-900 transition">
              <p className="font-semibold mb-1">La menos riesgosa</p>
              <p className="text-sm text-zinc-500">
                Ideal cuando hay incertidumbre.
              </p>
            </button>

            <button className="rounded-2xl border border-zinc-800 bg-black p-4 text-left hover:bg-zinc-900 transition">
              <p className="font-semibold mb-1">La más incómoda</p>
              <p className="text-sm text-zinc-500">
                Ideal cuando venís evitando algo.
              </p>
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white text-black p-6">
          <p className="text-lg font-semibold mb-4">
            Las soluciones aparecen cuando dejás de buscar una única respuesta
            perfecta.
          </p>

          <a
            href="/dias/4"
            className="inline-flex rounded-full bg-black text-white px-6 py-3 text-sm font-semibold"
          >
            Completar día 3
          </a>
        </div>
      </section>
    </main>
  );
}