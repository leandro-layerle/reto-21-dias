const days = [
  { number: 1, title: "Comprensión clara", status: "completed" },
  { number: 2, title: "Dividir el problema", status: "current" },
  { number: 3, title: "Generar soluciones", status: "locked" },
  { number: 4, title: "Priorizar", status: "locked" },
  { number: 5, title: "Plan de acción", status: "locked" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-8">
      <section className="max-w-4xl mx-auto">
        <p className="text-sm text-zinc-400 mb-3">Tu recorrido</p>

        <h1 className="text-4xl font-bold mb-4">Claridad 21</h1>

        <p className="text-zinc-300 mb-8">
          Avanzá día por día. Cada desafío está diseñado para ayudarte a pensar
          mejor, ordenar problemas y pasar a la acción.
        </p>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5 mb-8">
          <div className="flex justify-between text-sm mb-3">
            <span>Progreso</span>
            <span className="text-zinc-400">1 de 21 días</span>
          </div>

          <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
            <div className="h-full w-[5%] bg-white rounded-full" />
          </div>
        </div>

        <div className="grid gap-4">
          {days.map((day) => (
            <a
              key={day.number}
              href={day.status === "locked" ? "#" : `/dias/${day.number}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-zinc-500">Día {day.number}</p>
                <h2 className="text-xl font-semibold">{day.title}</h2>
              </div>

              <span className="text-sm text-zinc-400">
                {day.status === "completed" && "Completado"}
                {day.status === "current" && "Actual"}
                {day.status === "locked" && "Bloqueado"}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}