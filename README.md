# VOOH - Sistema de Monitoramento de Dispositivos DOOH

## Descrição do Projeto 

O VOOH é uma plataforma de monitoramento e visualização de dados de telemetria voltada para dispositivos DOOH (Digital Out Of Home). O sistema foi desenvolvido como projeto acadêmico integrador do segundo semestre do curso de Ciência da Computação da São Paulo Tech School - [@BandTec](https://github.com/BandTec).

A aplicação realiza a coleta, o processamento e a exibição  de métricas críticas de hardware (como utilização de CPU, consumo de memória RAM, temperatura do processador e taxa de transferência de rede), permitindo a análise preditiva de falhas e a garantia de disponibilidade dos painéis digitais de exibição.

## Tecnologias

Este projeto usa como base tecnologias web, sendo:

### Frontend

- **HTML5:** Estruturação semântica da interface do painel de controle (Dashboard).

- **CSS3:** Estilização avançada, layout responsivo e codificação visual de estados de alerta baseados nas métricas de hardware.

- **JavaScript (Vanilla):** Manipulação do DOM, consumo de APIs via Fetch )

- **Apex Charts + ChartJS:** Renderização dinâmica dos gráficos de série temporal.

### Backend

- **Node.js:** Ambiente de execução assíncrono para o servidor.

- **Express:** Framework minimalista para gerenciamento de rotas HTTP e construção do Backend.

## Instalação

1. Para realizar a instalação deste projeto, é necessário possuir o **git** instalado na máquina, bem como o Node.js e executar os seguintes comandos:

```
git clone https://github.com/V-OOH/vooh
cd v-ooh
npm install
```

2. O backend depende de credenciais específicas para estabelecer a conexão com o banco de dados e definir a porta de escuta do servidor, por isso é necessário incluir credenciais do banco de dados no `.env`, conforme o `.env.example`.

3. Após a instalação das dependências e a correta configuração do arquivo .env, o servidor pode ser inicializado através dos scripts configurados no package.json.

```
npm start
```

## Equipe de Desenvolvimento

Projeto desenvolvido por alunos da São Paulo Tech School (SPTech), antiga BandTec.
