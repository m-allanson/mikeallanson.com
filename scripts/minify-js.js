import esbuild from "esbuild";
import fs from "fs/promises";
import { PerformanceObserver, performance } from "perf_hooks";

const obs = new PerformanceObserver((items) => {
  const item = items.getEntries()[0];
  console.log(item.name, "in", item.duration, "ms");
});
obs.observe({ entryTypes: ["measure"] });

async function* getFiles(path = `./`) {
  const entries = await fs.readdir(path, { withFileTypes: true });

  for (let file of entries) {
    if (file.isDirectory()) {
      yield* getFiles(`${path}${file.name}/`);
    } else {
      yield { ...file, path: path + file.name };
    }
  }
}

// TODO: output total file size reduction?
async function main(dir) {
  performance.mark("start");
  let service = await esbuild.startService();
  let fileCount = 0;

  try {
    for await (const file of getFiles(dir)) {
      const filePath = file.path;
      if (filePath.endsWith(".js")) {
        fileCount += 1;
        const options = {
          format: "esm",
          minify: true,
          target: "es2020",
        };
        const fileContents = await fs.readFile(filePath, "utf-8");
        const transformed = await service.transform(fileContents, options);
        await fs.writeFile(filePath, transformed.code);
      }
    }
  } finally {
    service.stop();
    performance.mark("finish");
    performance.measure(`Minified ${fileCount} JS files`, "start", "finish");
  }
}

await main("public/");
