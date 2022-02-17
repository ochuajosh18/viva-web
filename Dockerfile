# build environment
FROM node:12.21.0-alpine as build
ARG COMMAND

ENV COMMAND $COMMAND
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY .env ./
COPY . ./
#RUN npm install --global yarn
RUN yarn
RUN yarn global add react-scripts@3.4.1 --silent
RUN yarn run ${COMMAND}
COPY public ./
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
