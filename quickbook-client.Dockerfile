FROM node:19.4.0-alpine as builder

WORKDIR /app

COPY ./mf-quick-book .

WORKDIR /app/MovieApp
RUN npm ci
RUN npm run build

WORKDIR /app/HomePageApp
RUN npm ci
RUN npm run build

WORKDIR /app/DetailsPageApp
RUN npm ci
RUN npm run build

WORKDIR /app/ReactComponents
RUN npm ci
RUN npm run build

WORKDIR /app/SeatSelectionApp
RUN npm ci
RUN npm run build


FROM nginx:1.23.0 as deploy

COPY --from=builder /app/MovieApp/dist /usr/share/nginx/html/MovieApp
COPY --from=builder /app/HomePageApp/dist /usr/share/nginx/html/HomePageApp
COPY --from=builder /app/DetailsPageApp/dist /usr/share/nginx/html/DetailsPageApp
COPY --from=builder /app/ReactComponents/dist /usr/share/nginx/html/ReactComponents
COPY --from=builder /app/SeatSelectionApp/dist /usr/share/nginx/html/SeatSelectionApp

COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
EXPOSE 3001
EXPOSE 3002
EXPOSE 3003
EXPOSE 9000
EXPOSE 5555

CMD ["nginx" , "-g", "daemon off;"]
