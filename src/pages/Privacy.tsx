export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-secondary font-body">
      <h1 className="text-3xl font-display text-primary mb-8">
        Política de Privacidade
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-display text-primary mb-2">
            1. Coleta de Dados
          </h2>
          <p>
            O aplicativo não coleta dados pessoais sensíveis. São armazenadas apenas informações mínimas necessárias para funcionamento, como histórico de uso e preferências locais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-primary mb-2">
            2. Uso das Informações
          </h2>
          <p>
            As informações ficam restritas ao próprio dispositivo e não são compartilhadas com terceiros, exceto quando exigido por lei ou pelas lojas oficiais (App Store e Google Play).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-primary mb-2">
            3. Armazenamento
          </h2>
          <p>
            Todos os dados de avaliações e créditos são armazenados localmente no dispositivo, sem envio automático a servidores externos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-primary mb-2">
            4. Alterações
          </h2>
          <p>
            Esta política poderá ser atualizada periodicamente para refletir melhorias ou exigências legais. A versão atualizada estará sempre disponível dentro do aplicativo e neste site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-primary mb-2">
            5. Consentimento
          </h2>
          <p>
            Ao utilizar o aplicativo, o usuário concorda com os termos desta Política de Privacidade.
          </p>
        </section>
      </div>

      <div className="mt-12">
        <button
          onClick={() => window.history.back()}
          className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-display text-lg hover:from-primary-dark hover:to-accent-dark transition-all duration-300"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

