# First Career Advisory

## Sobre o projeto
Este repositório corresponde ao website institucional da **First Career Advisory**, voltado à apresentação da consultoria e de sua atuação no desenvolvimento de posicionamento profissional e mentoria de carreira nacional e internacional.

## Público-alvo
O website é direcionado a profissionais e lideranças que desejam estruturar sua marca pessoal, otimizar sua presença estratégica no mercado e construir novos movimentos de carreira no Brasil e no exterior.

## Acesso à versão publicada
*(Insira aqui o link do domínio quando estiver publicado, ex.: `https://www.firstcareeradvisory.com/`)*


# Landing Page Oficial (React + Vite)

Landing page institucional de alta performance desenvolvida para a **First Career Advisory**, construída com **React 19** e **Vite**, mantendo rigorosa fidelidade à identidade visual do projeto, com design responsivo, suporte bilíngue (Português & Inglês) e integração direta com o WhatsApp.

---

## 🚀 Tecnologias Utilizadas

- **React 19** (Componentes funcionais com Hooks)
- **Vite** (Build ultra-rápido e Hot Module Replacement - HMR)
- **CSS3 Moderno** (Variáveis customizadas, Glassmorphism e layouts responsivos em Grid e Flexbox)
- **Google Fonts** (`Bodoni Moda`, `Playfair Display`, `Cormorant Garamond` e `Montserrat`)
- **Framework:** React + Vite + JavaScript (JSX) + HTML5
- **Hospedagem/Deploy:** Vercel
  
---

## Principais funcionalidades
- Internacionalização com troca de idioma (`translations.js`)
- Apresentação institucional e metodologia de atuação (`About` e `Hero`)
- Catálogo interativo de soluções e mentorias com visualização detalhada em modal (`Solutions` e `ServiceModal`)
- Seção de depoimentos e resultados (`Testimonials`)
- Design responsivo e acessível
- Atendimento e envio simplificado de mensagens via WhatsApp (`Contact` e `FloatingWhatsApp`)

---

## Recursos Técnicos
- Identidade visual e sistema de design próprios (`index.css` e `styles.css`)
- Arquitetura modular baseada em componentes reutilizáveis

---

## 📁 Estrutura do Projeto

```
First Career Advisory/
├── index.html                   # HTML base com SEO, metatags e Google Fonts
├── vite.config.js               # Configuração do Vite com plugin do React
├── package.json                 # Dependências e scripts do projeto
├── README.md                    # Documentação do projeto
├── public/                      # Arquivos estáticos servidos na raiz
│   └── assets/
│       └── images/              # Logotipos vetoriais, fotografias e avatares
├── src/
│   ├── main.jsx                 # Ponto de entrada do React
│   ├── App.jsx                  # Componente raiz gerenciando idioma e estado
│   ├── index.css                # Folha de estilos global e design tokens
│   ├── data/
│   │   └── translations.js      # Dicionário de traduções (PT / EN)
│   └── components/
│       ├── Header.jsx           # Header fixo Glassmorphism com monograma e menu
│       ├── Hero.jsx             # Hero com tipografia editorial centralizada
│       ├── About.jsx            # Seção Sobre com monograma "f" e foto em arco
│       ├── Solutions.jsx        # Seção Soluções (fundo branco e fotos ovais)
│       ├── Testimonials.jsx     # Carrossel interativo de depoimentos com swipe
│       ├── CtaBanner.jsx        # Banner CTA intermediário com imagem e logo
│       ├── Contact.jsx          # Formulário de contato integrado ao WhatsApp
│       ├── Footer.jsx           # Rodapé institucional escuro
│       └── FloatingWhatsApp.jsx # Botão flutuante do WhatsApp com animação de pulso
```

---

## 🛠️ Como Executar

### 1. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
O Vite iniciará o servidor local em: `http://localhost:3000` com recarregamento instantâneo (HMR).

### 2. Gerar a Versão de Produção (Build)
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

### 3. Pré-visualizar a Build de Produção
```bash
npm run preview
```
### 4.Clonar o repositório
   ```bash
   git clone [https://github.com/rejanesnasc/First-Career-Advisory.git](https://github.com/rejanesnasc/First-Career-Advisory.git)

```
### 5.Clonar o repositório
Como salvar e atualizar no GitHub (onde executar)

1. **No Antigravity IDE (painel esquerdo > Explorer):** abra o arquivo `README.md` na raiz do projeto, apague o conteúdo antigo, cole o código acima e salve (`Ctrl + S`).
2. **No terminal do Antigravity IDE:** rode os três comandos habituais para atualizar o repositório remoto:
   ```bash
   git add README.md
   git commit -m "docs: atualiza estrutura do README.md"
   git push

# Diretrizes de conteúdo

As atualizações do website devem preservar:

A clareza, objetividade e sofisticação na comunicação voltada ao desenvolvimento de carreira.

A precisão das traduções e da terminologia aplicada ao mercado nacional e internacional.

A consistência visual e tipográfica da marca First Career Advisory.

A revisão periódica de links, formulários de contato, integrações com WhatsApp e responsividade em diferentes dispositivos.

A legibilidade e fluidez da navegação dos conteúdos.

# Status
Código-fonte estruturado e versionado no GitHub.(Atualize para "Website institucional publicado" assim que concluir o deploy em produção.)

Direitos de uso
O conteúdo institucional, textos, metodologia e identidade visual da First Career Advisory são de propriedade exclusiva de seus responsáveis e não devem ser reproduzidos sem autorização prévia.
A licença de uso do código-fonte é reservada aos mantenedores do repositório.

First Career Advisory

Mentoria e Posicionamento de Carreira Nacional e Internacional
