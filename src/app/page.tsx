"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import { Navbar } from "./components/Navbar";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import TwoLevelChart from "./components/TwoLevelChart";

const pages = [
  {
    id: 1,
    titulo: "Sobre Mim",
    sectionId: "sobre-mim",
  },
  {
    id: 2,
    titulo: "Projetos/Aplicacoes",
    sectionId: "projeto-aplicacoes",
  },
  {
    id: 3,
    titulo: "Tecnologias",
    sectionId: "tecnologias",
  },
  {
    id: 4,
    titulo: "Estatísticas",
    sectionId: "estatisticas",
  },
];

const image = "/eu.jpeg";

const projetos = [
  {
    id: 1,
    titulo: "Contact Form",
    descricao:
      "Projeto de formulário feito com Angular, projeto esse que é de um site chamado Front End Mentor, uma plataforma para testar as habilidades de um dev front end",
    image: "/contact-form.png",
    link: "https://github.com/filipanselmo11/contact-form",
  },
  {
    id: 2,
    titulo: "Product With List Cart",
    descricao:
      "Projeto de carrinho de doces feito, em Vue 3 e Bootstrap, projeto esse que também é um desafio do Front End Mentor.",
    image: "/cart-with-product.png",
    link: "https://github.com/filipanselmo11/product-list-with-cart",
  },
  {
    id: 3,
    titulo: "Vue Streaming",
    descricao:
      "Projeto feito em Vue 3 e Boostrap, esse projeto é de listagem de filmes e séries que foram consumidas pela api do The Movie Database, projeto esse que fazia parte de um processo seletivo.",
    image: "/vue-streaming.png",
    link: "https://github.com/filipanselmo11/vue-streaming",
  },
  {
    id: 4,
    titulo: "Minha Loja Vuetify",
    descricao:
      "Projeto feito com Vue 3, Pinia e Vuetify. Esse projeto é uma espécie de plataforma de supermercados, onde a pessoa pode pesquisar por categorias, criar conta e realizar pedidos.",
    image: "/minha-loja-vuetify.png",
    link: "https://github.com/filipanselmo11/minha-loja-vuetify",
  },
  {
    id: 5,
    titulo: "Band App",
    descricao:
      "Aplicação feito com Angular e Tailwindcss, esse app é um sistema de bandas de rock em geral, nessa versão atual as bandas que compõem o sistema são, Slipknot, SOAD, Korn e Linkin Park",
    image: "/band-app.png",
    link: "https://github.com/filipanselmo11/band-app",
  },
  {
    id: 6,
    titulo: "Escola App",
    descricao:
      "App de um sistema escolar feito com Angular e Tailwind, esse sistema é um sistema de gerenciamento de alunos, professores e secretários, cada um com sua visão. Alunos viam suas notas, professores lançam as notas e os secretários gerenciam tantos notas de alunos e de professores",
    image: "/escola-app.png",
    link: "https://github.com/filipanselmo11/escola-app",
  },
  {
    id: 7,
    titulo: "Primeiro Portifólio",
    descricao:
      "Sistema do primeiro portifólio meu, feito com HTML, CSS e JS. Nessa época eu estava conhecendo alguns frameworks de back end e front end",
    image: "/portifolio-antigo.png",
    link: "https://github.com/filipanselmo11/portifolio",
  },
  {
    id: 8,
    titulo: "Novo Portifolio",
    descricao: "Segundo portifólio, esse sistema aqui foi feito usando React e a biblioteca de componentes chamada de Chackra UI. Também utilizei Typescript nesse projeto.",
    image: "/novo-portifolio.png",
    link: "https://github.com/filipanselmo11/novo-portifolio",
  },
  {
    id: 9,
    titulo: "Design Patterns Ts",
    descricao: "Projeto de padroes de projetos em Typescript, esse repo é de estudo de alguns padroes de projeto, feitos em TS. Atualmente só tem 2 exemplos de padroes neste repo.",
    image: "/design-pattern.png",
    link: "https://github.com/filipanselmo11/Design-Patterns-TS",
  },
  {
    id: 10,
    titulo: "Web Academy T4",
    descricao: "Repositório com projetos/atividades do curso de capacitação da UFAM, Web Academy. Nesse repo tem projetos que vão de front end até infraestrutura.",
    image: "/web-academy.png",
    link: "#",
  },
  {
    id: 11,
    titulo: "Store Customers SC",
    descricao: "Projeto de um contrato inteligente feito com a linguagem Solidity, linguagem essa que é usada para desenvolvimento de contratos inteligentes (smart contracts) que são executados em um blockchain da Rede Ethereum.",
    image: "/store-customer-sc.png",
    link: "https://github.com/filipanselmo11/store-customers-sc",
  },
  {
    id: 12,
    titulo: "Fighting Games Fastapi",
    descricao: "Projeto de backend, feito como o framework Fastapi, um framework web Python. Este projeto é relacionado ao CRUD de personagens de jogos de luta, desde de jogos como Mortal Kombat até Virtua Fighter.",
    image: "/fg-game-fastapi.png",
    link: "https://github.com/filipanselmo11/fighting-games-fastapi",
  },
];

const tecnologias = [
  {
    id: 1,
    image: "https://www.svgrepo.com/show/354528/vue.svg",
  },
  {
    id: 2,
    image: "https://www.svgrepo.com/show/452156/angular.svg",
  },
  {
    id: 3,
    image: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    id: 4,
    image: "https://www.svgrepo.com/show/374144/typescript.svg",
  },
  {
    id: 5,
    image: "https://www.svgrepo.com/show/368858/nextjs.svg",
  },
  {
    id: 6,
    image: "https://www.svgrepo.com/show/303532/python-3-logo.svg",
  },
  {
    id: 7,
    image: "https://www.svgrepo.com/show/330398/express.svg",
  },
  {
    id: 8,
    image: "https://www.svgrepo.com/show/330413/fastapi.svg",
  },
  {
    id: 9,
    image: "https://www.svgrepo.com/show/378837/node.svg",
  },
  {
    id: 10,
    image: "https://www.svgrepo.com/show/372884/javascript-1.svg",
  },
  {
    id: 11,
    image: "https://www.svgrepo.com/show/452234/java.svg",
  },
  {
    id: 12,
    image: "https://www.svgrepo.com/show/354379/spring.svg",
  },
  {
    id: 13,
    image: "https://www.svgrepo.com/show/447394/html.svg",
  },
  {
    id: 14,
    image: "https://www.svgrepo.com/show/452185/css-3.svg",
  },
  {
    id: 15,
    image: "https://www.svgrepo.com/show/373554/django.svg",
  },
  {
    id: 16,
    image: "https://www.svgrepo.com/show/373788/light-solidity.svg",
  },
  {
    id: 17,
    image: "https://www.svgrepo.com/show/338985/blockchain.svg",
  },
];

const data1 = [
  { name: "Vue", value: 84 },
  { name: "Typescript", value: 73 },
  { name: "Html", value: 13 },
  { name: "Javascript", value: 30 },
  { name: "Python", value: 24 },
  { name: "Java", value: 10 },
];

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", "#00BFFF"];

// const fill1 = "#ddd";

export default function Home() {
  const irPara = (link: string) => {
    window.location.href = link;
  };

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar image={image}>
        {pages.map((page) => (
          <Button
            key={page.id}
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => scrollTo(page.sectionId)}
          >
            {page.titulo}
          </Button>
        ))}
      </Navbar>
      <main>
        <section id="projetos-aplicacoes">
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            style={{ marginTop: "30px" }}
          >
            Projetos / Aplicações
          </Typography>
          <Grid2 container spacing={2} style={{ marginTop: "30px" }}>
            {projetos.map((projeto) => (
              <Card
                sx={{ maxWidth: 345, padding: 1, position: "relative" }}
                key={projeto.id}
                style={{ backgroundColor: "black", color: "#ddd" }}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    objectFit: "cover",
                  }}
                  component="img"
                  image={projeto.image}
                />
                <CardContent sx={{ padding: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ marginBottom: 2 }}
                  >
                    {projeto.titulo}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    {projeto.descricao}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 2,
                  }}
                >
                  <Button
                    size="medium"
                    sx={{
                      textTransform: "none",
                      padding: 1,
                      color: "#A9A9A9",
                    }}
                    onClick={() => irPara(projeto.link)}
                  >
                    Link do repo
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid2>
        </section>
        <section id="tecnologias">
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            style={{ marginTop: "40px" }}
          >
            Tecnologias que já trabalhei ou fiz projetos pessoais
          </Typography>
          <Grid2 container spacing={2} style={{ marginTop: "30px" }}>
            {tecnologias.map((tecnologia) => (
              <Card
                sx={{ maxWidth: 345 }}
                key={tecnologia.id}
                style={{ backgroundColor: "#ddd" }}
              >
                <CardMedia
                  sx={{ height: 200, objectFit: "cover" }}
                  component="img"
                  image={tecnologia.image}
                />
              </Card>
            ))}
          </Grid2>
        </section>
        <section
          id="estatisticas"
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            style={{ marginTop: "40px" }}
          >
            Algumas estatísticas
          </Typography>
          <TwoLevelChart data1={data1} colors={colors}></TwoLevelChart>
        </section>
        <section id="sobre-mim">
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            style={{ marginTop: "40px" }}
          >
            Sobre mim
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: 2,
              maxWidth: "400px",
              margin: "20px auto",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Olá, meu nome é Fílip Anselmo
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginTop: "10px" }}
            >
              Sou um desenvolvedor de software de 27 anos, formado em Sistemas
              de Informação pela Escola Superior de Tecnologia da UEA. Estou no
              mundo da programação há 7 anos, sendo 3 anos de experiência
              profissional. Tenho conhecimentos sólidos tanto em tecnologias de
              front-end quanto de back-end, o que me permite desenvolver
              soluções completas e eficientes. Ao longo da minha jornada,
              trabalhei em diversos projetos que me ajudaram a aprimorar minhas
              habilidades técnicas e interpessoais. Aprendi a entender
              profundamente os problemas a serem resolvidos e como abordá-los de
              maneira estratégica, além de melhorar minha resiliência diante dos
              desafios diários, como bugs e dificuldades imprevistas. Além das
              habilidades técnicas, busco sempre me manter atualizado com as
              tendências do mercado, explorando novas ferramentas, frameworks e
              boas práticas de desenvolvimento. Acredito que a colaboração em
              equipe e a constante aprendizagem são fundamentais para a entrega
              de soluções de qualidade e para o crescimento contínuo na carreira
              de desenvolvedor. Estou sempre em busca de novos desafios que me
              permitam aplicar minha experiência e aprender ainda mais.
            </Typography>
          </Box>
        </section>
      </main>
      <Navbar image={image}>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/filip-anselmo-04b651152/"
          target="_blank"
          sx={{ marginLeft: 2 }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/filipanselmo11"
          target="_blank"
          sx={{ marginLeft: 2 }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          color="inherit"
          href="mailto:filipanselmoalvesdasilva870@gmail.com"
          target="_blank"
          sx={{ marginLeft: 2 }}
        >
          <Mail />
        </IconButton>
      </Navbar>
    </>
  );
}
