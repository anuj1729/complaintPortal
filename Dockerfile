FROM maven:3-jdk-8
COPY . /app
ADD /ComplaintMgmt/target/SpringDocker.war SpringDocker.war 
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait
ENTRYPOINT ["java","-jar","/SpringDocker.war"]
CMD /wait && /ComplaintMgmt/target/SpringDocker.war

