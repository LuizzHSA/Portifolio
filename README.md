# Portfólio — Luiz Henrique

Site pessoal em uma única página (PT‑BR) para apresentar minha jornada, projetos, habilidades e formas de contato. Foco em experiência limpa, acessibilidade, SEO e performance.

## Visão Geral

Este portfólio foi construído com HTML, CSS e JavaScript puros, seguindo um design minimalista e responsivo. Inclui seções de herói, sobre, “Minha jornada” com cards, habilidades, projetos, currículo e contato com formulário validado e toast acessível.

## Destaques

- Navegação responsiva com menu mobile acessível (ARIA) e realce de link ativo (`aria-current`).
- Seção “Minha jornada” com cards de áreas: Web, Mobile, Back‑End e UI/UX.
- Grade de projetos com chips e ações (ver projeto/código).
- Formulário com validação de campos e notificação de sucesso (toast com `role="status"`).
- Imagens com `loading="lazy"` e `decoding="async"` para melhor performance.
- Metadados de SEO e Open Graph configurados no `<head>`.

## Stack

- HTML5, CSS3, JavaScript (ES6+)
- Fontes do sistema (Inter como preferencial) e ícones via Font Awesome

## Estrutura do Projeto

```
├── README.md
├── assets/
│   └── curriculo.pdf
├── index.html
├── script.js
└── style.css
```

## Executar Localmente

Opção rápida:
- Abra `index.html` diretamente no navegador.

Com servidor estático (recomendado para testar rotas/OG):
- Python: `python -m http.server 8000`
- Node (serve): `npx serve .`
- Extensão Live Server (VS Code): clique em “Go Live”.

A pré-visualização local costuma ficar em `http://localhost:8000/`.

## Personalização

- Metadados (título, descrição, Open Graph): em `index.html` dentro de `<head>`.
- Links sociais e contato: em `index.html` na seção “Entre em contato” (`.social-icons` e `.info-item`).
- Cores e tipografia: em `style.css` (variáveis CSS em `:root`).
- Imagens de projeto/herói: substitua placeholders e ajuste caminhos em `index.html`.

## Acessibilidade (A11y)

- Menu mobile com `aria-controls`, `aria-expanded` e rótulos adequados.
- Navegação marca o link atual com `aria-current="page"`.
- Formulário com `aria-describedby` para mensagens de erro e `autocomplete` nos campos.
- Toast com `role="status"` e `aria-live="polite"`.

## SEO & Metadados

- `<title>` e `<meta name="description">` configurados para o perfil do desenvolvedor (Luiz Henrique).
- Open Graph (`og:title`, `og:description`, `og:url`, `theme-color`).
- Recomenda-se configurar `og:image` e favicon (ex.: `assets/og-image.png`, `assets/favicon.ico`).

## Performance

- `loading="lazy"` e `decoding="async"` em imagens, com exceção da imagem principal (LCP).
- CSS organizado com grid/utilitários para minimizar repaints.

## Paleta de Cores

Variáveis em `style.css`:

- `--color-bg`: `#ffffff`
- `--color-surface`: `#ffffff`
- `--color-elev`: `#f5f7fa`
- `--color-primary`: `#2563eb`
- `--color-accent`: `#0ea5e9`
- `--color-border`: `#e5e7eb`
- `--color-text`: `#111827`
- `--color-muted`: `#6b7280`
- `--color-focus`: `#93c5fd`

## Tipografia

Fonte base: `var(--font-sans)` em `style.css`, com a seguinte pilha:

`'Inter', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, 'Helvetica Neue', Arial, sans-serif`

## Contato

- E‑mail: `seniorlulu20@gmail.com`
- Telefone/WhatsApp: `+55 (44) 9 9919-6129` — link direto: `https://wa.me/5544999196129`
- GitHub: `https://github.com/luizhsa`
- LinkedIn: `https://www.linkedin.com/in/luizhsa`
- Instagram: `https://www.instagram.com/luizzhsa/`

## Licença

Projeto pessoal. Sem licença específica de redistribuição. Caso queira reutilizar partes, mantenha créditos.