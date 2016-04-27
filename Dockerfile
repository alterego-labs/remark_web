FROM node:5.10.1
MAINTAINER Sergey Gernyak <sergeg1990@gmail.com>

RUN mkdir -p /app/remark_web

WORKDIR /app/remark_web

COPY . ./

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "serve:dist"]
