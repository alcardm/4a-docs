# README temporal

Clonar ramas:

```sh
git clone --branch affiliates_ms https://github.com/karvaroz/4a-docs.git affiliates_ms
git clone --branch api-gateway https://github.com/karvaroz/4a-docs.git api-gateway
git clone --branch auth_ms https://github.com/karvaroz/4a-docs.git auth_ms
git clone --branch eps_fe https://github.com/karvaroz/4a-docs.git eps_fe
git clone --branch survey_ms https://github.com/karvaroz/4a-docs.git survey_ms
```

Crear imagenes:

```sh
docker build -t 4a-affiliates-ms .
docker build -t 4a-api-gateway .
docker build -t 4a-auth-ms .
docker build -t 4a-eps-fe .
docker build -t 4a-survey-ms .
```

Contenedores (iniciar, detener, eliminar imagen):

```
docker run --rm -it -d -p 8000:8000 --name 4a-affiliates-ms-cont 4a-affiliates-ms
docker stop 4a-affiliates-ms-cont
docker rmi 4a-affiliates-ms --force

docker run --rm -it -d -p 4000:4000 --name 4a-api-gateway-cont 4a-api-gateway
docker stop 4a-api-gateway-cont
docker rmi 4a-api-gateway --force

docker run --rm -it -d -p 8001:8001 --name 4a-auth-ms-cont 4a-auth-ms
docker stop 4a-auth-ms-cont
docker rmi 4a-auth-ms --force

docker run --rm -it -d -p 8080:8080 --name 4a-eps-fe-cont 4a-eps-fe
docker stop 4a-eps-fe-cont
docker rmi 4a-eps-fe --force
```

🖖 En proceso...
