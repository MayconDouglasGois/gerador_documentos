import React from "react";

import Modal from "react-modal";
import swal from "sweetalert";

import style from "./style.module.scss";

import {
  MdCarRepair,
  MdElectricCar,
  MdOutlinePayments,
  MdCancelPresentation,
  MdOutlineDirectionsCarFilled
} from "react-icons/md";

import {
  BsFillPersonFill,
  BsHouseDoorFill,
  BsCalendar2MinusFill,
  BsFillPhoneVibrateFill,
} from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { gerarPDF } from "../../../service/pdfmaker/pdfmaker";

const Form = () => {
  //declaração das variaveis

  const [solicitante, setSolicitante] = React.useState("");
  const [empresa, setEmpresa] = React.useState("");
  const [data, setData] = React.useState("");
  const [solucao, sersolucao] = React.useState("Rastreamento Simples");

  const [ativacao, setAtivacao] = React.useState(150);
  const [mensalidade, setMensalidade] = React.useState(59.9);
  const [manutencao, setManutencao] = React.useState(100);
  const [reinstalacao,setReinstalacao] = React.useState(75);
  const [extravio, setExtravio] = React.useState(600);

  // function coletar dado do formulario

  function coletarDados(e: React.SyntheticEvent) {
    e.preventDefault();

    const valores = {
      ativacao,
      mensalidade,
      manutencao,
      reinstalacao,
      extravio,
    };

    if (!solicitante || !empresa || !data || !solucao) {
      swal("Erro!", "Preencha todos os campos!", "error");

      return;
    }

    swal("Aguarde!", "Documento está sendo gerado", "info");

    gerarPDF({ solicitante, empresa, data, solucao, valores });

    swal("Bom Trabalho", "PDF gerado com sucesso!", "success");
  }

  //functions modal

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles: Modal.Styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <section>
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
              <option value="Rastreamento Simples">Rastreamento Simples</option>
              <option value="Rastreamento + Bloqueio">
                Rastreamento + Boqueio
              </option>
              <option value="Telemetria">Telemetria</option>
              <option value="Telemetria + Bloqueio">
                Telemetria + Bloqueio
              </option>
            </select>
          </label>

          <input type="submit" value="Gerar PDF" className={style.buttonPdf} />
        </form>

        {/*React Modal*/}


        <button onClick={openModal} className={style.buttonModal}>
            Editar Valores
            <GiMoneyStack />
          </button>


        <div>
          
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className={style.modal}>
              <button onClick={closeModal}>
                <AiFillCloseCircle />
              </button>
              <form className={style.container}>
                <label>
                  <p>
                    <MdOutlineDirectionsCarFilled/> Taxa de Ativação:
                  </p>
                  <input
                    type="text"
                    step="0.01"
                    min="0.01"
                    name="ativacao"
                    id="ativacao"
                    value={ativacao}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAtivacao(Number(e.target.value))
                    }
                  />
                </label>

                <label>
                  <p>
                    <MdOutlinePayments/> Mensalidade:
                  </p>
                  <input
                    type="text"
                    name="mensalidade"
                    id="mensalidade"
                    value={mensalidade}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setMensalidade(Number(e.target.value))
                    }
                  />
                </label>

                <label>
                  <p>
                    <MdCarRepair/> Manutenção:
                  </p>
                  <input
                    type="text"
                    name="manutencao"
                    id="manutencao"
                    value={manutencao}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setManutencao(Number(e.target.value))
                    }
                  />
                </label>

                <label>
                  <p>
                    <MdElectricCar/> Reinstalação:
                  </p>
                  <input
                    type="text"
                    name="reinstalação"
                    id="reinstalação"
                    value={reinstalacao}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setReinstalacao(Number(e.target.value))
                    }
                  />
                </label>

                <label>
                  <p>
                    <MdCancelPresentation/> Taxa de Extravio:
                  </p>
                  <input
                    type="text"
                    name="extravio"
                    id="extravio"
                    value={extravio}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setExtravio(Number(e.target.value))
                    }
                  />
                </label>


              </form>
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Form;
