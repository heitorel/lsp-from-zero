import * as fs from "fs";

const log = fs.createWriteStream("/tmp/lsp.log", { flags: 'a' }); 

export default {
  write: (message: object | unknown) => {
    try {
      if (typeof message === "object") {
        log.write(JSON.stringify(message));
      } else {
        log.write(message);
      }
      log.write("\n");
    } catch (error) {
      console.error("Erro ao escrever no arquivo de log:", error);
    }
  },
};
