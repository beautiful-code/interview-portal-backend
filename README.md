## Getting Started

```sh
# clone it
git clone https://github.com/KarrthikReddyChinasani/bc-hack.git
cd bc-hack

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

## Docker Support

```sh
cd bc-hack

# Build your docker
docker build -t ba-hack/latest .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 ba-hack/latest
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port

```

## License

MIT
