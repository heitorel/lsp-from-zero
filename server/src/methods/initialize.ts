import { RequestMessage } from "../server";
type ServerCapabilities = Record<string, unknown>;


interface InitializeResuilt {
    capabilities: ServerCapabilities;

    serverInfo?: {
        name: string;
        version?: string;
    };
}

export const intialize = (message: RequestMessage): InitializeResuilt => {
    return {
        capabilities: {}, 
        serverInfo: {
            name: "lsp-from-zero",
            version: "0.0.1"
        }
    }
};