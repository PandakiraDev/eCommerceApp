import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: process.env.GRAPHQL_URL,
  documents: [
    "src/graphql/**/*.graphql",
    "src/{app,ui,api,lib,components}/**/*.{ts,tsx}",
  ],
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        defaultScalarType: "unknown",
        skipTypename: true,
        documentMode: "string",
      },
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
