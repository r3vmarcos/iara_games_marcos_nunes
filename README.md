Acesse a pagina demo em [<< AQUI >>](https://r3vmarcos.github.io/iara_games_marcos_nunes/index.html)

🎮 Iara Games - Plataforma Web com Acessibilidade Avançada
Este projeto simula a página inicial e de registo de uma plataforma de distribuição de jogos, a Iara Games. O foco principal do desenvolvimento é a implementação de recursos de acessibilidade robustos (WCAG) para garantir uma experiência de utilizador inclusiva, aliada a um design visual moderno com temas claro e escuro.

✨ Funcionalidades Principais
Design Responsivo: Layout otimizado para visualização em desktops e dispositivos móveis.

Modo Escuro Padrão: O tema principal utiliza uma paleta de cores escuras, inspirada em plataformas de jogos, para reduzir a fadiga visual.

Sistema de Acessibilidade Flutuante (Botão ♿): Um painel lateral, acessível de todas as páginas, que oferece controlos avançados:

Tamanho do Texto: Ajuste para Normal, Médio e Grande.

Modos Visuais: Alternância entre Visual Claro, Visual Escuro, Alto Contraste e Monocromático.

Seleção de Fontes: Opções de fontes (Inter, Lexend, Baloo, Padrão) para melhor legibilidade, especialmente para dislexia (Lexend).

Leitor por Hover: Ferramenta de leitura de ecrã com atraso de 1s ao pairar o rato sobre elementos.

Carrossel Automático e Interativo:

Passagem Automática: Os slides mudam a cada 3 segundos.

Navegação Manual: Setas de navegação (esquerda/direita) e pontos de navegação clicáveis.

Navegação Acessível: Os cartões de jogos e categorias são interativos, clicáveis e focáveis via teclado (tabindex) com animação de destaque.

Página de Registo (pages/cadastro.html): Formulário completo com validação HTML5 e totalmente integrado ao sistema de acessibilidade.

📐 Especificações de Design e Tamanhos
Carrossel Principal
Dimensões da Imagem: O carrossel é desenhado para imagens widescreen.

Conteúdo Sobreposto: Cada slide contém o nome do jogo, o desconto e o preço final, com alto contraste para garantir a legibilidade.

Cards de Jogos
Promoções e Eventos (.card-jogo):

Dimensões da Imagem: 460px (largura) x 215px (altura). A altura é controlada pela proporção da imagem (height: auto), garantindo que não haja distorção.

Novos e Notáveis (.card-lista-jogo):

Dimensões da Imagem: 184px (largura) x 69px (altura). O cartão é "afinado" para otimizar o espaço vertical na lista.

Categorias (.card-categoria):

O texto fica centralizado sobre a imagem para um design mais integrado.

♿ A Importância das Funções de Acessibilidade
A acessibilidade não é um extra, mas sim um pilar fundamental para garantir que todos os utilizadores possam interagir com o site.

Ajuste de Texto e Fontes: Permite que utilizadores com baixa visão ou dislexia configurem o site para uma leitura confortável. Fontes como Lexend foram desenhadas especificamente para melhorar a velocidade de leitura.

Modos Visuais:

Alto Contraste: Essencial para pessoas com baixa visão, pois maximiza a diferença entre o texto e o fundo.

Monocromático: Ajuda utilizadores com daltonismo a perceber a interface sem depender de cores.

Leitor de Tela (Hover): Oferece um suporte auditivo para quem tem dificuldades de leitura ou deficiência visual, lendo o conteúdo em voz alta.

📂 Estrutura do Projeto
O projeto está organizado com uma estrutura clara de pastas para facilitar a manutenção:

/
├── index.html            # Página principal da Loja
├── pages/
│   └── cadastro.html     # Página de registo de utilizador
├── css/
│   ├── reset.css         # Reset básico de estilos
│   ├── styles.css        # Estilos principais, responsividade e TODAS as regras de acessibilidade
│   └── cadastro.css      # Estilos específicos da página de registo
├── js/
│   └── script.js         # Lógica do carrossel, interação dos cartões e controlo do painel de Acessibilidade
└── assets/
    ├── logo.png
    ├── page/
    │   ├── banner_festival.png
    │   └── ...
    ├── carrossel/
    │   ├── carrossel_slide_1.png
    │   └── ...
    └── games/
        └── [nome_do_jogo]/
            ├── [nome_do_jogo]_header.jpg
            └── [nome_do_jogo]_capsule.jpg

🚀 Como Executar Localmente
Clone o repositório:

git clone [SEU_REPOSITORIO_AQUI]

Abra os ficheiros:

Navegue até à pasta raiz do projeto.

Abra index.html diretamente no seu navegador.
