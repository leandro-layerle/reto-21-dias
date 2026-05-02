export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <p className="text-sm text-zinc-400 mb-4">Reto interactivo de 21 días</p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Claridad 21
        </h1>

        <p className="text-lg text-zinc-300 mb-8">
          Una experiencia guiada para aprender a resolver problemas con más claridad,
          foco y acción.
        </p>

        <a
          href="/dashboard"
          className="inline-flex rounded-full bg-white text-black px-6 py-3 font-medium"
        >
          Comenzar
        </a>
      </section>
    </main>
  );
}