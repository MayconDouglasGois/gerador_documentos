import React from "react";
import { axios } from "../../../service/axios";
import { pdfMake } from "../../../service/pdfmaker";

const Form = () => {
  const [cliente, setCliente] = React.useState("");

  function coletarDados(e: React.SyntheticEvent) {
    e.preventDefault();

    const dados = axios
      .post("/api/createpdf",{
        data:{
          cliente
        }
      })
      .then(function (response) {
        pdfMake.createPdf(response.data.docDefinition).download();
      })

      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <form onSubmit={(e: React.SyntheticEvent) => coletarDados(e)}>
      <label>
        <p>Nome do Cliente</p>
        <input
          type="text"
          name="cliente"
          id="cliente"
          value={cliente}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCliente(e.target.value)
          }
        />
      </label>
      <input type="submit" value="Gerar PDF" />
    </form>
  );
};

export default Form;
