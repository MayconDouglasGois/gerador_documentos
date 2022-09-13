import React from "react";

import swal from 'sweetalert';

import Head from "next/head";

import style from "./style.module.scss";

import {
  BsFillPersonFill,
  BsHouseDoorFill,
  BsCalendar2MinusFill,
  BsFillPhoneVibrateFill,
} from "react-icons/bs";
import { gerarPDF } from "../../../service/pdfmaker/pdfmaker";

const Form = () => {
  const [solicitante, setSolicitante] = React.useState("");
  const [empresa, setEmpresa] = React.useState("");
  const [data, setData] = React.useState("");
  const [solucao, sersolucao] = React.useState("rastreamento simples");

  async function coletarDados(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!solicitante || !empresa || !data || !solucao) {

      swal("Erro!","Preencha todos os campos!", "error");

      return;
    }
    swal("Aguarde!","Documento está sendo gerado", "info");

    gerarPDF({solicitante,empresa,data,solucao})

    swal("Bom Trabalho","PDF gerado com sucesso!", "success");
    
  
    

  }

  return (
    <>
      <Head>
        <title>Gerador | Proposta</title>
      </Head>

      <form
        onSubmit={(e: React.SyntheticEvent) => coletarDados(e)}
        className={style.container}
      >
        <label>
          <p>
            <BsFillPersonFill /> Solicitante
          </p>
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
          <p>
            <BsHouseDoorFill /> Empresa
          </p>
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
          <p>
            <BsCalendar2MinusFill /> Data
          </p>
          <input
            type="date"
            name="data"
            id="data"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setData(e.target.value)
            }
          />
        </label>
        <label>
          <p>
            <BsFillPhoneVibrateFill /> Solução
          </p>
          <select
            name="select"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              sersolucao(e.target.value);
            }}
          >
            {/* <option disabled selected value="DEFAULT">
              Solução
            </option> */}
            <option value="rastreamento simples">Rastreamento Simples</option>
            <option value="rastreamento+bloqueio">
              Rastreamento + Boqueio
            </option>
            <option value="telemetria">Telemetria</option>
            <option value="telemetria+bloqueio">Telemetria + Bloqueio</option>
          </select>
        </label>

        <input type="submit" value="Gerar PDF" className={style.buttonPdf} />
      </form>
    </>
  );
};

export default Form;
