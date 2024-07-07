FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libvips-dev \
    mesa-common-dev \
    libgl1-mesa-dev \
    libglu1-mesa-dev \
    libjpeg62-turbo \
    libpng-dev \
    libwebp-dev \
    libtiff-dev \
    libcairo2-dev \
    libpango1.0-dev \
    libgif-dev

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5011

CMD ["npm", "start"]
