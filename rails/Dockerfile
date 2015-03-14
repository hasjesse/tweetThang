FROM ruby:2.2

COPY . /src

WORKDIR /src

RUN   mkdir {log,tmp} && \
      bundle --jobs 4 && \
      chmod +x start.sh

