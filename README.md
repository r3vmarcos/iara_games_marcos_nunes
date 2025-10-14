🎮 Iara Games - Plataforma Web com Acessibilidade Avançada
Este projeto simula a página inicial e de cadastro de uma plataforma de distribuição de jogos, a Iara Games. O foco principal do desenvolvimento é a implementação de recursos de acessibilidade robustos (WCAG) para garantir uma experiência de usuário inclusiva, aliada a um design visual moderno com temas claro e escuro.

✨ Funcionalidades Principais
Design Responsivo: Layout otimizado para visualização em desktops e dispositivos móveis.

Modo Escuro Padrão: O tema principal utiliza uma paleta de cores escuras, inspirada em plataformas de jogos, para reduzir a fadiga visual.

Sistema de Acessibilidade Flutuante (Botão ♿): Um painel lateral, acessível de todas as páginas, que oferece controles avançados:

Tamanho do Texto: Ajuste para Normal, Médio e Grande.

Modos Visuais: Alternância entre Visual Claro, Visual Escuro, Alto Contraste e Monocromático.

Seleção de Fontes: Opções de fontes (Inter, Lexend, Baloo, Padrão) para melhor legibilidade, especialmente para dislexia (Lexend).

Leitor por Hover: Ferramenta de leitura de tela com delay de 1s ao pairar o mouse sobre elementos.

Navegação Acessível: Os cards de jogos e categorias são interativos, clicáveis e focáveis via teclado (tabindex) com animação de destaque.

Página de Cadastro (cadastro.html): Formulário completo integrado ao sistema de acessibilidade.

📂 Estrutura do Projeto
O projeto é construído apenas com tecnologias front-end (HTML, CSS e JavaScript), facilitando a execução em qualquer navegador.

.
├── index.html # Página principal da Loja
├── cadastro.html # Página de cadastro de usuário
├── reset.css # Reset básico de estilos
├── styles.css # Estilos principais, responsividade e TODAS as regras de acessibilidade
└── script.js # Lógica do carrossel, interação dos cards e controle do painel de Acessibilidade

🚀 Como Executar Localmente
Clone o repositório:

git clone [SEU_REPOSITORIO_AQUI]

Abra os arquivos:

Navegue até a pasta raiz do projeto.

Abra index.html ou cadastro.html diretamente em seu navegador.

Nota sobre Imagens: As imagens utilizadas nos cards (card_jogo.png, card_lista_jogo.png, etc.) são referenciadas localmente. Para visualizar o projeto completamente, você precisará adicionar arquivos PNG com esses nomes à pasta raiz do projeto.

🎨 Design e Tipografia
Paleta de Cores (Padrão Escuro): Azul Marinho Escuro (#1b2838), Destaques em Azul Ciano (#66c0f4) e Verde Acessível (#5c7e10).

Unidades de Medida: A maioria dos tamanhos de texto é definida em rem e a altura dos cards em px (140px), garantindo que a escala do texto funcione corretamente com os recursos de acessibilidade sem quebrar o layout.

Fontes Incluídas (via Google Fonts): Inter, Lexend (para acessibilidade disléxica) e Baloo Da 2.

💡 Próximos Passos Sugeridos
Implementar a validação de formulário em cadastro.js.

Adicionar um sistema de rotas simples para simular as páginas de Detalhes do Jogo.

Expandir a responsividade do index.html para tablets e telas ultra-wide.
