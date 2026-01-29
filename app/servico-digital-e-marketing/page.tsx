import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerParalegal from "@/assets/servicos/banner-paralegal.png";
import BgParalegal from "@/assets/servicos/bg-paralegal.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BgParalegal}
        secondBannerImage={BannerParalegal}
        secondBannerAlt="Dois homens apontando para um computador"
        service={true}
        shadowbg={true}
      >
        <h1 className="w-full text-blue-iest text-3xl font-bold text-center md:text-left uppercase mb-5">
          SERVIÇOS DIGITAIS
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          Com a transformação digital, muitas empresas precisaram se reinventar
          para estabelecer uma presença forte no mercado online e proporcionar
          uma experiência completa e satisfatória aos clientes.
        </h2>
        <div className="text-lg text-primary font-base mb-8 text-justify md:text:left">
          <p>
            Nossa equipe de profissionais está preparada para auxiliar
            companhias a alcançarem um excelente posicionamento no ambiente
            digital. Realizamos análises detalhadas e oferecemos orientações
            estratégicas para otimizar a comunicação da marca, fortalecendo sua
            identidade e conexão com o público-alvo.
          </p>
        </div>
        <div className="max-w-164 z-20 bg-blue-iest py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              Segue abaixo demonstrativo com nossos serviços relacionados a
              digital e marketing
            </p>
          </div>
          <div className="text-6xl">
            <Image
              className="w-16 md:w-36"
              src={ArrowDown}
              alt="ícone de uma seta apontando para baixo"
            />
          </div>
        </div>
      </PageHeroSection>
      <div className="flex flex-col gap-10 my-10">
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              1) E-commerce
            </h2>
            <p className="text-sm md:text-md text-primary font-light">
              Desenvolvemos soluções completas para plataformas de comércio
              eletrônico, otimizando a experiência do usuário e maximizando as
              vendas através do Alibaba.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              2) Marketing Digital
            </h2>
            <p className="text-sm md:text-md text-primary font-light">
              Criamos estratégias personalizadas para aumentar a visibilidade da
              marca, engajar o público e gerar resultados por meio de campanhas
              digitais, SEO, mídia paga e redes sociais.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              3) Moderação de Conteúdo
            </h2>
            <p className="text-sm md:text-md text-primary font-light">
              Oferecemos serviços especializados de moderação de conteúdo,
              garantindo que todas as interações e publicações em plataformas
              digitais estejam alinhadas aos valores da marca e às diretrizes
              legais.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              4) Design
            </h2>
            <p className="text-sm md:text-md text-primary font-light">
              Oferecemos serviços de design criativo e funcional para fortalecer
              a identidade visual da marca, incluindo materiais gráficos e
              apresentações institucionais.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
