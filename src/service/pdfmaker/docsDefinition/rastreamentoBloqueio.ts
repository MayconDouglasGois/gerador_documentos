import logo from "../imageBase64/logo";

interface IpdfOpcions {
  solicitante: string;
  empresa: string;
  data: string;
  solucao: string;
  valores: {
    ativacao: number;
    mensalidade: number;
    manutencao: number;
    reinstalacao: number;
    extravio: number;
  };
}

function rastreamentoBloqueio({
  solicitante,
  empresa,
  data,
  solucao,
  valores,
}: IpdfOpcions) {
  const date = new Date(data);
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const currentYear = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate() + 1;

  const dataDoc = String(` ${day} de ${month} de ${currentYear}`);

  const docDefinition = {
    content: [
      {
        columns: [
          {
            image: `data:image/png;base64,${logo}`,
            width: 150,
            height: 150,
          },
          [
            {
              text: `${empresa.toUpperCase()}`,
              fontSize: 20,
              margin: [5, 50, 0, 5],
            },
            {
              text: "Serviços & Soluções em Rastreamento & Telemetria",
              margin: [2, 0, 0, 0],
            },
          ],
        ],
      },
      {
        table: {
          widths: ["*", "*"],
          heights: 10,
          body: [
            [
              { text: "(00) 0000-0000  |  (00) 0000-0000 ", style: "table" },
              { text: `${empresa}@${empresa}.com.br`, style: "table" },
            ],
            [
              { text: "Cidade/UF - Brasil", style: "table" },
              { text: `www.${empresa}.com.br`, style: "table" },
            ],
          ],
        },
        layout: "noBorders",
      },
      {
        columns: [
          [
            {
              text: [
                { text: "Documento: ", bold: true },
                { text: " Proposta Comercial" },
              ],
              margin: [0, 20, 0, 5],
            },

            {
              text: [{ text: "Solução: ", bold: true }, { text: solucao }],
              margin: [0, 5, 0, 5],
            },
          ],
          [
            {
              text: [{ text: "Cliente: ", bold: true }, { text: empresa }],
              margin: [0, 20, 0, 5],
            },

            {
              text: [
                { text: "Solicitante: ", bold: true },
                { text: solicitante },
              ],
              margin: [0, 5, 0, 5],
            },
          ],
        ],
      },
      {
        text: "_________________________________________________________",
        color: "#1117A3",
        fontSize: 20,
        bold: true,
      },
      [
        { text: `PREZADO SR(A) ${solicitante.toUpperCase()},`, style: "title" },

        {
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.Lorem ipsum dolor sit amet, con,",
          style: "paragraph",
        },
        { text: "Tecnologia Aplicada?", style: "title" },
      ],
      {
        ul: [
          {
            text: "Equipamentos Rastreadores homologados pela ANATEL;",
            style: "list",
          },
          {
            text: "Posicionamento/localização através de GPS via Satélite;",
            style: "list",
          },
          {
            text: "Comunicação: Rede de dados 2G - GSM/GPRS - Chip multioperadora",
            style: "list",
          },
          {
            text: "Rastreamento/Monitoramento: Através de acessos via software web e aplicativos web, disponibilizados 24h",
            style: "list",
          },
        ],
      },
      { text: "Modo de funcionamento?", style: "title" },
      {
        style: "tableExample",
        margin: [0, 5, 0, 20],
        table: {
          widths: [100, "*", 200, "*"],
          body: [
            [
              { text: "Rastreamento", style: "table",fontSize: 12, },
              { text: "Tenologia", style: "table",fontSize: 12, },
              { text: "Rastreamento", style: "table" ,fontSize: 12,},
              { text: "Rastreamento", style: "table" ,fontSize: 12,},
            ],
            [
              { text: "Rastreamento", style: "paragraph" },
              { text: "Tenologia", style: "paragraph" },
              { text: "Rastreamento", style: "paragraph" },
              { text: "Rastreamento", style: "paragraph" },
            ],
          ],
        },
      },
      {
        text: [
          { text: "Informação Adicional: ", color: "red" },
          {
            text: "A rede de dados que nossos rastreadores trafegam é a rede 2G, o que significa que qualquer local que tenha cobertura de dados 2G da operadora que o rastreador está configurado, o sistema irá funcionar em tempo real. Nos locais que não tiverem cobertura, o rastreador funciona normalmente a coleta das informações através da placa GPS, entretanto não irá conseguir enviar os dados em tempo real, porém, ao restabelecer conexão, todos os dados que estavam armazenados na memória do rastreador no período que ficou offline, serão enviados para nossa central e o usuário consegue visualizar a movimentação daquele período.",
          },
        ],
        style: "paragraph",
        margin: [0, 5, 0, 20],
      },
      { text: "Funcionalidades do Equipamento x Sistema?", style: "title" },
      {
        ul: [
          {
            text: "Rastreamento em tempo real* 24h por dia, através do sistema web e/ou aplicativo;",
            style: "list",
          },
          {
            text: "Registro de velocidade, deslocamentos, ignição, tensão da bateria, status de movimento (parado/movendo);",
            style: "list",
          },
          {
            text: "Histórico de percursos, jornadas, paradas, velocidade, eventos e alertas sistêmicos;",
            style: "list",
          },
          { text: "Controle de velocidade máxima;", style: "list" },
          { text: "Bloqueio;", style: "list" },
          { text: "Cadastro de pontos de interesse;", style: "list" },
          { text: "Cadastro de cercas eletrônicas;", style: "list" },
          {
            text: "Cadastros de alertas de eventos pré definidos via equipamento e via sistema;",
            style: "list",
          },
          {
            text: "Envio de comandos via sistema web e aplicativo móvel;",
            style: "list",
          },
          {
            text: "Módulo de Gestão (Controle de Manutenção do veículo, Abastecimento, etc...);",
            style: "list",
          },
          {
            text: "Múltipla plataforma de acesso (acesso via sistema web e via aplicativo móvel).",
            style: "list",
          },
          {
            text: "Cadastros de usuários com controle de permissões;",
            style: "list",
          },
          {
            text: "Armazenamento de dados em nuvem, com no mínimo os dados dos últimos 12 meses;",
            style: "list",
          },
          {
            text: "Relatórios disponíveis para download via pdf e excel..",
            style: "list",
            pageBreak: "after",
          },
        ],
      },
      { text: "Condições Comerciais", style: "title" },
      {
        ul: [
          {
            text: [
              { text: "Plano Contratual dos Equipamentos: ", bold: true },
              {
                text: " Equipamento(s) em comodato – Necessária devolução dos equipamentos após término do contrato ou após cancelamento do serviço de alguma unidade rastreada, caso a devolução não ocorra, será cobrado um valor por equipamento extraviado;",
              },
            ],
            style: "list",
          },
          {
            text: [
              { text: "Plano Contratual dos Serviços: ", bold: true },
              {
                text: "Contrato de 24 meses, sem plano de fidelidade, podendo o cliente cancelar os serviços a qualquer momento, desde que esteja adimplente com os setores da empresa;",
              },
            ],
            style: "list",
          },
          {
            text: [
              { text: "Assistência Técnica Local: ", bold: true },
              {
                text: "A assistência local é compreendida num raio de 50 km da base de nossas sedes e das bases de nossos técnicos credenciados em território nacional;",
              },
            ],
            style: "list",
          },
          {
            text: [
              { text: "Assistência Técnica fora do raio: ", bold: true },
              {
                text: "Para caso de serviços fora do raio de assistência, será cobrado um valor de R$ 1,20 por km de deslocamento + a taxa do serviço.",
              },
            ],
            style: "list",
          },
        ],
      },
      { text: "Valores dos Produtos & Serviços", style: "title" },
      {
        ul: [
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            style: "paragraph",
          },
          {
            text: [
              "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
              "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
              "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
              "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
              "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
              "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
              "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
              "subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit",
            ],
            style: "paragraph",
          },
        ],
      },
      {
        text: "Condições Comerciais – Prazos e Formas de Pagamento",
        style: "title",
      },
      {
        ul: [
          {
            text: [
              { text: "Taxa de Serviços e Produtos: ", bold: true },
              {
                text: "Pagamento pode ser á vista ou parcelado, através de boleto bancário e/ou transferência bancária;",
              },
            ],
            style: "list",
          },
          {
            text: [
              { text: "Mensalidade: ", bold: true },
              {
                text: "Pagamento através de boleto bancário. A 1ª mensalidade é 30 dias após início das instalações – O fechamento da fatura é proporcional à quantidade de veículos cadastrados no sistema a partir da sua data de instalação.",
              },
            ],
            style: "list",
          },
        ],
      },
      {
        text: "Obs.: Os valores de pagamento à vista e parcelados, podem variar de acordo com a negociação.",
        decoration: "underline",
        style: "paragraph",
        bold: true,
      },

      { text: "Termo de Confidencialidade", style: "title" },

      {
        text: "Informações técnicas e financeiras eventualmente obtidas durante a realização das atividades envolvidas nesta proposta comercial, como especificações, valores, funcionamento, organização ou desempenho da empresa / cliente serão tidas como confidenciais e sigilosas sempre que tal condição for solicitada.",
        style: "paragraph",
      },

      { text: "Prazo de atendimento", style: "title" },
      {
        text: "Após aprovação da proposta e envio dos dados cadastrais, o prazo mínimo para início da instalação é de até 15 dias",
        style: "paragraph",
      },

      {
        text: `Mossoró/RN, ${dataDoc}`,
        style: "paragraph",
        alignment: "right",
        margin: [0, 40, 0, 20],
      },
    ],

    styles: {
      title: {
        color: "#1117A3",
        margin: [0, 5, 0, 20],
        fontSize: 12,
      },
      table: {
        fontSize: 9,
        fillColor: "#1117A3",
        color: "white",
        alignment: "center",
      },
      paragraph: {
        margin: [0, 0, 0, 20],
        fontSize: 10,
        lineHeight: 1.5,
      },
      list: {
        margin: [0, 0, 0, 15],
        fontSize: 10,
        lineHeight: 1.5,
      },
    },
  };
  return docDefinition;
}

export { rastreamentoBloqueio };
