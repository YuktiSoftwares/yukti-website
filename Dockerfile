FROM eclipse-temurin:17-jdk-jammy
ARG JAR=app.jar
COPY ${JAR} /app/${JAR}
WORKDIR /app
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]