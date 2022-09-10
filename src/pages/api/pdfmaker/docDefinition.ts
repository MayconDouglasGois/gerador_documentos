interface Icadastro {
  solicitante: string,
  empresa: string,
  data: string,
  solucao: string}



function CreatDocDefinition({solicitante, empresa, data, solucao}:Icadastro) {

    const docDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],
    
            body: [
              [ 'cliente', 'Second', 'Third', 'The last one' ],
              [ solicitante, empresa, data, solucao ],
              [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
            ]
          }
        }
      ]
      };
      
      var options = {
        // ...
      }
      
      return {docDefinition,options}
      
}

export {CreatDocDefinition}