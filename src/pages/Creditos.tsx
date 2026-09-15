import { NavInstitucional } from "../components/layout/NavInstitucional";

// TODO: preencher com os integrantes reais do grupo.
const INTEGRANTES = ["Integrante 1", "Integrante 2", "Integrante 3"];

export default function Creditos() {
  return (
    <>
      <NavInstitucional />
      <main className="mx-auto flex max-w-2xl flex-col gap-6 p-6">
        <h1 className="text-2xl font-semibold">Créditos</h1>

        <section>
          <h2 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            Instituições
          </h2>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>FATEC Carapicuíba</li>
            <li>Centro Paula Souza (CPS)</li>
            <li>Curso de Análise e Desenvolvimento de Sistemas (ADS)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            Integrantes do grupo
          </h2>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            {INTEGRANTES.map((nome) => (
              <li key={nome}>{nome}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}