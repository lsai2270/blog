FROM mhart/alpine-node:12.16.1 as builder

RUN echo "https://mirrors.ustc.edu.cn/alpine/v3.9/main/" > /etc/apk/repositories
RUN apk add --no-cache --virtual builds-deps build-base python
RUN apk add --no-cache tzdata \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    &&rm -rf /var/cache/apk/* /tmp/* /var/tmp/* $HOME/.cache

# ENV SHJPSERVER=http://dev-api-shjp.citybit.cn
# ENV DXFURL=http://dev-visum-net-viewer.citybit.cn/net/viewer/?netId=
# ENV REACT_APP_ENV=prod

WORKDIR /web/client/
COPY package.json .

COPY . .

RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn install
RUN yarn run build

FROM nginx

WORKDIR /usr/share/nginx/html/

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /web/client/dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]