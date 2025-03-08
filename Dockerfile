# Use Node.js LTS
FROM node:22

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install 

# Bundle app source
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]