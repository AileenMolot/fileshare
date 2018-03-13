FROM nginx:latest
LABEL maintainer="Aileen Molot"

#Install OS updates
RUN apt update && apt full-upgrade -y && apt install git -y

#Copy site to WEB-server
COPY src/main/html /usr/share/nginx/html/fileshare

#Configure WEB-server
COPY etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
