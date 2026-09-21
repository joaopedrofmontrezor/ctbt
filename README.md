# 🎾 CTBT - Centro de Treinamento de Beach Tennis (Matão/SP)

> **Landing Page Comercial de Alta Conversão & Performance**  
> Desenvolvida com **Next.js 16**, **React 19**, **TypeScript** e **CSS Modules**, totalmente responsiva e pronta para produção.

[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://ctbt-six.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

## 🌐 Demonstração Online

- **Deploy de Produção:** [https://ctbt-six.vercel.app/](https://ctbt-six.vercel.app/)
- **Localização:** Matão - SP

---

## 📌 Visão Geral do Projeto

Este projeto foi construído sob medida para o **CTBT (Centro de Treinamento de Beach Tennis)** em Matão/SP. Trata-se de uma aplicação web comercial de alta performance criada para:
1. **Converter visitantes em clientes** via WhatsApp para agendamento de quadras, aulas e eventos.
2. **Garantir 100% de responsividade** em qualquer tela (smartphones de 320px, tablets, notebooks e desktops ultrawide).
3. **Maximizar o SEO Local** com Schema.org JSON-LD para buscas no Google em Matão e região.
4. **Entregar experiência fluida e moderna** com drawer lateral mobile, modal interativo de agendamento, acordeão de dúvidas e botão voltar ao topo.

---

## 🚀 Tecnologias & Engenharia

- **Core:** [Next.js 16](https://nextjs.org/) com Turbopack e App Router.
- **UI & Runtime:** [React 19](https://react.dev/).
- **Tipagem Estática:** [TypeScript 5](https://www.typescriptlang.org/).
- **Estilização:** CSS Modules (Vanilla CSS) com design system em variáveis nativas e tipografia fluida (`clamp()`).
- **Otimização de Imagens:** `next/image` com suporte automático a formatos modernos (WebP/AVIF) e prevenção de CLS (Cumulative Layout Shift).
- **SEO & Dados Estruturados:** Schema.org `SportsActivityLocation`, Open Graph, `robots.ts` e `sitemap.ts` nativos.
- **Qualidade de Código:** ESLint 9 configurado (0 erros e 0 warnings).

---

## 📁 Arquitetura do Repositório

```
ctbt/
├── public/
│   ├── favicon.svg             # Favicon SVG vetorial
│   └── images/                 # Imagens da aplicação
│       ├── arena.png           # Foto da infraestrutura das quadras
│       ├── bar.png             # Foto do Bar & Gastronomia
│       ├── hero.png            # Banner de fundo principal
│       └── logo.png            # Logo oficial do CTBT
├── src/
│   ├── app/
│   │   ├── apple-icon.png      # Ícone para dispositivos Apple / iOS
│   │   ├── favicon.ico         # Favicon universal
│   │   ├── globals.css         # Variáveis de cores, reset e utilitários
│   │   ├── icon.png            # Ícone de app do Next.js
│   │   ├── layout.tsx          # Viewport, metadados, Schema.org JSON-LD e fontes
│   │   ├── page.tsx            # Orquestrador das seções da página
│   │   ├── robots.ts           # Geração dinâmica do robots.txt
│   │   └── sitemap.ts          # Geração dinâmica do sitemap.xml
│   └── components/
│       ├── Arena/              # Detalhes das quadras e infraestrutura
│       ├── BookingModal/       # Modal inteligente de qualificação de agendamento
│       ├── Footer/             # Rodapé institucional e links rápidos
│       ├── Gastronomy/         # Seção Bar & Gastronomia e drinks
│       ├── Header/             # Topbar fixa com gaveta deslizante mobile
│       ├── Hero/               # Seção principal com CTAs e estatísticas
│       ├── Location/           # Endereço, mapa interativo e FAQ em Accordion
│       ├── Plans/              # Modalidades, Aulas, Mensalistas e Eventos
│       ├── ScrollToTop/        # Botão flutuante ergonômico voltar ao topo
│       ├── Teachers/           # Apresentação dos professores e depoimentos
│       └── WhatsAppButton/     # Botão flutuante com popover de atendimento
├── next.config.ts              # Configuração do Next.js
├── package.json                # Dependências e scripts
└── tsconfig.json               # Configuração do compilador TypeScript
```

---

## ⚡ Principais Funcionalidades

### 1. 📱 Responsividade Total & Mobile First
- Navegação mobile via **Drawer lateral deslizante** com bloqueio de rolagem do fundo (`body scroll lock`), tecla `Esc` e fechamento por toque externo.
- Layout fluido com uso de `clamp()` para tipografia e espaçamentos sem quebras ou transbordamentos horizontais.
- Adaptação perfeita testada desde **320px** (iPhone SE, telas compactas) até **4K**.

### 2. 💬 Motor de Conversão & Triagem no WhatsApp
- **Modal de Agendamento (`BookingModal`)**: Permite que o usuário escolha o serviço (Locação, Aula, Mensalista, Evento), período do dia e quantidade de jogadores, gerando uma mensagem pré-formatada para a recepção.
- **Botão Flutuante do WhatsApp (`WhatsAppButton`)**: Popover de acesso rápido com mensagens diretas contextualizadas.

### 3. 🎯 Seção Comercial de Planos & Serviços (`Plans`)
- Divisão estratégica em 4 modalidades:
  - **Locação Avulsa** (quadra por hora com iluminação inclusa)
  - **Aulas de Beach Tennis** (selo *Mais Procurado*, iniciante ao avançado)
  - **Plano Mensalista** (horário fixo e vantagens exclusivas)
  - **Eventos & Torneios** (aniversários e confraternizações)
  - **Banner Corporativo** (parcerias para empresas da cidade)

### 4. ❓ Dúvidas Frequentes Interativas (Accordion)
- 6 perguntas reais respondidas sobre empréstimo de raquetes, iniciantes, iluminação noturna até 22h, funcionamento do bar e agendamento.

### 5. 🔍 SEO Local & Dados Estruturados (Google Rich Snippets)
- Injeção automática de dados `SportsActivityLocation` e `LocalBusiness` no `<head>` com endereço em Matão, coordenadas de geolocalização, horários oficiais de funcionamento e comodidades da arena.

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18.18+ ou superior
- Gerenciador de pacotes `npm` ou `yarn`

### Passo a passo
1. Clone este repositório:
   ```bash
   git clone https://github.com/joaopedrofmontrezor/ctbt.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd ctbt
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento com Turbopack |
| `npm run build` | Compila e gera o bundle estático e otimizado para produção |
| `npm run start` | Inicia a aplicação compilada em modo produção |
| `npm run lint` | Executa o ESLint para validar boas práticas e sintaxe |

---

## 🎨 Guia de Customização para o Cliente

Quando a empresa fornecer as fotos definitivas da arena e contatos finais:

### 1. Substituir Fotos Reais
Basta substituir os arquivos na pasta `public/images/` mantendo os mesmos nomes (ou atualizando as referências):
- `public/images/logo.png` (Logo oficial da arena)
- `public/images/hero.png` (Foto principal do topo/fundo)
- `public/images/arena.png` (Foto das quadras de areia)
- `public/images/bar.png` (Foto do espaço gastronômico/bar)

### 2. Alterar Contatos e Horários
- **WhatsApp:** Altere o número `5516997168587` nos componentes `Header`, `Hero`, `Plans`, `Location` e `WhatsAppButton`.
- **Endereço e Horários:** Podem ser editados diretamente no componente `src/components/Location/Location.tsx` e no Schema.org em `src/app/layout.tsx`.

---

## 🚀 Deploy e Domínio Próprio

O projeto está configurado para deploy contínuo na [Vercel](https://vercel.com/):
1. Importe o repositório do GitHub na Vercel.
2. O framework Next.js será detectado automaticamente.
3. Clique em **Deploy**.
4. Para apontar o domínio oficial da empresa (ex: `ctbt.com.br`):
   - Acesse **Project Settings > Domains** na Vercel.
   - Adicione o domínio e configure os registros DNS (CNAME e A record) indicados.

---

## 📍 Informações do Estabelecimento

- **Nome:** CTBT - Centro de Treinamento de Beach Tennis
- **Endereço:** Av. Antônio Gorgatti, 1807 - Imperador, Matão - SP, CEP 15990-000
- **Horário:** Seg a Sex: 09h às 22h \| Sáb e Dom: 07h às 19h
- **WhatsApp:** [(16) 99716-8587](https://wa.me/5516997168587)
- **Instagram:** [@ctbtoficial](https://instagram.com/ctbtoficial)

---

## 📄 Licença

Este projeto é de uso exclusivo para o cliente **CTBT Beach Tennis Matão**. Todos os direitos reservados.
