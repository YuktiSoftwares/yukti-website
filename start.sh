#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/opt/yukti-website"
JAR_PATH="$(ls -t "$APP_DIR"/*.jar 2>/dev/null | head -n1 || true)"
IMAGE="yukti-website-1.0.1"
CONTAINER="yukti-website"
HOST_BIND="127.0.0.1"
HOST_PORT=8080
APP_PORT=8080
LOGFILE="/var/log/yukti-start.log"
PIDFILE="$APP_DIR/pid.file"

echo "$(date -u) - start.sh: begin" >> "$LOGFILE"

if [ -z "$JAR_PATH" ]; then
  echo "$(date -u) - ERROR: no jar found in $APP_DIR" >> "$LOGFILE"
  exit 1
fi

# Ensure docker can access files (if running as root this is fine)
cd "$APP_DIR"

echo "$(date -u) - Building Docker image $IMAGE from $JAR_PATH" >> "$LOGFILE"
# Create a minimal Dockerfile if not present
if [ ! -f Dockerfile ]; then
  cat > Dockerfile <<'DOCKER'
FROM eclipse-temurin:17-jdk-jammy
ARG JAR=app.jar
COPY ${JAR} /app/${JAR}
WORKDIR /app
ENV SERVER_PORT=8080
EXPOSE 8080
ENTRYPOINT ["sh","-c","exec java -Djava.security.egd=file:/dev/urandom -jar /app/app.jar"]
DOCKER
  echo "$(date -u) - Generated Dockerfile" >> "$LOGFILE"
fi

# Ensure the jar has the expected name inside the build context
if [ ! -f "$APP_DIR/app.jar" ]; then
  cp -f "$JAR_PATH" "$APP_DIR/app.jar"
fi

echo "$(date -u) - Building Docker image $IMAGE from $JAR_PATH" >> "$LOGFILE"
docker build -t "$IMAGE" "$APP_DIR" >> "$LOGFILE" 2>&1

echo "$(date -u) - Removing existing container if any" >> "$LOGFILE"
docker rm -f "$CONTAINER" >/dev/null 2>&1 || true

echo "$(date -u) - Running container $CONTAINER bound to $HOST_BIND:$HOST_PORT -> $APP_PORT" >> "$LOGFILE"
CID="$(docker run -d --name "$CONTAINER" --restart unless-stopped -p "${HOST_BIND}:${HOST_PORT}:${APP_PORT}" "$IMAGE")"
echo "$CID" > "$PIDFILE"
echo "$(date -u) - Started container $CID" >> "$LOGFILE"

# Optional: capture container logs to file (non-blocking)
docker logs -f "$CONTAINER" >> "$LOGFILE" 2>&1 &

echo "$(date -u) - start.sh: complete" >> "$LOGFILE"
exit 0

# File: Dockerfile
FROM eclipse-temurin:17-jdk-jammy
ARG JAR=app.jar
COPY ${JAR} /app/${JAR}
WORKDIR /app
ENV SERVER_PORT=8080
EXPOSE 8080
ENTRYPOINT ["sh","-c","exec java -Djava.security.egd=file:/dev/urandom -jar /app/app.jar"]
