FROM node:20
WORKDIR /opt/application/web
COPY .aeria-ui .aeria-ui
COPY @types @types
COPY src src
COPY static static
COPY index.html index.html
COPY postcss.config.js postcss.config.js
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json

RUN npm ci
CMD cp ../api/node_modules/aeria-sdk/dist/runtime.* node_modules/aeria-sdk/dist || true \
  && cp ../api/.aeria/aeria-sdk.d.ts .aeria-ui || true \
  && npm run build \
  && rm -rf /var/www/html/* \
  && mv dist/* /var/www/html
