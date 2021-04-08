FROM arm32v7/nginx
COPY ./dist/apps/court-app /usr/share/nginx/html
