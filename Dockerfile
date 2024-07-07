FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libvips-dev \
    mesa-common-dev \
    libgl1-mesa-dev \
    libglu1-mesa-dev \
    libjpeg-dev

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5011

CMD ["npm", "start"]
