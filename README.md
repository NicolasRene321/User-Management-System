# User Management System
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/NicolasRene321/User-Management-System/blob/main/LICENSE) 

# Sobre o projeto

https://nicolasrene321.github.io/User-Management-System/frontend/html/index.html

User Management System é considerado uma aplicação full stack web e responsiva que foi desenvolvida para realizar o gerenciamento de usuários registrados no banco de dados do MySQL 
a partir de um website, o qual possui um tema espacial. Dentro do website existem funcionalidades para gravar, atualizar e apagar usuários no banco de dados. Além disso, após os 
usuários serem registrados no banco de dados pode-se buscar cada um pelo seu ID ou buscar todos de uma vez. 

Todas as informações dos usuários buscados são mostradas na tela do website. Graças às funcionalidades de create, read, update e delete construídas com o Java é utilizado um CRUD completo no sistema.

## Layout mobile
![Mobile 1](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/mobile-home-250.jpeg) ![Mobile 2](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/mobile-home-menu-250.jpeg)
![Mobile 3](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/mobile-register-250.jpeg) ![Mobile 4](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/mobile-delete-250.jpeg)
![Mobile 5](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/mobile-update-250.jpeg)

## Layout web
![Web 1](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/web-home-900.png)

![Web 2](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/web-register-900.png)

![Web 3](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/web-delete-900.png)

![Web 4](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/web-update-900.png)

![Web 5](https://github.com/NicolasRene321/User-Management-System/blob/main/assets/web-myprofile-900.png)

## Tipo de arquitetura utilizada para o desenvolvimento do sistema
Arquitetura MVC - Model, View, Controller.

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS 
## Implantação em produção
- Back end: Máquina local
- Front end web: GitHub Pages
- Banco de dados: MySQL

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/NicolasRene321/User-Management-System

# Inserir a sua senha do MySQL em spring.datasource.password no seguinte arquivo:
https://github.com/NicolasRene321/User-Management-System/blob/main/backend/ApiJava/src/main/resources/application.properties

# Criar Schema com a configuração utf-8 no MySQL e com o nome: user_registration

# executar o projeto em:
https://github.com/NicolasRene321/User-Management-System/blob/main/backend/ApiJava/src/main/java/com/developer/ApiJava/ApiJavaApplication.java
```

## Front end web

```bash
# clonar repositório
git clone https://github.com/NicolasRene321/User-Management-System

# Abrir pasta frontend no Visual Studio Code (IDE)

# Abrir pasta html

# Instalar extensão Live Server para o VS Code 

# Executar o arquivo index.html com Live Server
```

# Autor

Nícolas Renê Tonete Cioccio

https://www.linkedin.com/in/n%C3%ADcolas-ren%C3%AA-tonete-cioccio-8a7a1323b/
