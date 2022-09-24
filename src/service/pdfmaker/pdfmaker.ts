import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import { rastreamentoBloqueio } from "./docsDefinition/rastreamentoBloqueio";


pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface IpdfOpcions {
  solicitante: string;
  empresa: string;
  data: string;
  solucao: string;
  valores: {
    ativacao: number,
    mensalidade: number,
    manutencao: number,
    reinstalacao: number,
    extravio: number,
  }
}



function gerarPDF({ solicitante, empresa, data, solucao,valores }: IpdfOpcions) {

  const docDefinition = rastreamentoBloqueio({solicitante, empresa, data, solucao,valores})

  pdfMake.fonts = {
    Roboto: {
      normal: "Roboto-Regular.ttf",
      bold: "Roboto-Medium.ttf",
      italics: "Roboto-Italic.ttf",
      bolditalics: "Roboto-MediumItalic.ttf",
    },
  };
 
  

    pdfMake.createPdf(docDefinition as any).download(`Proposta_Comercial_${empresa}_${data}`);
    
}

export { gerarPDF };
