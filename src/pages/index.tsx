import type { NextPage } from "next";
import Form from "./components/Forms";
import {AiFillFileText} from 'react-icons/ai'

import Head from "next/head";

import style from "../styles/Home.module.scss";


const Home: NextPage = () => {
  return (
    <>
    <Head>
        <title>Gerador | Docs</title>
      </Head>

    <section className={style.container}>
      <h1>
        <strong><AiFillFileText/></strong>GERA<strong>DOCS</strong>
        </h1>

      <div className={style.content}>
        
        <img src="docs.webp" alt="ilustração de documento" />

        <Form />

      </div>
    </section>
    </>
  );
};

export default Home;
