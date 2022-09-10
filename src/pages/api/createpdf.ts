import type { NextApiRequest, NextApiResponse } from "next";
import { CreatDocDefinition } from "./pdfmaker/docDefinition";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {

    const { solicitante, empresa, data, solucao } = req.body.data;

    const pdfDoc = CreatDocDefinition({solicitante, empresa, data, solucao});

    return res.status(201).send(pdfDoc);
  } else {
    return res.status(404).send("Error! method invalid");
  }
};
