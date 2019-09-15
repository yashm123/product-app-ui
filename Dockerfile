FROM nginx

COPY dist/ProductApp /usr/share/nginx/html

EXPOSE 80
