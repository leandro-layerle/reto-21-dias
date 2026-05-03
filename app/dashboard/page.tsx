"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020] via-[#111827] to-black" />

        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-500/20 blur-[160px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-24">
          <nav className="flex items-center justify-between mb-24">
            <div>
              <p className="text-lg font-semibold tracking-tight">
                Claridad 21
              </p>
            </div>

            <a
              href="/dashboard"
              className="rounded-full border border-white/10 bg-white/5 backdrop-blur px-5 py-2 text-sm hover:bg-white/10 transition"
            >
              Entrar
            </a>
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="uppercase tracking-[0.3em] text-violet-300 text-sm mb-6">
                Experiencia interactiva de 21 días
              </p>

              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
                Aprendé a resolver problemas con más claridad.
              </h1>

              <p className="text-xl text-zinc-300 leading-relaxed mb-10 max-w-2xl">
                Una experiencia visual, práctica e interactiva para ayudarte a
                pensar mejor, ordenar situaciones complejas y pasar a la acción
                con más foco.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/dashboard"
                  className="rounded-full bg-white text-black px-7 py-4 font-semibold hover:bg-zinc-200 transition"
                >
                  Comenzar experiencia
                </a>

                <a
                  href="#como-funciona"
                  className="rounded-full border border-white/10 bg-white/5 backdrop-blur px-7 py-4 font-semibold hover:bg-white/10 transition"
                >
                  Cómo funciona
                </a>
              </div>

              <div className="flex gap-8 mt-14">
                <div>
                  <p className="text-3xl font-bold mb-1">21</p>
                  <p className="text-zinc-400 text-sm">
                    días de experiencia
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold mb-1">+50</p>
                  <p className="text-zinc-400 text-sm">
                    desafíos interactivos
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold mb-1">100%</p>
                  <p className="text-zinc-400 text-sm">mobile-first</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 blur-3xl rounded-[40px]" />

              <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">
                <div className="rounded-[32px] bg-black/40 border border-white/10 p-6 mb-6">
                  <p className="text-sm text-violet-300 mb-3">Día 1 de 21</p>

                  <h2 className="text-3xl font-bold mb-4">
                    Comprensión clara
                  </h2>

                  <p className="text-zinc-300 leading-relaxed">
                    La mayoría de las personas intenta resolver problemas sin
                    entender realmente qué está pasando.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                    <p className="text-sm text-zinc-500 mb-2">
                      Challenge interactivo
                    </p>

                    <p className="font-medium">
                      Diferenciar hechos, emociones e interpretaciones.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                    <p className="text-sm text-zinc-500 mb-2">
                      Recurso del día
                    </p>

                    <p className="font-medium">
                      Cómo dejar de reaccionar automáticamente.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                    <p className="text-sm text-zinc-500 mb-2">Insight clave</p>

                    <p className="font-medium">
                      La claridad reduce ansiedad.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <section id="como-funciona" className="mt-40">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="uppercase tracking-[0.3em] text-violet-300 text-sm mb-5">
                Cómo funciona
              </p>

              <h2 className="text-5xl font-bold tracking-tight mb-6">
                Una experiencia distinta a un curso tradicional
              </h2>

              <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Cada día combina reflexión, desafíos interactivos, recursos y
                ejercicios prácticos diseñados para ayudarte a pensar mejor.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-5">
              {[
                {
                  number: "01",
                  title: "Observá",
                  text: "Entendé mejor qué está pasando antes de reaccionar.",
                  color: "text-violet-300",
                },
                {
                  number: "02",
                  title: "Ordená",
                  text: "Dividí problemas complejos en partes manejables.",
                  color: "text-cyan-300",
                },
                {
                  number: "03",
                  title: "Decidí",
                  text: "Generá alternativas y encontrá caminos posibles.",
                  color: "text-pink-300",
                },
                {
                  number: "04",
                  title: "Actuá",
                  text: "Convertí claridad mental en movimiento real.",
                  color: "text-emerald-300",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  className="rounded-[32px] border border-white/10 bg-white/5 p-8 hover:bg-white/[0.08] transition"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <p className={`${item.color} text-sm mb-4`}>
                    {item.number}
                  </p>

                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}