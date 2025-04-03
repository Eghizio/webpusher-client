import { urlBase64ToUint8Array } from "./WebPush.utils";

const devKey =
  "BAneqYP7oVG-SemwrbWbu1JLEmldZkVPkYJjzX3yIZ2qY8BQS1tEfCE2JpaGR9FGFJ7dPN64xwuoOIPcbY0NEe4";
const prodKey =
  "BCGyOvMTw0pEduUkCvczWt_RppgvegPAvBH20FKYyL0Izgi3TifO4kl-g7bVPe3g6khF4w65gcXxFteMjQNn9v0";

const getKey = (hostname: string) => {
  const isProd =
    hostname.includes("frog02-30476.wykr.es") ||
    hostname.includes("webpusher-client.vercel.app");
  const isDev =
    hostname.includes("localhost") || hostname.includes("127.0.0.1");

  if (isProd) return prodKey;
  if (isDev) return devKey;

  // throw new Error(`Unknown hostname: ${hostname}`);
  return devKey;
};

export const publicVapidKey = urlBase64ToUint8Array(getKey(location.hostname));
