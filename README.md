# 🎾 CTBT Beach Tennis — Case de Sucesso Comercial

> **Case Study de Engenharia de Software & Landing Page de Alta Conversão**  
> Desenvolvido e entregue sob medida para o **CTBT (Centro de Treinamento de Beach Tennis)** em Matão - SP.  
> Projeto construído com **Next.js 16 (App Router)**, **React 19**, **TypeScript** e **CSS Modules**, com foco em conversão de leads, SEO local e responsividade de ponta.

[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://ctbt-six.vercel.app/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3%20(Turbopack)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Performance](https://img.shields.io/badge/Core%20Web%20Vitals-Optimized-brightgreen?style=for-the-badge&logo=googlechrome)](https://web.dev/vitals/)

---

## 🌐 Demonstração Online

- **URL de Produção:** [https://ctbt-six.vercel.app/](https://ctbt-six.vercel.app/)
- **Segmento:** Esporte, Lazer & Gastronomia (Arena de Beach Tennis)
- **Status:** Entregue e em Produção

---

## 📌 Contexto de Negócio & O Desafio

O **CTBT** é um complexo esportivo premium em Matão/SP que combina 6 quadras profissionais de areia tratada, centro de treinamento com professores credenciados e um bar gastronômico completo para confraternizações.

### O Problema do Cliente
A arena necessitava de uma plataforma digital que:
1. **Atraísse e convertesse visitantes em clientes reais** de forma rápida, diminuindo o tempo de atendimento da recepção.
2. **Posicionasse a marca nos mecanismos de busca** (Google Search e Google Maps) nas cidades de Matão, Araraquara e região.
3. **Oferecesse uma experiência mobile impecável**, já que mais de 85% do tráfego do público de esportes e lazer acessa pelo celular.

### A Solução Entregue
Uma landing page comercial de alta conversão, extremamente veloz, com triagem inteligente de agendamentos no WhatsApp, catálogo estruturado de planos/serviços, FAQ interativo para derrubar objeções e dados estruturados Schema.org JSON-LD para liderar as buscas locais.

---

## 🧠 Decisões de Engenharia & Arquitetura (Trade-offs)

Para garantir que o produto final tivesse excelência técnica e alta manutenibilidade, as seguintes escolhas arquiteturais foram adotadas:

### 1. Next.js 16 (App Router) com Renderização Estática (SSG)
- **Motivação:** Como os dados institucionais e ofertas da arena têm taxa de alteração controlada, todas as rotas são pré-renderizadas estaticamente em tempo de build (`Static Generation`).
- **Impacto:** **Time to First Byte (TTFB)** inferior a 50ms, carregamento quase instantâneo na borda (Edge Vercel) e tolerância a picos de tráfego sem custos adicionais de servidor.

### 2. CSS Modules (Vanilla CSS) vs Bibliotecas Pesadas de UI
- **Motivação:** Optou-se por CSS Modules com design system baseado em variáveis nativas (`globals.css`) em vez de bibliotecas pesadas de componentes.
- **Impacto:** **Zero runtime overhead** de JavaScript para estilização, eliminação de CSS não utilizado e liberdade absoluta para criar animações fluidas, efeitos glassmorphism e controle cirúrgico de breakpoints.

### 3. Engenharia Mobile-First & Responsividade Cirúrgica (320px a 4K)
- **Tipografia Fluida (`clamp()`):** Títulos e textos utilizam funções matemáticas `clamp()` que escalam suavemente conforme a largura da viewport, eliminando quebras desajeitadas de palavras em celulares compactos (ex: iPhone SE e dobráveis de 320px).
- **Small Viewport Height (`100svh`):** Evita saltos de layout causados pelo recolhimento da barra de navegação do Chrome/Safari no mobile.
- **Drawer Lateral com Body Scroll Lock:** O menu mobile foi construído como um drawer deslizante suave com bloqueio automático do scroll da página (`overflow: hidden`), fechamento com tecla `Esc` e clique no backdrop.
- **Botão Voltar ao Topo Ergonômico:** Posicionado no canto inferior esquerdo para criar simetria perfeita e **não colidir** com o botão flutuante de atendimento do WhatsApp (canto direito).

### 4. Otimização de Ativos & Core Web Vitals
- Utilização estrita do componente `<Image />` do Next.js com prioridade no LCP (Logo e Banner Hero), dimensões explícitas para **Zero Cumulative Layout Shift (CLS = 0)** e conversão automática para WebP/AVIF.

### 5. SEO Local Avançado (Schema.org JSON-LD)
- Injeção semântica de dados estruturados do tipo `SportsActivityLocation` e `LocalBusiness` diretamente no `<head>`, especificando coordenadas geográficas de Matão, endereço completo, horários de funcionamento, telefone de contato e comodidades (areia tratada, bar, vestiários, refletores LED).

---

## ⚡ Principais Funcionalidades da Aplicação

- **Modal Inteligente de Agendamento (`BookingModal`):** Interface interativa que permite ao cliente selecionar o serviço desejado (Locação, Aula, Mensalista, Evento), período do dia e quantidade de jogadores. Ao confirmar, gera uma mensagem pré-formatada e qualificada direto para a recepção no WhatsApp.
- **Catálogo de Planos & Modalidades (`Plans`):** Seção comercial categorizada com planos de locação avulsa, aulas com professores, horários para mensalistas e pacote corporativo para empresas locais.
- **Dúvidas Frequentes em Accordion (`Location`):** Accordion expansível animado respondendo às 6 maiores dúvidas de novos praticantes (empréstimo de raquetes, iniciantes do zero, iluminação noturna, etc.).
- **Botão Flutuante do WhatsApp com Popover (`WhatsAppButton`):** Atendimento rápido com opções de início imediato de conversa.
- **Botão Voltar ao Topo (`ScrollToTop`):** Surge suavemente após rolar 350px e executa rolagem fluida até o topo.
- **Arquivos Nativos de Indexação:** `robots.ts` e `sitemap.ts` gerados automaticamente pelo Next.js.

---

## 📁 Estrutura de Pastas e Módulos

```
ctbt/
├── public/
│   ├── favicon.svg             # Ícone vetorial SVG
│   └── images/                 # Assets de mídia da arena
│       ├── arena.png           # Foto da infraestrutura das quadras
│       ├── bar.png             # Foto do espaço gastronômico
│       ├── hero.png            # Imagem de capa do Hero
│       └── logo.png            # Logo oficial do CTBT
├── src/
│   ├── app/
│   │   ├── apple-icon.png      # Ícone para dispositivos iOS / Apple
│   │   ├── favicon.ico         # Favicon universal
│   │   ├── globals.css         # Variáveis de design, reset e utilitários
│   │   ├── icon.png            # Ícone de app PWA do Next.js
│   │   ├── layout.tsx          # Viewport, fontes, metadados e Schema.org JSON-LD
│   │   ├── page.tsx            # Página orquestradora principal
│   │   ├── robots.ts           # Geração nativa do robots.txt
│   │   └── sitemap.ts          # Geração nativa do sitemap.xml
│   └── components/
│       ├── Arena/              # Apresentação técnica das quadras
│       ├── BookingModal/       # Modal de triagem e agendamento para WhatsApp
│       ├── Footer/             # Rodapé institucional e links rápidos
│       ├── Gastronomy/         # Cardápio, drinks e lounge
│       ├── Header/             # Topbar fixa com gaveta deslizante mobile
│       ├── Hero/               # Seção principal com CTAs e estatísticas
│       ├── Location/           # Endereço, mapa interativo e FAQ em Accordion
│       ├── Plans/              # Modalidades, Aulas, Mensalistas e Eventos
│       ├── ScrollToTop/        # Botão flutuante voltar ao topo
│       ├── Teachers/           # Apresentação dos professores e depoimentos
│       └── WhatsAppButton/     # Botão flutuante com popover de atendimento
├── next.config.ts              # Configuração do Next.js
├── package.json                # Dependências e scripts
└── tsconfig.json               # Configurações estritas do TypeScript
```

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** 18.18+ ou superior
- **npm** (incluso no Node) ou **yarn**

### Instalação e Execução
```bash
# 1. Clonar o repositório
git clone https://github.com/joaopedrofmontrezor/ctbt.git

# 2. Acessar o diretório
cd ctbt

# 3. Instalar dependências
npm install

# 4. Executar em ambiente de desenvolvimento (com Turbopack)
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local com Turbopack e Hot Reload rápido |
| `npm run build` | Compila o bundle estático de produção e valida tipos TypeScript |
| `npm run start` | Executa a aplicação já compilada em modo produção |
| `npm run lint` | Executa o ESLint para validar sintaxe e conformidade (0 erros, 0 avisos) |

---

## 📊 Métricas de Qualidade & Padrão de Engenharia

- **TypeScript:** 100% tipado estritamente, sem uso de `any`.
- **ESLint:** Código limpo e padronizado, aprovado com zero erros e zero avisos.
- **Acessibilidade (a11y):** Marcações semânticas (`main`, `header`, `section`, `footer`), atributos `aria-expanded`, `aria-label`, foco visual e suporte a navegação por teclado.
- **Performance:** Imagens otimizadas com lazy loading e decoding assíncrono, CSS modular sem bibliotecas de terceiros inflacionando o bundle.

---

## 👨‍💻 Desenvolvedor & Autor

Projeto concebido, desenvolvido e entregue por:

**João Pedro Montrezor**  


- **GitHub:** [@joaopedrofmontrezor](https://github.com/joaopedrofmontrezor)
- **Repositório:** [github.com/joaopedrofmontrezor/ctbt](https://github.com/joaopedrofmontrezor/ctbt)

---

## 📄 Licença & Propriedade

Desenvolvido comercialmente para o **CTBT - Centro de Treinamento de Beach Tennis Matão**. Todos os direitos reservados.
