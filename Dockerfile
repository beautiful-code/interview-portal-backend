FROM alpine:3.11.2

# File Author / Maintainer
LABEL authors="Karthik Reddy <karthikreddy.chinasani1995@gmail.com>"

# Update & install required packages
RUN apk add --update nodejs npm bash git

# Install app dependencies
COPY package.json /www/package.json
RUN cd /www; npm install

# Copy app source
COPY . /www

# Set work directory to /www
WORKDIR /www

# set your port
ENV PORT 1763

# expose the port to outside world
EXPOSE  1763

# start command as per package.json
CMD ["npm", "start"]
