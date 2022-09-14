import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import { rastreamentoBloqueio } from "./docsDefinition/rastreamentoBloqueio";


pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface IpdfOpcions {
  solicitante: string;
  empresa: string;
  data: string;
  solucao: string;
}



async function gerarPDF({ solicitante, empresa, data, solucao }: IpdfOpcions) {

  const docDefinition = rastreamentoBloqueio({solicitante, empresa, data, solucao})

  pdfMake.fonts = {
    Roboto: {
      normal: "Roboto-Regular.ttf",
      bold: "Roboto-Medium.ttf",
      italics: "Roboto-Italic.ttf",
      bolditalics: "Roboto-MediumItalic.ttf",
    },
  };
 
  

 await pdfMake
    .createPdf(docDefinition as any)
    .download(`Proposta_Comercial_${empresa}_${data}`);
    
}

export { gerarPDF };
