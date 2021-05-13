import path from "path";
import cors from "cors";
import http from "http";
import express from "express";

const PORT = process.env.PORT || 3334; // <-  inclusive a porta que ele deixa exposta pro teu app
// const port = portaDoAmbiente ou a 3334, se não tiver uma
const HOST = `http://localhost:${PORT}`;
console.log("oi");
const app = express();
app.use(cors());
app.use(express.json());
// const __dirname = path.resolve();
// app.use("/", express.static(path.resolve(__dirname, "public")));
console.log("Jorge attie");

app.get("/api/V1/categories/list", (request, response) => {
  const filtro = [
    {
      items: [
        {
          id: 1,
          name: "Camisetas",
          path: "camisetas",
        },
        {
          id: 2,
          name: "Calças",
          path: "calcas",
        },
        {
          id: 3,
          name: "Calçados",
          path: "calcados",
        },
      ],
    },
  ];
  console.log(response.json);
  return response.json({
    amount: filtro.length,
    filtro,
  });
});
app.get("/api/V1/categories/camisas", (request, response) => {
  const camisas = [
    {
      filters: [
        {
          color: "Cor",
        },
      ],
      items: [
        {
          id: 1,
          sku: "sku-1",
          path: "camiseta-preta",
          name: "Camiseta Preta",
          image: "media/shirt-1.jpg",
          price: 59.9,
          filter: [
            {
              color: "Preta",
            },
          ],
        },
        {
          id: 2,
          sku: "sku-2",
          path: "camiseta-laranja",
          name: "Camiseta Laranja",
          image: "media/shirt-2.jpg",
          price: 40.5,
          filter: [
            {
              color: "Laranja",
            },
          ],
        },
        {
          id: 3,
          sku: "sku-3",
          path: "camiseta-amarela",
          name: "Camiseta Amarela",
          image: "media/shirt-3.jpg",
          price: 61.49,
          filter: [
            {
              color: "Amarela",
            },
          ],
        },
        {
          id: 4,
          sku: "sku-4",
          path: "camiseta-rosa",
          name: "Camiseta Rosa",
          image: "media/shirt-4.jpg",
          price: 52.0,
          filter: [
            {
              color: "Rosa",
            },
          ],
        },
      ],
    },
  ];
  console.log(response.json);
  return response.json({
    amount: camisas.length,
    camisas,
  });
});
app.get("/api/V1/categories/calcas", (request, response) => {
  const calcas = [
    {
      filters: [
        {
          gender: "Gênero",
        },
      ],
      items: [
        {
          id: 10,
          sku: "sku-10",
          path: "calca-social",
          name: "Calça Social",
          image: "media/pants-1.jpg",
          price: 39.9,
          specialPrice: 29.9,
          filter: [
            {
              gender: "Masculina",
            },
          ],
        },
        {
          id: 11,
          sku: "sku-11",
          path: "calca-feminina",
          name: "Calça Feminina",
          image: "media/pants-2.jpg",
          price: 24.15,
          filter: [
            {
              gender: "Feminina",
            },
          ],
        },
        {
          id: 12,
          sku: "sku-12",
          path: "calca-la-feminina",
          name: "Calça de Lã Feminina",
          image: "media/pants-3.jpg",
          price: 61.49,
          filter: [
            {
              gender: "Feminina",
            },
          ],
        },
        {
          id: 13,
          sku: "sku-13",
          path: "calca-caminhada-masculina",
          name: "Calça Caminhada Masculina",
          image: "media/pants-4.jpg",
          price: 70.0,
          specialPrice: 58,
          filter: [
            {
              gender: "Masculina",
            },
          ],
        },
        {
          id: 14,
          sku: "sku-14",
          path: "calca-caminhada-feminina",
          name: "Calça Caminhada Feminina",
          image: "media/pants-5.jpg",
          price: 70.0,
          filter: [
            {
              gender: "Feminina",
            },
          ],
        },
      ],
    },
  ];
  console.log(response.json);
  return response.json({
    amount: calcas.length,
    calcas,
  });
});
app.get("/api/V1/categories/tenis", (request, response) => {
  const tenis = [
    {
      filters: [
        {
          color: "Cor",
        },
      ],
      items: [
        {
          id: 31,
          sku: "sku-31",
          path: "tenis-preto-couro",
          name: "Tênis Preto Couro",
          image: "media/shoes-1.jpg",
          price: 129.9,
          filter: [
            {
              color: "Preta",
            },
          ],
        },
        {
          id: 32,
          sku: "sku-32",
          path: "tenis-preto",
          name: "Tênis Preto Masculino",
          image: "media/shoes-2.jpg",
          price: 140.5,
          filter: [
            {
              color: "Laranja",
            },
          ],
        },
        {
          id: 33,
          sku: "sku-33",
          path: "tenis-corrida",
          name: "Tênis Corrida",
          image: "media/shoes-3.jpg",
          price: 261.49,
          filter: [
            {
              color: "Amarela",
            },
          ],
        },
        {
          id: 34,
          sku: "sku-34",
          path: "tenis-corrida-gel",
          name: "Tênis Corrida Gel",
          image: "media/shoes-4.jpg",
          price: 352.0,
          filter: [
            {
              color: "Cinza",
            },
          ],
        },
        {
          id: 35,
          sku: "sku-35",
          path: "tenis-slip",
          name: "Tênis Slip Azul",
          image: "media/shoes-5.jpg",
          price: 92.0,
          filter: [
            {
              color: "Azul",
            },
          ],
        },
        {
          id: 36,
          sku: "sku-36",
          path: "tenis-slip-preto",
          name: "Tênis Slip Preto",
          image: "media/shoes-6.jpg",
          price: 90.0,
          specialPrice: 50.9,
          filter: [
            {
              color: "Preto",
            },
          ],
        },
        {
          id: 37,
          sku: "sku-37",
          path: "tenis-corrida-rosa",
          name: "Tênis Corrida - Rosa ",
          image: "media/shoes-7.jpg",
          price: 315.0,
          filter: [
            {
              color: "Rosa",
            },
          ],
        },
        {
          id: 38,
          sku: "sku-38",
          path: "tenis-rosa",
          name: "Tênis Rosa Feminino",
          image: "media/shoes-8.jpg",
          price: 281.0,
          filter: [
            {
              color: "Rosa",
            },
          ],
        },
        {
          id: 39,
          sku: "sku-39",
          path: "tenis-casual",
          name: "Tênis Casual Bege",
          image: "media/shoes-9.jpg",
          price: 198.0,
          specialPrice: 180.9,
          filter: [
            {
              color: "Bege",
            },
          ],
        },
        {
          id: 40,
          sku: "sku-40",
          path: "tenis-corrida-feminino-azul",
          name: "Tênis Corrida Feminino Azul",
          image: "media/shoes-10.jpg",
          price: 329.0,
          filter: [
            {
              color: "Azul",
            },
          ],
        },
      ],
    },
  ];
  console.log(response.json);
  return response.json({
    amount: tenis.length,
    tenis,
  });
});
app.use("*", (request, response) =>
  response.status(404).json({ message: "Oops, nothing to show here." })
);

console.log(process.env);

// São suas variaveis de ambiente, o heroku tem lá as dele tambem

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Serve is running at ${HOST}`));
