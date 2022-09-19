import logo from "../imageBase64/logo";
import rastreamento from '../imageBase64/rastreamento'
import retornarassinatura from '../imageBase64/assinatura'
import retornarrubrica from './../imageBase64/rubrica';

interface IpdfOpcions {
  solicitante: string;
  empresa: string;
  data: string;
  solucao: string;
}

function rastreamentoBloqueio({
  solicitante,
  empresa,
  data,
  solucao,
}: IpdfOpcions) {


  return new Promise((resolve, reject) => {

const rubrica = retornarrubrica()
const assinatura = retornarassinatura()

const date = new Date(data)
const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const currentYear = date.getFullYear();
const month = months[date.getMonth()]
const day = date.getDate() + 1;

const dataDoc = String(` ${day} de ${month} de ${currentYear}`)

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
            { text: "ATSTEC", fontSize: 20, margin: [5, 20, 0, 5] },
            { text: "RASTREAMENTO", fontSize: 20, margin: [5, 0, 0, 25] },
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
          body: [
            [
              { text: "(84) 2142-0712  |  (84) 99848-0638", style: "table" },
              { text: "atstec@atstec.com.br", style: "table" },
            ],
            [
              { text: "Mossoró/RN - Brasil", style: "table" },
              { text: "www.atstec.com.br", style: "table" },
            ],
          ],
        },
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
        color: "#1F497D",
        fontSize: 20,
        bold: true,
      },
      [
        { text: `PREZADO SR(A) ${solicitante.toUpperCase()},`, style: "title" },
        {
          text: "Primeiramente eu quero te parabenizar pela sua atitude de buscar soluções para melhorar seus resultados na gestão da sua empresa, seja na segurança e/ou logística e controle de seu patrimônio !",
          style: "paragraph",
        },
        {
          text: "ATSTEC é uma empresa com experiência na área de Rastreamento e Telemetria, atendemos empresas de todos os segmentos, onde oferecemos soluções de softwares e hardwares para contribuir de forma efetiva com a melhoria da performance da gestão, segurança e logística dos bens de sua empresa.",
          style: "paragraph",
        },
        {
          text: "Nosso software de Rastreamento & Monitoramento é um completo sistema de gestão totalmente nas nuvens, podendo ser acessado de qualquer lugar através de dispositivos conectados à internet.",
          style: "paragraph",
        },
        {
          text: "Procuramos diariamente aperfeiçoar os nossos serviços e os nossos sistemas, com o objetivo de extrairmos o melhor possível da tecnologia que utilizamos.",
          style: "paragraph",
        },
        {
          text: "Contamos com experiência de pessoas capacitadas na áreas: TI, Técnica Instaladora, Comercial e Administrativa com mais de 10 anos de mercado.",
          style: "paragraph",
        },
        {
          text: "É fato que nossa principal missão é sermos uma empresa de qualidade reconhecida, oferecendo segurança e confiabilidade em nossos serviços, disponibilizando o melhor suporte e assistência, com a excelência que nosso cliente merece.",
          style: "paragraph",
        },
        {
          text: "Nota: A solução aplicada para logística e gestão das unidades rastreadas, entretanto, não compete para situações de risco.",
          color: "red",
          margin: [0, 60, 0, 0],
          fontSize: 10,
          pageBreak: "after",
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
        text: "O rastreamento do sistema de posicionamento global, mostra em tempo real* onde um objeto se localiza com exatidão. O sistema pode ser aplicado em diversas situações, como por exemplo: Veículos, máquinas em geral, pessoas, objetos em geral, computadores, equipamentos eletrônicos e etc.",
        style: "paragraph",
      },
      {
        text: "O rastreador é um dispositivo que coleta informações de posicionamento, velocidade, direção e deslocamentos por meio de satélites através de sua placa GPS , e esses dados são enviados para nossa central através da rede GSM/GPRS, rede de dados móveis, a mesma que utilizamos em nossos celulares para acessar a rede móvel das operadoras, e esses dados são visualizados pelo nosso cliente através do acesso via sistema web ou pelo aplicativo.",
        style: "paragraph",
      },
      {
        text: [
          { text: "Informação Adicional: ", color: "red" },
          {
            text: "A rede de dados que nossos rastreadores trafegam é a rede 2G, o que significa que qualquer local que tenha cobertura de dados 2G da operadora que o rastreador está configurado, o sistema irá funcionar em tempo real. Nos locais que não tiverem cobertura, o rastreador funciona normalmente a coleta das informações através da placa GPS, entretanto não irá conseguir enviar os dados em tempo real, porém, ao restabelecer conexão, todos os dados que estavam armazenados na memória do rastreador no período que ficou offline, serão enviados para nossa central e o usuário consegue visualizar a movimentação daquele período.",
          },
        ],
        style: "paragraph",
      },{
          image:`data:image/jpeg;base64,${rastreamento}` ,
          width: 450,
          height: 150,
          margin: [0, 30, 0, 0],
          alignment: 'center',
          pageBreak: "after"
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
            style: "list", pageBreak: "after",
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
            text: [{ text: "Assistência Técnica Local: ", bold: true },
             { text: "A assistência local é compreendida num raio de 50 km da base de nossas sedes e das bases de nossos técnicos credenciados em território nacional;" }],
            style: "list",
          },
          {
            text: [{ text: "Assistência Técnica fora do raio: ", bold: true }, 
            { text: "Para caso de serviços fora do raio de assistência, será cobrado um valor de R$ 1,20 por km de deslocamento + a taxa do serviço." }], 
            style: "list",
          },
          
        ],
      },
      { text: "Valores dos Produtos & Serviços", style: "title" },
      {
        ul: [
          {
            text: [{ text: "Taxa de Ativação: ", bold: true }, 
            { text: "R$ 150,00 – Serviço de instalação dos equipamentos e implementação do sistema;" }],
            style: "list",
          },
          {
            text: [{ text: "Mensalidade: ", bold: true }, 
            { text: "R$ 59,90 – Serviço referente ao suporte, assistência, manutenção e acesso aos sistemas de monitoramento;" }],
            style: "list",
          },
          {
            text: [{ text: "Manutenção padrão: ", bold: true }, 
            { text: "Não se aplica – Serviço de atualização/troca/revisão do equipamento e seus acessórios;" }],
            style: "list",
          },
           {
            text: [{ text: "Manutenção por motivo de violação: ", bold: true }, 
            { text: "R$ 100,00 – Serviço de atualização/troca/revisão do equipamento e seus acessórios por motivos de intervenção de terceiros;" }],
            style: "list",
          },
          {
            text: [{ text: "Retirada/Remoção: ", bold: true }, 
            { text: "Não se aplica – Remoção do equipamento em caso de cancelamento do serviço;" }],
            style: "list",
          },
          {
            text: [{ text: "Desinstalação: ", bold: true }, 
            { text: "R$ 75,00 – Instalação de um equipamento que foi desinstalado dentro de um período máximo de 30 dias;" }],
            style: "list",
          },
          {
            text: [{ text: "Taxa de Extravio: ", bold: true }, 
            { text: "R$ 600,00 – Valor por equipamento Extraviado." }],
            style: "list",pageBreak: "after",
          },
        ]
      },
      { text: "Condições Comerciais – Prazos e Formas de Pagamento", style: "title" },
      {
        ul:[
          {
            text: [{ text: "Taxa de Serviços e Produtos: ", bold: true }, 
            { text: "Pagamento pode ser á vista ou parcelado, através de boleto bancário e/ou transferência bancária;" }],
            style: "list",
          },
          {
            text: [{ text: "Mensalidade: ", bold: true }, 
            { text: "Pagamento através de boleto bancário. A 1ª mensalidade é 30 dias após início das instalações – O fechamento da fatura é proporcional à quantidade de veículos cadastrados no sistema a partir da sua data de instalação." }],
            style: "list",
          },
        ]
      },
      { text: "Obs.: Os valores de pagamento à vista e parcelados, podem variar de acordo com a negociação.",decoration:"underline", style: "paragraph", bold: true },
      
      { text: "Termo de Confidencialidade", style: "title" },
      
      { text: "Informações técnicas e financeiras eventualmente obtidas durante a realização das atividades envolvidas nesta proposta comercial, como especificações, valores, funcionamento, organização ou desempenho da empresa / cliente serão tidas como confidenciais e sigilosas sempre que tal condição for solicitada.", style: "paragraph" },
      
      { text: "Prazo de atendimento", style: "title" },
      { text: "Após aprovação da proposta e envio dos dados cadastrais, o prazo mínimo para início da instalação é de até 15 dias", style: "paragraph" },
      
      
      { text: `Mossoró/RN, ${dataDoc}`, style: "paragraph",alignment: "right", margin: [0, 40, 0, 20],  },
      {
        columns: [
          [
            {
            image:`data:image/jpeg;base64,${assinatura}`,width: 150,
        },
            { text: "_______________________________________________", style: "paragraph" , bold: true },
            { text: "Consultor Responsável", style: "paragraph" },
          //   {
          //     image:`data:image/jpeg;base64,${rubrica}`,width: 100,
          // }
          ],
          [
            { text: "_______________________________________________", style: "paragraph" , bold: true },
            { text: "Cliente", style: "paragraph" },
          ],
        ]
      }
    ],

    styles: {
      title: {
        color: "#1F497D",
        margin: [0, 5, 0, 20],
        fontSize: 12,
      },
      table: {
        fontSize: 9,
        fillColor: "#1F497D",
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
  resolve(docDefinition);
})
}

export { rastreamentoBloqueio };
