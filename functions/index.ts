import { onRequest } from "firebase-functions/v2/https";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });

/**
 * 기본 헬스체크
 *  GET https://<REGION>-<PROJECT>.cloudfunctions.net/helloWorld
 */
export const helloWorld = onRequest({ cors: true }, (_req, res) => {
  res.status(200).send("Hello from yt-gpt-mailer 🎉");
});