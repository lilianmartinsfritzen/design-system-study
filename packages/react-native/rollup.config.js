import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import fs from "fs";
import path from "path";

// Lista todos os diretórios em src (assumindo que cada diretório é um componente)
const srcDir = path.resolve(__dirname, "src");
const componentDirs = fs.readdirSync(srcDir).filter((file) => {
  const filePath = path.join(srcDir, file);
  return fs.statSync(filePath).isDirectory();
});

// Cria uma configuração de rollup para cada diretório/componente
const componentConfigs = componentDirs
  .map((dir) => {
    const inputPath = path.join(srcDir, dir, "index.tsx");
    // Verifica se o arquivo de entrada existe antes de criar a configuração
    if (!fs.existsSync(inputPath)) {
      return;
    }
    return {
      input: inputPath,
      output: [
        {
          dir: path.join(__dirname, "dist", dir),
          format: "cjs",
          sourcemap: true,
          exports: "named",
        },
        {
          dir: path.join(__dirname, "dist", dir),
          format: "esm",
          sourcemap: true,
          exports: "named",
        },
      ],
      external: ["react", "react-native"], // Adicione aqui outras dependências externas conforme necessário
      plugins: [
        resolve(),
        commonjs(),
        typescript({
          tsconfig: "./tsconfig.json",
          declarationDir: path.join(__dirname, "dist", dir),
        }),
        terser(), // Opcional: Minifica o output
      ],
    };
  })
  .filter(Boolean); // Remove entradas não definidas devido a arquivos inexistentes

// Exporta um array de configurações
export default componentConfigs;
