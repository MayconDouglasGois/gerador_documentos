import logo from "../imageBase64/logo";

interface IpdfOpcions {
    solicitante: string;
    empresa: string;
    data: string;
    solucao: string;
  }

function rastreamentoBloqueio({ solicitante, empresa, data, solucao }: IpdfOpcions) {
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
      },{
        table: {
            widths: [ '*', '*'],
            body: [
                [{ text: '(84) 2142-0712  |  (84) 99848-0638', style: 'table'}, { text:'atstec@atstec.com.br',style: 'table'}],
                [{ text:'Mossoró/RN - Brasil',style: 'table'},{ text:'www.atstec.com.br',style: 'table'}  ]
            ]
          }
       
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
              text: [
                { text: "Solução: ", bold: true },
                { text: solucao},
              ],
              margin: [0, 5, 0, 5],
            },
          ],
          [
            {
                text: [
                  { text: "Cliente: ", bold: true },
                  { text: empresa },
                ],
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
        text:'_________________________________________________________', color:'#1F497D',fontSize: 20,bold: true
      },
      [
        {text:`PREZADO SR(A) ${solicitante.toUpperCase()},`,style: "title"},
        {text:'Primeiramente eu quero te parabenizar pela sua atitude de buscar soluções para melhorar seus resultados na gestão da sua empresa, seja na segurança e/ou logística e controle de seu patrimônio !', style: 'paragraph'},
        {text:'ATSTEC é uma empresa com experiência na área de Rastreamento e Telemetria, atendemos empresas de todos os segmentos, onde oferecemos soluções de softwares e hardwares para contribuir de forma efetiva com a melhoria da performance da gestão, segurança e logística dos bens de sua empresa.', style: 'paragraph'},
        {text:'Nosso software de Rastreamento & Monitoramento é um completo sistema de gestão totalmente nas nuvens, podendo ser acessado de qualquer lugar através de dispositivos conectados à internet.', style: 'paragraph'},
        {text:'Procuramos diariamente aperfeiçoar os nossos serviços e os nossos sistemas, com o objetivo de extrairmos o melhor possível da tecnologia que utilizamos.', style: 'paragraph'},
        {text:'Contamos com experiência de pessoas capacitadas na áreas: TI, Técnica Instaladora, Comercial e Administrativa com mais de 10 anos de mercado.', style: 'paragraph'},
        {text:'É fato que nossa principal missão é sermos uma empresa de qualidade reconhecida, oferecendo segurança e confiabilidade em nossos serviços, disponibilizando o melhor suporte e assistência, com a excelência que nosso cliente merece.', style: 'paragraph'},
        {text:'Nota: A solução aplicada para logística e gestão das unidades rastreadas, entretanto, não compete para situações de risco.',color:'red',margin: [0,60,0,0], fontSize: 10,pageBreak: 'after'},
      
        {text:'Tecnologia Aplicada?',style:'title'},
    ],
    {
        ul: [
            {text:'Equipamentos Rastreadores homologados pela ANATEL;',style:'list'}, 
            {text:'Posicionamento/localização através de GPS via Satélite;',style:'list'}, 
            {text:'Comunicação: Rede de dados 2G - GSM/GPRS - Chip multioperadora',style:'list'}, 
            {text:'Rastreamento/Monitoramento: Através de acessos via software web e aplicativos web, disponibilizados 24h',style:'list'}, 
        ]
    }
    ],

    styles:{
        title:{
            color:'#1F497D',
            margin: [0,5,0,20],
            fontSize: 12
        },
        table: {
            fontSize: 9,
            fillColor: '#1F497D',
            color:"white",
            alignment: 'center',
        },
        paragraph: {
            margin: [0,0,0,20],
            fontSize: 10,
        },
        list:{
            margin: [0,0,0,10],
            fontSize: 10,
        }

    }
  };

  return docDefinition;
}

export { rastreamentoBloqueio };
