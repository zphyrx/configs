import { defineConfig } from "tsup";
import { mergeConfig } from "@zphyrx/merge-config";

const dir = "dist/esm";

const configBase = defineConfig({
  clean: true,
  format: ["esm"],
  outDir: dir,
  target: "esnext",
  minify: true,
});

type TsupUserConfig = Partial<typeof configBase>;

const config = (overrides: TsupUserConfig = {}): TsupUserConfig =>
  mergeConfig(configBase, overrides);

export { config };
export type { TsupUserConfig };
