import React from 'react'

export default function page() {
  return (
    <>
    <div className='bg-[url(/banner-quem-somos.jpg)]'>
      <div className='container h-[70vh]'></div>
    </div>
    <div className='w-full relative mx-auto flex'>
      <div className='w-[10%] flex min-h-1 relative'>
        <div className='w-full flex flex-wrap content-start'></div>
      </div>
      <div className='w-[90%] flex min-h-1 relative'>
        <div className='w-full relative flex flex-wrap content-start bg-white shadow-xl -mt-30 px-[5%] pt-[5%] pb-[10%]'>
          <h1 className='text-blue-iest text-3xl font-bold uppercase mb-5'>Nossa História</h1>
          <h2 className='text-black text-3xl font-bold mb-10'>Somos o IEST Group, uma empresa especializada em facilitar e otimizar os processos de negócios internacionais no Brasil.</h2>
          <div className='text-lg text-primary font-base columns-2 gap-12.5 [&>p]:mb-6'>
            <p>Nossa história começou em 2012, com a missão de auxiliar empresas chinesas a se estabelecerem no Brasil, oferecendo soluções completas de serviços empresariais. Oferecemos uma ampla gama de serviços empresariais, incluindo Recursos Humanos, contabilidade, terceirização de processos de negócios (BPO), serviços paralegais, preços de transferência, pesquisa de mercado, tradução e soluções digitais, como e-commerce e marketing digital.</p>
            <p>Ao longo de nossa trajetória, já ajudamos mais de 300 empresas de médio e grande porte a desenvolver negócios no Brasil, consolidando nossa posição como referência no mercado.</p>
            <p>Atualmente, temos filiais em diversos estados do Brasil, incluindo São Paulo, Barueri, Sorocaba, Rio de Janeiro, Itajaí e Goiânia, além de unidades na China, localizadas em Pequim, Xangai e Shenzhen.</p>
            <p>Somos pioneiros e a única empresa brasileira a organizar feiras de recrutamento para empresas chinesas. Até hoje, já realizamos seis edições da Feira de Recrutamento de Empresas Chinesas no Brasil, conectando talentos locais com oportunidades em multinacionais.Somos pioneiros e a única empresa brasileira a organizar feiras de recrutamento para empresas chinesas. Até hoje, já realizamos seis edições da Feira de Recrutamento de Empresas Chinesas no Brasil, conectando talentos locais com oportunidades em multinacionais.</p>
            <p>Em 2020, contribuímos de forma significativa durante a pandemia, ao criar e distribuir gratuitamente o primeiro manual de prevenção e combate à Covid-19. Por essa iniciativa, fomos reconhecidos pelo Consulado Geral da República Popular da China em São Paulo como a empresa que mais contribuiu com a sociedade naquele período.</p>
            <p>Nossa expertise e dedicação nos permitiram construir um sólido relacionamento com a comunidade chinesa. Atualmente, nosso perfil no WeChat conta com quase 40 mil seguidores chineses, muitos deles executivos, refletindo nossa influência e credibilidade nesse mercado chinês.
            </p>
            <p>Em nossa plataforma de notícias, <strong>China2Brazil</strong>, compartilhamos conteúdos sobre economia, negócios, empreendedorismo, tecnologia e cultura da China.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
