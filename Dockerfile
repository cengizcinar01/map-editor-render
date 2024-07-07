FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libvips-dev \
    mesa-common-dev \
    libgl1-mesa-dev \
    libglu1-mesa-dev \
    xvfb

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5011

CMD ["xvfb-run", "--auto-servernum", "--server-args", "-screen 0 1280x800x24", "npm", "start"]
