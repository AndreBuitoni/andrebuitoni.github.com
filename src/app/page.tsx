import Header from "./components/header";
import Title from "./components/title";

// import { fotoAndre } from "../../assets/foto-andre.png"
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="HOME" className="flex justify-between">
        <figure>
          <Image
            src="../../assets/foto-andre.png"
            width={60}
            height={80}
            alt="Foto do André"
          />
        </figure>
        <article className="w-6/12">
          <p className="text-yellow-500 text-5xl font-bold">
            - EU SOU ANDRÉ BUITONI.
          </p>
          <p className="text-3xl font-bold">
            WEB DESIGNER E DESENVOLVEDOR FRONTEND
          </p>
          <p>
            Transformo ideias em interfaces envolventes e funcionais. Combino
            habilidades técnicas com uma abordagem criativa para garantir
            projetos atraentes, intuitivos e acessíveis. Acredito que o design é
            a chave para uma experiência de usuário memorável.
          </p>
        </article>
        <Header />
      </section>

      <section id="SOBRE MIM">
        <Title>
          SOBRE <span className="text-yellow-500">MIM</span>
        </Title>
        <article className="flex">
          <ul className="mr-4 font-light text-gray-400 space-y-1">
            <li>
              Primeiro Nome: <span className="font-bold text-white">André</span>
            </li>
            <li>
              Nascimento:{" "}
              <span className="font-bold text-white">12/03/1988</span>
            </li>
            <li>
              Freelancer:{" "}
              <span className="font-bold text-white">Disponível</span>
            </li>
            <li>
              Celular:{" "}
              <span className="font-bold text-white">(48) 99203-8683</span>
            </li>
            <li>
              Github: <span className="font-bold text-white">AndreBuitoni</span>
            </li>
          </ul>
          <ul className="mx-4 font-light text-gray-400 space-y-1">
            <li>Segundo Nome: <span className="font-bold text-white">Buitoni</span></li>
            <li>Nacionalidade: <span className="font-bold text-white">Brasileiro / Italiano</span></li>
            <li>Endereço: <span className="font-bold text-white">Florianópolis, SC - Brasil</span></li>
            <li>Email: <span className="font-bold text-white">a.buitoni@gmail.com</span></li>
          </ul>
        </article>
      </section>
      <section id="PORTFOLIO">
        <Title>
          MEU <span className="text-yellow-500">PORTFOLIO</span>
        </Title>
      </section>
      <section id="CONTATO">
        <Title>
          ENTRE <span className="text-yellow-500">EM CONTATO</span>
        </Title>
      </section>
      <section id="BLOG">
        <Title>
          MEU <span className="text-yellow-500">BLOG</span>
        </Title>
      </section>
    </main>
  );
}
