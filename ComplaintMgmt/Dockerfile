FROM JAVA:8
EXPOSE 3051
EXPOSE 3306
ADD target/SpringDocker.jar SpringDocker.jar
ENTRYPOINT ["java", ".jar","SpringDocker.jar"]
