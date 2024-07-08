FROM ubuntu:22.04 as development

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Berlin

RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    libcurl4-openssl-dev \
    libpng-dev \
    libssl-dev \
    libxml2-dev \
    libzip-dev \
    pkg-config \
    zlib1g-dev \
    libgl1-mesa-dev \
    libgles2-mesa-dev \
    libegl1-mesa-dev \
    libx11-dev \
    libxi-dev \
    libjpeg8 \
    libjpeg-turbo8 \
    libuv1 \
    libuv1-dev \
    libwebp7 \
    libwebp-dev \
    libicu70 \
    libicu-dev \
    xvfb \
    xauth \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN ln -s /usr/lib/x86_64-linux-gnu/libwebp.so.7 /usr/lib/x86_64-linux-gnu/libwebp.so.7 || true \
    && ldconfig

RUN ls -l /usr/lib/x86_64-linux-gnu/libicu*

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5011

ENV DISPLAY=:99

RUN echo '#!/bin/bash\nXvfb :99 -ac -screen 0 1280x1024x24 &\nsleep 1\nnpm start' > /start.sh \
    && chmod +x /start.sh

CMD ["/start.sh"]
