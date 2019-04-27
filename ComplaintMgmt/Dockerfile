FROM maven:3-jdk-8
VOLUME /tmp
EXPOSE 3051
ADD target/SpringDocker.war SpringDocker.war 
ENTRYPOINT ["java","-jar","SpringDocker.war"]
