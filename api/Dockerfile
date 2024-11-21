FROM node:20

WORKDIR /opt/application/api
COPY .aeria .aeria
COPY @types @types
COPY public public
COPY src src
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json

RUN npm ci
RUN npm run build

CMD npm run build:post \
  && rm -rf ../api-build/node_modules \
  && cp -r node_modules ../api-build \
  && npm start

