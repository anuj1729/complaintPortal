FROM java:8
EXPOSE 3051
EXPOSE 3306
ADD target/springdocker.jar springdocker.jar
ENTRYPOINT ["java",".jar","springdocker.jar"]
