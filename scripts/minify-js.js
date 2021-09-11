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
      yield path + file.name;
    }
  }
}

const minifyOptions = {
  format: "esm",
  minify: true,
  target: "es2020",
};

async function minifyFile(filePath) {
  const fileContents = await fs.readFile(filePath, "utf-8");
  const transformed = await esbuild.transform(fileContents, minifyOptions);
  return await fs.writeFile(filePath, transformed.code);
}

// TODO: output total file size reduction?
async function main(dir) {
  performance.mark("start");
  let promises = [];

  try {
    for await (const filePath of getFiles(dir)) {
      if (filePath.endsWith(".js")) {
        promises.push(minifyFile(filePath));
      }
    }
    await Promise.all(promises);
  } finally {
    performance.mark("finish");
    performance.measure(
      `Minified ${promises.length} JS files`,
      "start",
      "finish"
    );
  }
}

main("public/");
