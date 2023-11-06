FROM node:18-alpine as builder
WORKDIR /nsights

	# Install yarn
RUN apk add yarn

COPY package.json yarn.lock ./

RUN npm install -g next
RUN yarn install
COPY . .

ENV NODE_ENV=production
ENV PORT=3000

RUN yarn build

EXPOSE 3000 
CMD ["yarn", "start"]