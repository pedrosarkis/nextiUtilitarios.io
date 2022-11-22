Refatorando pela segunda vez o projeto da calculadora para o suporte da Ahgora Sistemas.
Rodar primeiro Comando para buildar a imagem docker - npm run docker_build
comando para subir o container, rodar dps
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev

    ...