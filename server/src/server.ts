import log from "./log";
import { intialize } from "./methods/initialize";


interface Message {
  jsonrpc: string;
}

export interface RequestMessage extends Message {
  id: number | string;
  method: string;
  params?: unknown[] | object;
}

process.stdin.on("data", (chunk) => {
  log.write(chunk.toString());
});