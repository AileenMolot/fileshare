FROM nginx

RUN apt update && apt full-upgrade -y && apt install git -y

RUN git clone https://github.com/AileenMolot/HTML.git /usr/share/nginx/html/fileshare/
