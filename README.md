# First Career Advisory - Landing Page Oficial (React + Vite)

Landing page institucional de alta performance desenvolvida para a **First Career Advisory**, construída com **React 19** e **Vite**, mantendo rigorosa fidelidade à identidade visual do projeto, com design responsivo, suporte bilíngue (Português & Inglês) e integração direta com o WhatsApp.

---

## 🚀 Tecnologias Utilizadas

- **React 19** (Componentes funcionais com Hooks)
- **Vite** (Build ultra-rápido e Hot Module Replacement - HMR)
- **CSS3 Moderno** (Variáveis customizadas, Glassmorphism e layouts responsivos em Grid e Flexbox)
- **Google Fonts** (`Bodoni Moda`, `Playfair Display`, `Cormorant Garamond` e `Montserrat`)

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
