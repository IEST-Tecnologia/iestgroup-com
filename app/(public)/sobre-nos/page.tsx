import Image from "next/image";
import React from "react";
import BannerAboutUs from "@/assets/sobre-nos/banner-sobre-nos.jpg";
import BannerQuemSomos from "@/assets/sobre-nos/banner-quem-somos.jpg";
import IconeMissao from "@/assets/sobre-nos/icone-missao.png";
import IconeVisao from "@/assets/sobre-nos/icone-visao.png";
import IconeValores from "@/assets/sobre-nos/icone-valores.png";
import LogoICarros from "@/assets/sobre-nos/logo-icarros.jpg";
import LogoCanaltech from "@/assets/sobre-nos/logo-canaltech.jpg";
import LogoGs from "@/assets/sobre-nos/logo-gs.jpg";
import LogoXinhua from "@/assets/sobre-nos/logo-xinhua.jpg";
import LogoEcbr from "@/assets/sobre-nos/logo-ecbr.jpg";
import PageHeroSection from "@/components/PageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
};

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BannerQuemSomos}
        secondBannerImage={BannerAboutUs}
        secondBannerAlt="Dois homens sentados em uma cadeira de escritório"
        service={false}
        shadowbg={false}
      >
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          Nossa História
        </h1>
        <h2 className="text-black text-xl md:text-3xl text-center md:text-left font-bold mb-10">
          Somos o IEST Group, uma empresa especializada em facilitar e otimizar
          os processos de negócios internacionais no Brasil.
        </h2>
        <div className="text-lg font-base md:columns-2 md:gap-12.5 [&>p]:mb-6">
          <p>
            Nossa história começou em 2012, com a missão de auxiliar empresas
            chinesas a se estabelecerem no Brasil, oferecendo soluções completas
            de serviços empresariais. Oferecemos uma ampla gama de serviços
            empresariais, incluindo Recursos Humanos, contabilidade,
            terceirização de processos de negócios (BPO), serviços paralegais,
            preços de transferência, pesquisa de mercado, tradução e soluções
            digitais, como e-commerce e marketing digital.
          </p>
          <p>
            Ao longo de nossa trajetória, já ajudamos mais de 300 empresas de
            médio e grande porte a desenvolver negócios no Brasil, consolidando
            nossa posição como referência no mercado.
          </p>
          <p>
            Atualmente, temos filiais em diversos estados do Brasil, incluindo
            São Paulo, Barueri, Sorocaba, Rio de Janeiro, Itajaí e Goiânia, além
            de unidades na China, localizadas em Pequim, Xangai e Shenzhen.
          </p>
          <p>
            Somos pioneiros e a única empresa brasileira a organizar feiras de
            recrutamento para empresas chinesas. Até hoje, já realizamos seis
            edições da Feira de Recrutamento de Empresas Chinesas no Brasil,
            conectando talentos locais com oportunidades em multinacionais.Somos
            pioneiros e a única empresa brasileira a organizar feiras de
            recrutamento para empresas chinesas. Até hoje, já realizamos seis
            edições da Feira de Recrutamento de Empresas Chinesas no Brasil,
            conectando talentos locais com oportunidades em multinacionais.
          </p>
          <p>
            Em 2020, contribuímos de forma significativa durante a pandemia, ao
            criar e distribuir gratuitamente o primeiro manual de prevenção e
            combate à Covid-19. Por essa iniciativa, fomos reconhecidos pelo
            Consulado Geral da República Popular da China em São Paulo como a
            empresa que mais contribuiu com a sociedade naquele período.
          </p>
          <p>
            Nossa expertise e dedicação nos permitiram construir um sólido
            relacionamento com a comunidade chinesa. Atualmente, nosso perfil no
            WeChat conta com quase 40 mil seguidores chineses, muitos deles
            executivos, refletindo nossa influência e credibilidade nesse
            mercado chinês.
          </p>
          <p>
            Em nossa plataforma de notícias, <strong>China2Brazil</strong>,
            compartilhamos conteúdos sobre economia, negócios, empreendedorismo,
            tecnologia e cultura da China.
          </p>
        </div>
      </PageHeroSection>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <Image
              className="w-32 md:w-auto"
              src={IconeMissao}
              alt="Icone de missão"
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-start gap-5 text-center md:text-left px-3 md:px-0">
            <h2 className="w-full text-primary text-3xl font-bold uppercase">
              Missão
            </h2>
            <p className="text-lg font-base">
              Usar nossas expertises para reduzir barreiras
            </p>
            <p className="text-lg font-base">
              Facilitar e promover conexões estratégicas entre empresas.
            </p>
            <p className="text-lg font-base">
              Buscar e fornecer soluções empresariais que atendam às
              necessidades de nossos clientes com eficiência e qualidade.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <Image
              className="w-32 md:w-auto"
              src={IconeVisao}
              alt="Icone de visão"
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-start gap-5 text-center md:text-left px-3 md:px-0">
            <h2 className="w-full text-primary text-3xl font-bold uppercase">
              Visão
            </h2>
            <p className="text-lg text-white font-base">
              Ser uma organização referência no atendimento a empresas
              multinacionais, oferecendo soluções completas com excelente
              relação custo-benefício, garantindo qualidade, eficiência e
              compromisso com o sucesso de nossos clientes.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <Image
              className="w-32 md:w-auto"
              src={IconeValores}
              alt="Icone de valores"
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-start gap-5 text-center md:text-left px-3 md:px-0">
            <h2 className="w-full text-primary text-3xl font-bold uppercase">
              Valores
            </h2>
            <p className="w-full text-lg font-base">
              – Agir com Integridade; <br />
              – Busca por Excelência; <br />
              – Diversidade Cultural; <br />– Satisfação do Cliente
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto flex flex-col px-3 md:px-0">
          <h2 className="text-primary text-3xl font-bold uppercase text-center mb-10 ">
            Serviços
          </h2>
          <p className="text-lg font-base text-center md:text-left">
            Além dos diversos serviços informados acima, a empresa possui um
            ótimo relacionamento na comunidade chinesa, sendo uma das empresas
            mais reconhecidas da plataforma Wechat, a qual possui mais de 15.000
            seguidores. Caso sua empresa necessite de uma consultoria para
            ingressar no mercado chinês, a IEST sabe o caminho
          </p>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h2 className="text-primary text-3xl font-bold uppercase text-center mb-10">
            Nossos clientes
          </h2>
          <div className="w-full h-135"></div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-275 mx-auto flex flex-col">
          <h2 className="text-primary text-3xl font-bold uppercase text-center mb-10">
            Parceiros
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoICarros}
                alt="Logo da empresa Icarros"
              />
            </div>
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoCanaltech}
                alt="Logo da empresa Canaltech"
              />
            </div>
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoGs}
                alt="Logo da empresa Gs"
              />
            </div>
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoXinhua}
                alt="Logo da empresa Xinhua"
              />
            </div>
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoEcbr}
                alt="Logo da empresa Ecbr"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
