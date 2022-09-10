import React from "react";
import { axios } from "../../../service/axios";
import { pdfMake } from "../../../service/pdfmaker";

import style from "./style.module.scss";

import {BsFillPersonFill, BsHouseDoorFill, BsCalendar2MinusFill, BsFillPhoneVibrateFill} from "react-icons/bs"

const Form = () => {
  const [solicitante, setSolicitante] = React.useState("");
  const [empresa, setEmpresa] = React.useState("");
  const [data, setData] = React.useState("");
  const [solucao, sersolucao] = React.useState("");


  async function coletarDados(e: React.SyntheticEvent) {
    e.preventDefault();

    const dados = await axios
      .post("/api/createpdf", {
        data: {
          solicitante,
          empresa,
          data,
          solucao,
        }
      })
      .then(function (response) {
        pdfMake.createPdf(response.data.docDefinition).download(`proposta_${empresa}_${solucao}_${data}`);
      })

      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => coletarDados(e)}
      className={style.container}
    >
      <label>
        <p><BsFillPersonFill/> Solicitante</p>
        <input
          type="text"
          name="solicitante"
          id="solicitante"
          placeholder="Nome do solicitante"
          value={solicitante}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSolicitante(e.target.value)
          }
        />
      </label>

      <label>
        <p><BsHouseDoorFill/> Empresa</p>
        <input
          type="text"
          name="empresa"
          id="empresa"
          placeholder="Nome da empresa"
          value={empresa}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmpresa(e.target.value)
          }
        />
      </label>
      <label>
        <p><BsCalendar2MinusFill/> Data</p>
        <input type="date" name="data" id="data"  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData(e.target.value)
          }/>
      </label>

      <label>
        <p><BsFillPhoneVibrateFill/> Solução</p>
        <select name="select" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>{sersolucao(e.target.value)}} >
          <option value="rastreamento simples">Rastreamento Simples</option>
          <option value="rastreamento+bloqueio">Rastreamento + Boqueio</option>
          <option value="telemetria">Telemetria</option>
          <option value="telemetria+bloqueio">Telemetria + Bloqueio</option>
        </select>
      </label>

      <input type="submit" value="Gerar PDF" className={style.buttonPdf}/>
    </form>
  );
};

export default Form;
