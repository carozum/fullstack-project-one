import os from "node:os";

console.log(`Free memory:${os.freemem()/1024/1024} MB`);

const env = process.env;

export const PORT=env.PORT ?? "8080";
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;
export default {
    PORT, HOST, SERVER_URL
};