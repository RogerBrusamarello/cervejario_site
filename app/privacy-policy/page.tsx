import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, Shield, Eye, Database, Users, Lock, FileText } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-amber-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo-icon.png" alt="Cervejário Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-2xl font-bold text-amber-800">Cervejário</span>
            </div>
            <Link href="/" className="flex items-center text-amber-800 hover:text-amber-600 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Site
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold text-amber-900 mb-4">Política de Privacidade</h1>
            <p className="text-xl text-amber-700">Cervejário - Seu catálogo pessoal de cervejas</p>
            <p className="text-sm text-amber-600 mt-2">Última atualização: 30 de junho de 2025</p>
          </div>

          <div className="prose prose-amber max-w-none">
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">1. Visão Geral</h2>
              </div>
              <p className="text-amber-700 leading-relaxed">
                O Cervejário ("nós", "nosso" ou "aplicativo") respeita sua privacidade e está comprometido em proteger
                suas informações pessoais. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e
                protegemos suas informações quando você usa nosso aplicativo móvel.
              </p>
              <p className="text-amber-700 leading-relaxed">
                <strong>Você bebe. O Cervejário lembra.</strong> - E fazemos isso respeitando totalmente sua
                privacidade.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">2. Informações que Coletamos</h2>
              </div>

              <h3 className="text-xl font-semibold text-amber-800 mt-6 mb-3">2.1 Informações Fornecidas por Você</h3>
              <ul className="text-amber-700 space-y-2">
                <li>
                  <strong>Dados das Cervejas:</strong> Nome, cervejaria, tipo, teor alcoólico (ABV), avaliações,
                  observações pessoais
                </li>
                <li>
                  <strong>Fotos:</strong> Imagens das cervejas que você adiciona ao catálogo
                </li>
                <li>
                  <strong>Localização:</strong> Locais onde você consumiu as cervejas (apenas quando fornecido
                  voluntariamente)
                </li>
                <li>
                  <strong>Datas:</strong> Datas de consumo das cervejas
                </li>
                <li>
                  <strong>Preferências:</strong> Configurações do aplicativo (tema claro/escuro, etc.)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-amber-800 mt-6 mb-3">
                2.2 Informações Coletadas Automaticamente
              </h3>
              <ul className="text-amber-700 space-y-2">
                <li>
                  <strong>Dados de Uso:</strong> Como você interage com o aplicativo
                </li>
                <li>
                  <strong>Informações do Dispositivo:</strong> Tipo de dispositivo, sistema operacional, versão do
                  aplicativo
                </li>
                <li>
                  <strong>Dados de Publicidade:</strong> Identificadores de publicidade para exibição de anúncios
                  relevantes
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">3. Como Usamos suas Informações</h2>
              </div>
              <ul className="text-amber-700 space-y-2">
                <li>
                  <strong>Funcionalidade Principal:</strong> Armazenar e organizar seu catálogo pessoal de cervejas
                </li>
                <li>
                  <strong>Busca e Filtros:</strong> Permitir que você encontre cervejas por nome, cervejaria ou local
                </li>
                <li>
                  <strong>Experiência Personalizada:</strong> Manter suas preferências e configurações
                </li>
                <li>
                  <strong>Melhorias do App:</strong> Analisar o uso para melhorar funcionalidades
                </li>
                <li>
                  <strong>Publicidade:</strong> Exibir anúncios relevantes através do Google AdMob
                </li>
                <li>
                  <strong>Suporte:</strong> Responder a suas dúvidas e solicitações
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">4. Armazenamento e Segurança</h2>
              </div>

              <h3 className="text-xl font-semibold text-amber-800 mt-6 mb-3">4.1 Armazenamento Local</h3>
              <p className="text-amber-700 leading-relaxed">
                Seus dados são armazenados localmente em seu dispositivo. Isso significa que suas informações permanecem
                sob seu controle e não são enviadas para nossos servidores, exceto quando necessário para
                funcionalidades específicas.
              </p>

              <h3 className="text-xl font-semibold text-amber-800 mt-6 mb-3">4.2 Medidas de Segurança</h3>
              <ul className="text-amber-700 space-y-2">
                <li>Criptografia de dados sensíveis</li>
                <li>Acesso restrito às informações</li>
                <li>Atualizações regulares de segurança</li>
                <li>Monitoramento de atividades suspeitas</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">5. Compartilhamento de Informações</h2>
              </div>
              <p className="text-amber-700 leading-relaxed">
                <strong>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros</strong>,
                exceto nas seguintes situações:
              </p>
              <ul className="text-amber-700 space-y-2 mt-4">
                <li>
                  <strong>Google AdMob:</strong> Para exibição de anúncios personalizados (dados anonimizados)
                </li>
                <li>
                  <strong>Prestadores de Serviços:</strong> Empresas que nos ajudam a operar o aplicativo
                </li>
                <li>
                  <strong>Exigências Legais:</strong> Quando requerido por lei ou autoridades competentes
                </li>
                <li>
                  <strong>Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">6. Seus Direitos</h2>
              </div>
              <p className="text-amber-700 leading-relaxed">Você tem os seguintes direitos sobre suas informações:</p>
              <ul className="text-amber-700 space-y-2 mt-4">
                <li>
                  <strong>Acesso:</strong> Visualizar todas as informações que coletamos sobre você
                </li>
                <li>
                  <strong>Correção:</strong> Corrigir informações incorretas ou incompletas
                </li>
                <li>
                  <strong>Exclusão:</strong> Solicitar a exclusão de suas informações
                </li>
                <li>
                  <strong>Portabilidade:</strong> Exportar seus dados em formato legível
                </li>
                <li>
                  <strong>Restrição:</strong> Limitar o processamento de suas informações
                </li>
                <li>
                  <strong>Objeção:</strong> Opor-se ao processamento para fins específicos
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">7. Publicidade</h2>
              </div>
              <p className="text-amber-700 leading-relaxed">
                O Cervejário exibe anúncios através do Google AdMob para manter o aplicativo gratuito. Estes anúncios
                podem ser personalizados com base em seus interesses. Você pode:
              </p>
              <ul className="text-amber-700 space-y-2 mt-4">
                <li>Desativar anúncios personalizados nas configurações do seu dispositivo</li>
                <li>Optar por não receber anúncios baseados em interesses</li>
                <li>Limitar o rastreamento de publicidade</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">8. Menores de Idade</h2>
              </div>
              <p className="text-amber-700 leading-relaxed">
                O Cervejário é destinado a usuários maiores de 18 anos. Não coletamos intencionalmente informações de
                menores de idade. Se você é pai/mãe ou responsável e acredita que seu filho forneceu informações
                pessoais, entre em contato conosco.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">9. Alterações nesta Política</h2>
              </div>
              <p className="text-amber-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças
                significativas através do aplicativo ou por outros meios apropriados. Recomendamos que revise esta
                política regularmente.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">10. Contato</h2>
              </div>
              <p className="text-amber-700 leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações, entre
                em contato conosco:
              </p>
              <div className="bg-amber-50 p-6 rounded-lg mt-4">
                <p className="text-amber-800 font-semibold mb-2">Cervejário - Suporte</p>
                <p className="text-amber-700 flex items-center mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  suporte@cervejario.app
                </p>
                <p className="text-amber-700">
                  <strong>Horário de Atendimento:</strong> Segunda a Sexta, 9h às 18h (horário de Brasília)
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-900 m-0">11. Conformidade Legal</h2>
              </div>
              <p className="text-amber-700 leading-relaxed">Esta Política de Privacidade está em conformidade com:</p>
              <ul className="text-amber-700 space-y-2 mt-4">
                <li>
                  <strong>LGPD</strong> - Lei Geral de Proteção de Dados Pessoais (Brasil)
                </li>
                <li>
                  <strong>GDPR</strong> - Regulamento Geral sobre a Proteção de Dados (União Europeia)
                </li>
                <li>
                  <strong>CCPA</strong> - California Consumer Privacy Act (Califórnia, EUA)
                </li>
                <li>
                  <strong>Marco Civil da Internet</strong> (Brasil)
                </li>
              </ul>
            </section>
          </div>

          <div className="border-t border-amber-200 pt-8 mt-12 text-center">
            <p className="text-amber-600 italic text-lg mb-4">
              "Você bebe. O Cervejário lembra. E protege sua privacidade."
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Site Principal
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/images/logo-icon.png" alt="Cervejário Logo" width={32} height={32} className="rounded" />
            <span className="text-xl font-bold">Cervejário</span>
          </div>
          <p className="text-amber-200 mb-2">Você bebe. O Cervejário lembra.</p>
          <p className="text-amber-300 text-sm">© 2025 Cervejário. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
