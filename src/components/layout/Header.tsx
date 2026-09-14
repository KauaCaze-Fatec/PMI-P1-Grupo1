import { useTheme } from "../../context/ThemeContext";

interface HeaderProps {
  questaoAtual?: number;
  totalQuestoes?: number;
}

export function Header({ questaoAtual, totalQuestoes }: HeaderProps) {
  const { tema, alternarTema } = useTheme();
  const modoEscuroAtivo = tema === "dark";

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-white px-4 py-3 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      <span className="text-sm font-semibold">Simulado ENADE</span>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          aria-pressed={modoEscuroAtivo}
          onClick={alternarTema}
          className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100 aria-pressed:border-blue-600 aria-pressed:bg-blue-600 aria-pressed:text-white dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          Modo escuro
        </button>

        {questaoAtual && totalQuestoes && (
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            Questão {String(questaoAtual).padStart(2, "0")} / {totalQuestoes}
          </span>
        )}
      </div>
    </header>
  );
}