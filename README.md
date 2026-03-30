# 👨‍💻 Card Perfil - Aplicativo Portfólio

Um elegante e profissional aplicativo de Perfil Digital (Portfólio de Bolso) desenvolvido em **React Native** (com Expo). O aplicativo serve como um cartão de visitas digital super moderno, que você pode facilmente colocar na web, hospedar, ou compilar como `.apk` para mandar por WhatsApp, E-mail, ou Telegram para clientes, empregadores e amigos instalarem em seus celulares Android!

![Layout do Portfólio](./assets/mockup.png)

## 🚀 Tecnologias Utilizadas

- **React Native** (Programação da Interface e Lógica Mobile)
- **Expo** (Framework Base)
- **EAS Build** (Cloud Compilation Engine, gerador de APK)
- **Design System Nativo** via `StyleSheet`

## 📱 Funcionalidades

- **Layout Limpo e Responsivo:** Design minimalista e profissional ocupando de ponta-a-ponta, feito para caber e rodar com rapidez em qualquer Android.
- **Header Premium:** Imagem de Banner/Capa expansiva e Foto de Perfil circular logo abaixo destacando nome e cargo principal.
- **Card de Descrição Especializado:** Textos curtos e profissionais de engajamento do usuário/desenvolvedor.
- **Blocos de Estatística (Milestones):** Container com linha do tempo/destaques como "Projetos Entregues", "Anos de Experiência" e "Volume de Clientes" divididos verticalmente.
- **Call-To-Action Otimizado:** Botão de ação direta pronto para eventos do usuário (Contato imediato).

## 📸 Ícone do Aplicativo e Assets

O aplicativo é acompanhado por uma logo moderna (*abstract* + tipografia) importada direto para as áreas cruciais de instalação de projeto do Android (`icon.png`, `adaptive-icon.png` e `splash-icon.png`), entregando o mais alto nível de sofisticação.

## ⚙️ Como visualizar e rodar o projeto localmente

1. Tenha o **Node.js** instalado em seu computador.
2. Acesse a pasta raiz do projeto clonado e instale as dependências com o terminal:
   ```bash
   npm install
   ```
3. Inicialize o servidor local:
   ```bash
   npx expo start
   ```
4. Scaneie o código QR interativo gerado na tela com a câmera do seu celular!

## 🌍 Como criar e compartilhar a versão para instalar (APK) via EAS

A raiz do projeto já acompanha as propriedades setadas no `eas.json` para bypassar geração de `.aab` e entregar a compilação local pronta do `.apk`.

Você pode gerar seu `.apk` novinho e atualizado em poucos minutos:
1. Certifique-se de estar logado:
   ```bash
   eas login   (ou npx expo login abrirá via navegador)
   ```
2. Mande o código para nuvem da Expo:
   ```bash
   eas build -p android --profile preview
   ```
Pronto, só colar o link para todo mundo e exibir o seu portfólio incrível de graça!

---
> Desenvolvido e estilizado com 💙 por Flávio Félix.
