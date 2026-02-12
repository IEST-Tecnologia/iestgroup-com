import type { Job } from "@/lib/admin/types";

export const MOCK_JOB: Job = {
  id: 1,
  id_job: "J.C",
  name: "Representante Comercial",
  slug: "representante-comercial",
  company: "Multinacional do setor agropecuário",
  locality: "São Paulo, Brasil",
  nivel: "Sênior",
  work_model: "hybrid",
  contract_type: "clt",
  work_schedule: "full_time",
  area: "Agronegócio",
  status: "open",
  type: "external",
  about_company:
    "Empresa multinacional de grande porte do setor de agroquímicos, com atuação global e operação consolidada em diversos países. A companhia atua no desenvolvimento, registro, produção e comercialização de defensivos agrícolas e soluções para o agronegócio, encontrando-se em fase de expansão e fortalecimento de sua presença no mercado brasileiro.",
  about_opportunity: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 4,
          textAlign: null,
        },
        content: [
          {
            text: "A Empresa",
            type: "text",
            marks: [{ type: "bold" }],
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: null },
        content: [
          {
            text: "Empresa multinacional de grande porte do setor de agroquímicos, com atuação global e operação consolidada em diversos países. A companhia atua no desenvolvimento, registro, produção e comercialização de defensivos agrícolas e soluções para o agronegócio, encontrando-se em fase de expansão e fortalecimento de sua presença no mercado brasileiro.",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: null },
      },
      {
        type: "heading",
        attrs: {
          level: 4,
          textAlign: null,
        },
        content: [
          {
            text: "Sobre a oportunidade",
            type: "text",
            marks: [{ type: "bold" }],
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: null },
        content: [
          {
            text: "Estamos conduzindo um processo seletivo para a posição de Representante Comercial – Agrochemicals, que atuará como contribuidor individual, com foco no desenvolvimento de novos negócios e execução comercial no mercado brasileiro de agroquímicos.",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: null },
        content: [
          {
            text: "A posição possui abrangência nacional, alto grau de autonomia e interface direta com distribuidores, cooperativas, produtores e com a matriz internacional da empresa.",
            type: "text",
          },
        ],
      },
    ],
  },
  main_responsabilities: {
    type: "doc",
    content: [
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [
                  {
                    text: "Executar e supervisionar as rotinas contábeis diárias, assegurando a precisão e integridade das informações financeiras;",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [
                  {
                    text: "Elaborar relatórios financeiros mensais e encaminhá-los à matriz até o dia 2 de cada mês;",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [
                  {
                    text: "Apoiar a matriz em análises financeiras, controles e relatórios gerenciais;",
                    type: "text",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: null },
      },
    ],
  },
  mandatory_requirements: {
    type: "doc",
    content: [
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [
                  {
                    text: "Ensino superior completo em Contabilidade,",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [
                  {
                    text: "Finanças, Economia ou áreas correlatas;",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [
                  {
                    text: "Experiência na área contábil/financeira;",
                    type: "text",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: null },
      },
    ],
  },
  differences: {
    type: "doc",
    content: [
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [
                  {
                    text: "Experiência em ambientes multinacionais;",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [
                  {
                    text: "Conhecimento em comércio exterior, logística e processos aduaneiros;",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [
                  {
                    text: "Vivência com modelos B2B, B2B+ e B2C no agro.",
                    type: "text",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: null },
      },
    ],
  },
  benefits: {
    type: "doc",
    content: [
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [{ text: "VR/VA", type: "text" }],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [{ text: "VT", type: "text" }],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [{ text: "SEGURO", type: "text" }],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: null },
                content: [{ text: "TOTAL PASS", type: "text" }],
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: null },
      },
    ],
  },
  created_at: "2026-02-12T17:23:57.465521Z",
  updated_at: "2026-02-12T17:23:57.465521Z",
};

// Helpers para traduzir valores do banco para exibição
export const WORK_MODEL_LABELS: Record<string, string> = {
  in_office: "Presencial",
  hybrid: "Híbrido",
  remote: "Remoto",
};

export const CONTRACT_TYPE_LABELS: Record<string, string> = {
  clt: "CLT",
  pj: "PJ",
  temporary: "Temporário",
};

export const WORK_SCHEDULE_LABELS: Record<string, string> = {
  full_time: "Integral",
  part_time: "Parcial",
};
