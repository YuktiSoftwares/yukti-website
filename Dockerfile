# File: Dockerfile
FROM eclipse-temurin:17-jdk-jammy
ARG JAR=app.jar
COPY ${JAR} /app/${JAR}
WORKDIR /app
ENV SERVER_PORT=8080
EXPOSE 8080
ENTRYPOINT ["sh","-c","exec java -Djava.security.egd=file:/dev/urandom -jar /app/app.jar"]
