FROM node:8.11.3-alpine

ARG ENVIRONMENT
ENV ENVIRONMENT $ENVIRONMENT
ARG PORT
ENV PORT $PORT

# Set up environment
ENV TERM=xterm-256color
ENV PROJECT_NAME workast-assessment
ENV PROJECT_ROOT /opt/$PROJECT_NAME

# Install dependencies
RUN mkdir -p /tmp/$PROJECT_NAME
ADD package.json /tmp/$PROJECT_NAME/package.json
RUN cd /tmp/$PROJECT_NAME/ && npm install --production
RUN mkdir -p $PROJECT_ROOT
RUN cp -a /tmp/$PROJECT_NAME/node_modules $PROJECT_ROOT

# Copy code
WORKDIR $PROJECT_ROOT
COPY . $PROJECT_ROOT
RUN cd $PROJECT_ROOT/ && npm install

# Start
EXPOSE $PORT
CMD npm run start:${ENVIRONMENT}