import { useState } from "react";
import { questoes } from "../data/questions";
import { useSimulado } from "../hooks/useSimulado";
import { CardQuestao } from "../components/question/CardQuestao";
import { BarraNavegacaoQuestoes } from "../components/question/BarraNavegacaoQuestoes";
import { Header } from "../components/layout/Header";
import { ModalEstatisticas } from "../components/modals/ModalEstatisticas";

export default function Simulado() {
  const { respostas, selecionarAlternativa, corrigirQuestaoAtual } = useSimulado();
  const [questaoAtualId, setQuestaoAtualId] = useState("01");
  const [modalEstatisticasAberto, setModalEstatisticasAberto] = useState(false);

  const questaoAtual = questoes.find((q) => q.id === questaoAtualId);
  const respostaAtual = questaoAtual ? respostas[questaoAtual.id] : undefined;

  if (!questaoAtual) return <p className="p-6">Cadastre as questões em data/questions.ts.</p>;

  return (
    <>
      <Header questaoAtual={Number(questaoAtualId)} totalQuestoes={questoes.length} />
      <main className="flex flex-col gap-6 p-6">
        <CardQuestao
          questao={questaoAtual}
          resposta={respostaAtual}
          onSelecionarAlternativa={(opcao) => selecionarAlternativa(questaoAtual.id, opcao)}
        />

        <div className="mx-auto flex max-w-3xl justify-center gap-2">
          <button
            disabled={!respostaAtual}
            onClick={() => corrigirQuestaoAtual(questaoAtual)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
          >
            Corrigir
          </button>
          <button
            disabled={!respostaAtual}
            onClick={() => setModalEstatisticasAberto(true)}
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 disabled:opacity-40 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            Estatísticas
          </button>
        </div>

        <BarraNavegacaoQuestoes
          totalQuestoes={questoes.length}
          questaoAtualId={questaoAtualId}
          respostas={respostas}
          onNavegar={setQuestaoAtualId}
        />
      </main>

      <ModalEstatisticas
        aberto={modalEstatisticasAberto}
        onFechar={() => setModalEstatisticasAberto(false)}
        questao={questaoAtual}
        resposta={respostaAtual}
      />
    </>
  );
}