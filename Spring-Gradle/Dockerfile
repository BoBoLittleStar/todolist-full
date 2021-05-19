FROM openjdk:15
WORKDIR /spring
COPY . .
RUN ["./gradlew", "build"]
COPY build/libs/*.jar app.jar
FROM openjdk:15
WORKDIR /spring
COPY --from=0 /spring/app.jar .
ENTRYPOINT ["java", "-jar", "app.jar"]
