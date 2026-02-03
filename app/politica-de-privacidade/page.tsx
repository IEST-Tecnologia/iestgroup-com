import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

function SectionComponent({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 font-light pb-6 leading-6 px-4 md:px-0 ${last ? "mb-0" : " mb-6"}`}
    >
      <h2 className="text-primary font-bold text-3xl">{title}</h2>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}

export default function page() {
  return (
    <main>
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-6 px-4 md:px-0">
          <h1 className="text-3xl text-primary font-semibold">
            Política de Privacidade
          </h1>
        </div>
        <SectionComponent title="I. INTRODUÇÃO E OBJETIVO">
          <p className="text-primary text-md">
            A Política de Segurança da Informação apresentada tem como objetivo
            orientar sobre o gerenciamento, em amplo aspecto, das atividades e
            operações de tratamento de dados pessoais existentes nas empresas
            que compõem o grupo econômico da IEST GROUP Este documento integra o
            programa de compliance da IEST GROUP à Lei Geral de Proteção de
            Dados (Lei nº 13.709/2018) e demais legislação/regulamentação que
            tratam sobre o tema. Por meio do presente documento, a IEST GROUP
            tem a intenção de adequar suas operações de tratamento de dados
            pessoais às regulamentações legais sobre o tema e, em especial, à
            Lei Geral de Proteção de Dados aprovada em agosto de 2018. No
            desempenho de suas atividades a IEST GROUP realiza operações de
            tratamento de dados pessoais alinhadas ao melhor interesse e
            direitos dos titulares dos dados pessoais, podendo ser caracterizada
            como Controladora de Dados Pessoais, de acordo com as definições da
            LGPD, reforçando, em todas as posições que ocupar, seu compromisso
            com o cumprimento das regras de privacidade e proteção de dados
            pessoais aplicáveis. As adequações referentes ao processo de
            conformidade à LGPD abrangem um trabalho de interpretação da Lei
            para definição das obrigações legais, levantamento dos fatos
            relevantes e pertinentes para sua aplicação e aferição de fluxos e
            processos que contribuem ou não para os ajustes à norma legal.
            Assim, esta Política tem o condão de orientar quanto às diretrizes
            aplicáveis à privacidade e proteção dos dados pessoais dos clientes,
            colaboradores, terceiros e parceiros dos quais a IEST GROUP tem
            acesso em função do desempenho de suas atividades, estabelecendo as
            regras aplicáveis sobre o tratamento dos dados coletados, de acordo
            com a legislação e regulamentação em vigor. Esta Política deve ser
            analisada em conjunto com as obrigações previstas nos documentos
            referidos abaixo, que contenham informações em geral,
            complementando-a quando for o caso: • Políticas Geral de Segurança
            da Informação e normas de segurança da informação, assim como termos
            e condições de uso, que tratem sobre confidencialidade, integridade
            e disponibilidade das informações da IEST GROUP; • Contratos de
            trabalho dos empregados da IEST GROUP, termos de confidencialidade e
            outros documentos similares, que contenham obrigações de
            confidencialidade em relação às informações mantidas pela
            Instituição; • Quaisquer normas internas que tratem da proteção de
            dados pessoais, atuais ou que venham a ser periodicamente elaboradas
            e atualizadas.
          </p>
        </SectionComponent>
        <SectionComponent title="II. TERMOS E DEFINIÇÕES">
          <p className="text-primary text-md">
            <strong className="font-semibold">DADOS PESSOAIS:</strong>{" "}
            Informação relacionada a pessoa natural identificada ou
            identificável. Também são considerados dados pessoais aqueles
            utilizados para formação do perfil comportamental de determinada
            pessoa natural.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">DADOS PESSOAIS SENSÍVEIS:</strong>{" "}
            Dado pessoal sobre origem racial ou étnica, convicção religiosa,
            opinião política, filiação a sindicato ou a organização de caráter
            religioso, filosófico ou político, dado referente à saúde ou à vida
            sexual, dado genético ou biométrico quando vinculado a pessoa
            natural.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS (&quot;ANPD&quot;):
            </strong>{" "}
            Órgão da administração pública responsável por zelar, implementar e
            fiscalizar o cumprimento da LGPD em todo território nacional. A ANPD
            foi instituída pela LGPD como órgão da administração pública federal
            com autonomia técnica, integrante da Presidência da República,
            definido a sua natureza como transitória e passível de transformação
            pelo Poder Executivo em entidade da administração pública federal
            indireta, submetida a regime autárquico especial e vinculada à
            Presidência da República.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              LEI GERAL DE PROTEÇÃO DE DADOS (&quot;LGPD&quot;):
            </strong>{" "}
            Diploma normativo (Lei nº 13.709, de 14 de agosto de 2018) que
            dispõe sobre o tratamento de dados pessoais em meios digitais ou
            físicos realizados por pessoa natural ou por pessoa jurídica, de
            direito público ou privado, tendo como objetivo defender os
            titulares de dados pessoais e ao mesmo tempo permitir o uso dos
            dados para finalidades diversas, equilibrando interesses e
            harmonizando a proteção da pessoa humana com o desenvolvimento
            tecnológico e econômico.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              AGENTES DE TRATAMENTO DE DADOS PESSOAIS:
            </strong>{" "}
            O controlador e o operador de dados pessoais.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              CONTROLADOR DE DADOS PESSOAIS:
            </strong>{" "}
            Pessoa física ou jurídica, de direito público ou privado, a quem
            competem as decisões referentes ao tratamento de dados pessoais.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              OPERADOR DE DADOS PESSOAIS:
            </strong>{" "}
            Pessoa física ou jurídica, de direito público ou privado, que
            realiza o tratamento de dados pessoais em nome do Controlador.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              TRATAMENTO DE DADOS PESSOAIS (&quot;TRATAMENTO&quot;):
            </strong>{" "}
            Toda operação realizada com dados pessoais, como as que se referem a
            coleta, produção, recepção, classificação, utilização, acesso,
            reprodução, transmissão, distribuição, processamento, arquivamento,
            armazenamento, eliminação, avaliação, controle da informação,
            modificação, comunicação, transferência, difusão ou extração.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">ANONIMIZAÇÃO:</strong> Utilização
            de meios técnicos, razoáveis e disponíveis no momento do tratamento
            de dados pessoais, por meio dos quais um dado perde a possibilidade
            de associação, direta ou indireta, a um indivíduo. O dado
            anonimizado não é considerado dado pessoal para os fins da LGPD.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              TITULAR DE DADOS PESSOAIS (&quot;TITULAR&quot;):
            </strong>{" "}
            Pessoa natural a quem se referem os dados pessoais que são objeto de
            tratamento.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              ENCARREGADO OU DATA PROTECTION OFFICER (&quot;DPO&quot;):
            </strong>{" "}
            Pessoa física ou jurídica indicada pelo Agente de Tratamento para
            atuar como canal de comunicação entre o Controlador, os titulares de
            dados e a Autoridade Nacional de Proteção de Dados.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">FORNECEDORES:</strong> No contexto
            da (IEST GROUP) são considerados fornecedores os outros terceiros
            contratados e subcontratados, pessoa física ou jurídica, não
            enquadrados como parceiros comerciais.
          </p>
        </SectionComponent>

        <SectionComponent title="III. ABRANGÊNCIA">
          <p className="text-primary text-md">
            A presente Política de Privacidade e Proteção de Dados Pessoais se
            aplica (i) aos empregados da IEST GROUP; (ii) a todos os terceiros,
            sejam eles pessoas físicas ou jurídicas, que atuam para ou em nome
            da IEST GROUP em operações que envolvam tratamento de dados pessoais
            que sejam realizadas no escopo das atividades conduzidas pela IEST
            GROUP; (iii) aos agentes de tratamento de dados pessoais externos à
            IEST GROUP que de qualquer forma se relacionem com ela; e (iv) aos
            titulares de dados pessoais, cujos dados são tratados pela IEST
            GROUP. As informações tratadas por esta Política incluem todos os
            dados detidos, usados ou transmitidos pela ou em nome da IEST GROUP,
            em qualquer tipo de mídia. Isso inclui dados pessoais registrados em
            papel, mantidos em sistemas de computador ou dispositivos portáteis,
            bem como dados pessoais transmitidos oralmente.
          </p>
        </SectionComponent>

        <SectionComponent title="IV. PRINCÍPIOS DE PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS">
          <p className="text-primary text-md">
            Nos termos da LGPD, a IEST GROUP cumprirá com os seguintes
            princípios de proteção de dados pessoais quando do tratamento deles:
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">FINALIDADE:</strong> a IEST GROUP
            realizará o tratamento de dados pessoais apenas para propósitos
            legítimos, específicos, explícitos e informados ao titular de dados
            pessoais, sem possibilidade de tratamento posterior de forma
            incompatível com essas finalidades;
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">ADEQUAÇÃO:</strong> a IEST GROUP
            realizará o tratamento de dados pessoais de forma compatível com as
            finalidades informadas ao titular de dados, e de acordo com o
            contexto do tratamento;
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">NECESSIDADE:</strong> o tratamento
            de dados pessoais realizado pela IEST GROUP será limitado ao mínimo
            necessário para a realização de suas finalidades, com abrangência
            dos dados pertinentes, proporcionais e não excessivos em relação às
            finalidades do tratamento;
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">LIVRE ACESSO:</strong> a IEST
            GROUP garantirá aos titulares de dados pessoais a consulta
            facilitada e gratuita sobre a forma e a duração do tratamento, bem
            como sobre a integralidade de seus dados;
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">QUALIDADE DOS DADOS:</strong> a
            IEST GROUP garantirá, aos titulares de dados pessoais, a exatidão,
            clareza, relevância e atualização dos dados, de acordo com a
            necessidade e para o cumprimento da finalidade de seu tratamento;
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">TRANSPARÊNCIA:</strong> a IEST
            GROUP garantirá aos titulares de dados pessoais informações claras,
            precisas e facilmente acessíveis sobre a realização do tratamento e
            os respectivos agentes de tratamento de dados pessoais, observados
            os segredos comercial e industrial;
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">SEGURANÇA:</strong> a IEST GROUP
            utilizará medidas técnicas e administrativas aptas a proteger os
            dados pessoais de acessos não autorizados e de situações acidentais
            ou ilícitas de destruição, perda, alteração, comunicação ou difusão;
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">PREVENÇÃO:</strong> a IEST GROUP
            adotará medidas para prevenir a ocorrência de danos em virtude do
            tratamento de dados pessoais;
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">NÃO DISCRIMINAÇÃO:</strong> a IEST
            GROUP garantirá a impossibilidade de realização do tratamento de
            dados pessoais para fins discriminatórios ilícitos ou abusivos;
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              RESPONSABILIZAÇÃO E PRESTAÇÃO DE CONTAS:
            </strong>{" "}
            a IEST GROUP compromete-se a demonstrar a adoção de medidas eficazes
            e capazes de comprovar a observância e o cumprimento das normas de
            proteção de dados pessoais, e a eficácia dessas medidas.
          </p>
        </SectionComponent>

        <SectionComponent title="V. DIRETRIZES">
          <p className="text-primary text-md font-semibold">
            1. Disposições iniciais
          </p>
          <p className="text-primary text-md">
            1.1. Esta Política visa demonstrar o compromisso da IEST GROUP em:
          </p>
          <p className="text-primary text-md">
            1.1.1. Zelar pela privacidade e proteção dos dados pessoais
            coletados dos clientes, dos colaboradores e dos parceiros, em função
            do desempenho de suas atividades;
          </p>
          <p className="text-primary text-md">
            1.1.2. Adotar diretrizes que assegurem o cumprimento, de forma
            abrangente, de normas e boas práticas relativas à privacidade e
            proteção de dados pessoais;
          </p>
          <p className="text-primary text-md">
            1.1.3. Promover a transparência sobre a forma pela qual a IEST GROUP
            trata dados pessoais; e
          </p>
          <p className="text-primary text-md">
            1.1.4. Adotar medidas de proteção em relação a risco de incidente de
            segurança que envolva dados pessoais.
          </p>
          <p className="text-primary text-md font-semibold">
            2. Informações sujeitas à Política
          </p>
          <p className="text-primary text-md">
            2.1. Estão sujeitas à esta Política:
          </p>
          <p className="text-primary text-md">
            2.1.1. Todas os dados e informações fornecidas ou coletadas no
            contexto da prestação dos serviços pela IEST GROUP aos seus clientes
            para todos os serviços prestados pela IEST GROUP, contábeis,
            consultoria, tecnologia, englobando todo e qualquer serviço prestado
            pela IEST GROUP, além da emissão da Nota Fiscal respectiva e
            publicidade; e
          </p>
          <p className="text-primary text-md">
            2.1.2. Todas as informações de colaboradores e parceiros coletadas
            no contexto de obrigação contratual ou legal.
          </p>
          <p className="text-primary text-md">
            2.2. Quanto à sua natureza, as informações fornecidas pelo titular
            do dado são aquelas inseridas ou encaminhadas por ele ou seu
            representante legal, decorrentes do contato, cadastro e/ou
            contratação junto à IEST GROUP como: nome completo, CPF, endereço
            completo, dados bancários, endereço de e-mail e número de telefone.
          </p>
          <p className="text-primary text-md">
            2.3. As práticas de privacidade específicas em relação a outros
            produtos e serviços que a IEST GROUP vier a disponibilizar aos seus
            clientes estarão associadas à aceitação pelo cliente ou terceiro de
            cada serviço.
          </p>
          <p className="text-primary text-md font-semibold">
            3. Dados Coletados, forma e finalidade da coleta
          </p>
          <p className="text-primary text-md">
            3.1. As informações serão coletadas por meios éticos e legais e
            armazenadas em ambiente seguro e controlado, pelo prazo exigido na
            regulamentação vigente. A IEST GROUP compromete-se a tomar todas as
            medidas cabíveis para manter o absoluto sigilo e a estrita
            confidencialidade de todas as informações, dados pessoais ou
            especificações a que tiver acesso ou que porventura venha a conhecer
            ou ter ciência de seus clientes, bem como dos indivíduos diretamente
            relacionados aos clientes, a que venha a ter acesso em razão da
            prestação dos serviços (todos serviços prestados pela IEST GROUP),
            sendo-lhe vedado ceder e/ou permitir acesso por terceiros a tais
            informações, ressalvadas as hipóteses descritas nesta Política.
          </p>
          <p className="text-primary text-md">
            3.2. O acesso de terceiros às informações coletadas pela IEST GROUP
            se dá exclusivamente para atendimento das finalidades informadas
            nesta Política e dentro do limite necessário ao desempenho das
            atividades relativas ao curso normal dos seus negócios, incluindo:
          </p>
          <p className="text-primary text-md">
            3.3. Ao aceitar esta política, o titular de dados está ciente e
            autoriza que todas as empresas do grupo econômico que utilizam a
            marca e nome fantasia IEST GROUP compartilhem entre si os dados
            pessoais e informações coletados de seus clientes para fins de
            cadastro e publicidade.
          </p>
          <p className="text-primary text-md">
            3.4. A IEST GROUP poderá compartilhar informações de forma agregada,
            publicamente e/ou com seus parceiros, desde que tais informações não
            sejam pessoalmente identificáveis.
          </p>
          <p className="text-primary text-md">
            3.5. Solicitamos seu consentimento para utilizar os dados fornecidos
            com o objetivo de criar &quot;públicos semelhantes&quot; em
            plataformas de publicidade, como LinkedIn Ads e Meta Ads. Isso
            implica no uso das suas informações para identificar e alcançar
            indivíduos com interesses semelhantes, permitindo que também recebam
            anúncios direcionados. Ressaltamos que você possui o direito de
            acessar, corrigir, excluir e transferir seus dados, além de revogar
            este consentimento a qualquer momento.
          </p>
          <p className="text-primary text-md">
            3.6. Sempre que se fizer necessária a utilização das informações
            coletadas pela IEST GROUP para outros fins que não os definidos
            nesta Política ou aquele expressamente autorizado pelo titular dos
            dados, a IEST GROUP informará diretamente ao titular dos dados sobre
            esta nova finalidade e, quando necessário, coletará (nova)
            autorização.
          </p>
          <p className="text-primary text-md font-semibold">
            4. Relacionamento com terceiros
          </p>
          <p className="text-primary text-md">
            4.1. A IEST GROUP exige a todos os terceiros que mantenham a
            confidencialidade das informações a eles compartilhadas ou que
            tenham acesso em virtude do exercício da sua atividade, bem como que
            utilizem tais informações exclusivamente para os fins expressamente
            permitidos.
          </p>
          <p className="text-primary text-md font-semibold">
            5. Segurança das informações
          </p>
          <p className="text-primary text-md">
            5.1. Visando a segurança das informações fornecidas pelos clientes,
            a IEST GROUP dispõe de processos de segurança físicos, lógicos,
            técnicos e administrativos compatíveis com a sensibilidade das
            informações coletadas, cuja eficiência é periodicamente avaliada por
            auditoria independente.
          </p>
          <p className="text-primary text-md">
            5.2. A IEST GROUP implementa novos procedimentos e melhorias
            tecnológicas contínuas para proteger todos os dados pessoais
            coletados dos clientes e terceiros.
          </p>
          <p className="text-primary text-md">
            5.3. No tratamento das informações coletadas a IEST GROUP utiliza de
            sistemas estruturados de forma a atender aos requisitos de segurança
            e transparência, aos padrões de boas práticas e de governança e aos
            princípios gerais estabelecidos na Lei nº 13.709/2018 Lei Geral de
            Proteção de Dados Pessoais (&quot;LGPD&quot;).
          </p>
          <p className="text-primary text-md">
            5.4. Todas as tecnologias utilizadas respeitarão sempre a legislação
            vigente e os termos desta Política.
          </p>
          <p className="text-primary text-md font-semibold">
            6. Cooperação com autoridades reguladoras
          </p>
          <p className="text-primary text-md">
            6.1. Nas hipóteses em que se fizerem necessárias a divulgação dos
            dados pessoais de clientes, terceiros, colaboradores ou parceiros,
            seja em razão de cumprimento de lei, determinação judicial ou de
            órgão competente fiscalizador das atividades desenvolvidas pela IEST
            GROUP e/ou terceiros, tais informações serão reveladas somente nos
            estritos termos e nos limites requeridos para a sua divulgação,
            sendo que os titulares das informações divulgadas, na medida do
            possível, serão notificados sobre tal divulgação, para que tomem as
            medidas protetivas ou reparadoras apropriadas.
          </p>
          <p className="text-primary text-md font-semibold">7. Alterações</p>
          <p className="text-primary text-md">
            7.1. A presente Política de Privacidade e Proteção de Dados poderá
            ser modificada a qualquer momento, conforme a finalidade ou
            necessidade para adequação e conformidade de disposição de
            legislação/regulamentação ou sempre que a IEST GROUP julgar
            necessário. As alterações serão divulgadas por meio do website
            https://www.iestgroup.com.br/. A continuidade do uso dos serviços da
            IEST GROUP ou da prestação de serviços para a IEST GROUP, conforme o
            caso, após divulgação das alterações será considerada aceitação do
            cliente e terceiros quanto aos novos termos e condições.
          </p>
        </SectionComponent>

        <SectionComponent title="VI. POLÍTICA DE COOKIES">
          <p className="text-primary text-md">
            <strong className="font-semibold">O que são Cookies?</strong>{" "}
            Cookies são pequenos arquivos de texto que são armazenados no
            dispositivo do usuário quando ele visita um site. Esses arquivos
            permitem que o site &quot;lembre&quot; de informações sobre sua
            navegação, como preferências ou dados de login, e ajudam a melhorar
            a experiência do usuário.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">Como usamos os Cookies?</strong> A
            IEST GROUP utiliza cookies para melhorar a experiência do usuário em
            nossos sites, coletar dados analíticos, personalizar conteúdos e
            anúncios, e fornecer recursos de mídia social. Esses cookies ajudam
            a entender como os visitantes interagem com nosso site, o que nos
            permite otimizar e aprimorar o conteúdo e os serviços oferecidos.
          </p>
          <p className="text-primary text-md font-semibold">
            Tipos de Cookies que Utilizamos
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              Cookies Estritamente Necessários:
            </strong>{" "}
            São essenciais para o funcionamento do site, permitindo funções
            básicas como navegação e acesso às áreas seguras do site.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">Cookies Funcionais:</strong>{" "}
            Permitem que o site se lembre das escolhas feitas pelo usuário e
            forneçam funcionalidades personalizadas.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">Cookies de Desempenho:</strong>{" "}
            Coletam informações sobre como os visitantes utilizam o site, por
            exemplo, páginas visitadas ou se há erros nas páginas. Esses cookies
            não coletam informações pessoais.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              Cookies de Publicidade e Marketing:
            </strong>{" "}
            Utilizados para personalizar anúncios com base no comportamento de
            navegação e para medir a eficácia de campanhas publicitárias. Com o
            seu consentimento, também podemos criar &quot;públicos
            semelhantes&quot; para campanhas de marketing, com base nos dados de
            navegação e preferências coletados enquanto você navega em nosso
            site. Esses dados são utilizados exclusivamente para fins de
            marketing e publicidade. Você pode revogar esse consentimento a
            qualquer momento, sem prejuízo do acesso aos nossos serviços.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">Como Gerenciar os Cookies</strong>{" "}
            O usuário pode ajustar as configurações de cookies diretamente em
            seu navegador. Caso o usuário deseje, ele pode desativar todos os
            cookies, ou pode optar por aceitar apenas alguns tipos. Contudo, ao
            desativar cookies essenciais, a funcionalidade de algumas áreas do
            site poderá ser afetada.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              Consentimento para o Uso de Cookies
            </strong>{" "}
            Ao acessar o nosso site, você consente com o uso de cookies de
            acordo com esta Política de Cookies. Você pode alterar suas
            preferências de cookies a qualquer momento através das configurações
            de cookies disponíveis em nosso site.
          </p>
        </SectionComponent>

        <SectionComponent title="VII. GESTÃO DE CONSEQUÊNCIAS">
          <p className="text-primary text-md">
            Colaboradores, fornecedores ou outros stakeholders/públicos de
            interesse que observarem quaisquer desvios às diretrizes desta
            Política, poderão relatar o fato ao seguinte e-mail:
            rcorinti@iestgroup.com, podendo ou não se identificar. Internamente,
            o descumprimento das diretrizes desta Política enseja a aplicação de
            medidas de responsabilização dos agentes que a descumprirem conforme
            a respectiva gravidade do descumprimento. Quando um incidente
            reportado envolver dados pessoais e/ou dados pessoais sensíveis,
            deverá ser prontamente informado ao Data Protection Officer
            (&quot;DPO&quot;) / Encarregado em Privacidade e Proteção de Dados.
          </p>
        </SectionComponent>

        <SectionComponent title="VIII. DIREITOS DOS TITULARES">
          <p className="text-primary text-md">
            Você pode sempre solicitar a correção ou remoção de seus dados e
            informações pessoais ou relatar eventual uso indevido por meio do
            e-mail rcorinti@iestgroup.com. Em caso de obrigações legais,
            regulatórias, proteção de eventuais ações judiciais futuras ou para
            manutenção e prosseguimento dos serviços ofertados, a IEST GROUP não
            irá remover os dados pessoais, tratando-os nessas bases legais
            expostas e para os fins informados nessa Política de Privacidade e
            demais documentos complementares.
          </p>
        </SectionComponent>

        <SectionComponent title="IX. RESPONSABILIDADES">
          <p className="text-primary text-md">
            <strong className="font-semibold">
              Cumpre aos administradores, colaboradores e terceiros:
            </strong>{" "}
            Observar e zelar pelo cumprimento da presente Política e, quando
            assim se fizer necessário, acionar o Encarregado em Privacidade e
            Proteção de Dados (DPO) para consulta sobre situações que envolvam
            conflito com esta Política ou mediante a ocorrência de situações
            nela descritas.
          </p>
          <p className="text-primary text-md">
            <strong className="font-semibold">
              Cumpre a Comitê Gestor de Proteção de Dados Pessoais (Encarregado
              / DPO):
            </strong>
          </p>
          <p className="text-primary text-md">
            – Manter atualizada esta Política, de forma a garantir que quaisquer
            alterações regulatórias/legais das diretrizes e regras gerais aqui
            estabelecidas sejam observadas;
          </p>
          <p className="text-primary text-md">
            – Esclarecer dúvidas relativas a esta Política e à sua aplicação;
          </p>
          <p className="text-primary text-md">
            – Aceitar reclamações e comunicações dos titulares dos dados,
            prestar esclarecimentos e adotar providências;
          </p>
          <p className="text-primary text-md">
            – Receber comunicações da Autoridade Nacional de Proteção de Dados
            (&quot;ANPD&quot;) e adotar providências;
          </p>
          <p className="text-primary text-md">
            – Orientar os colaboradores e os terceiros da IEST GROUP a respeito
            das práticas a serem tomadas em relação à proteção de dados
            pessoais; e
          </p>
          <p className="text-primary text-md">
            – Adotar iniciativas para compartilhamento de informações sobre
            incidentes contendo dados pessoais com a ANPD e com os titulares dos
            dados, quando necessário.
          </p>
        </SectionComponent>

        <SectionComponent title="X. DOCUMENTAÇÃO COMPLEMENTAR">
          <p className="text-primary text-md">
            Artigo 5º da Constituição Federal de 1988; Política Geral de
            Segurança da Informação e Anexos da IEST GROUP; Regimento Interno de
            Criação do Comitê Gestor de Proteção de Dados Pessoais da IEST
            GROUP; Contrato de Prestação de Serviços da IEST GROUP; Lei
            Complementar nº 105/2001; Lei nº 13.709/2018; Normas e procedimentos
            internos aperfeiçoados constantemente, aprovados pelas alçadas
            competentes e disponibilizadas a todos os colaboradores.
          </p>
        </SectionComponent>

        <SectionComponent title="XI. DISPOSIÇÕES GERAIS" last>
          <p className="text-primary text-md">
            É competência do Comitê Gestor de Proteção de Dados Pessoais alterar
            esta Política sempre que se fizer necessário. Esta Política entra em
            vigor na data de sua aprovação pelos Comitê Gestor de Proteção de
            Dados Pessoais da IEST GROUP e revoga quaisquer documentos em
            contrário.
          </p>
          <p className="text-primary text-md font-semibold mt-6">
            São Paulo, 28 de março de 2025.
          </p>
        </SectionComponent>
      </div>
    </main>
  );
}
