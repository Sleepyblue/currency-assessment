import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3001;

app.use(cors());

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://api-sandbox.uphold.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })
);

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
