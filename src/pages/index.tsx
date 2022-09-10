import type { NextPage } from "next";
import Form from "./components/Forms";

import style from "../styles/Home.module.scss";


const Home: NextPage = () => {
  return (
    <section className={style.container}>
      <h1>GERADOR DE PROPOSTA</h1>

      <div className={style.content}>
        
        <img src="docs.webp" alt="ilustração de documento" />

        <Form />

      </div>
    </section>
  );
};

export default Home;
