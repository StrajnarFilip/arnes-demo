#    Copyright 2022 Filip Strajnar

#    Licensed under the Apache License, Version 2.0 (the "License");
#    you may not use this file except in compliance with the License.
#    You may obtain a copy of the License at

#        http://www.apache.org/licenses/LICENSE-2.0

#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS,
#    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#    See the License for the specific language governing permissions and
#    limitations under the License.

# Execute this script to generate docker compose
# file with secure password.
import os
safe_random=os.urandom(24).hex()
safe_root_random=os.urandom(32).hex()
database_name= "db"
database_username="db"
database_service_name="database-mysql"

def render(safe_password: str,safe_root_password: str) -> str:
    return f"""version: "3.0"
services:
  {database_service_name}:
    image: mysql:8.0.29
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: {safe_root_password}
      MYSQL_USER: {database_username}
      MYSQL_PASSWORD: {safe_password}
      MYSQL_DATABASE: {database_name}
    volumes:
      - ./db-data:/var/lib/mysql
    ports:
      #- 3306:3306
      - 0.0.0.0:3306:3306

  phpmyadmin:
    image: phpmyadmin
    restart: always
    ports:
      - 8080:80
    environment:
      - PMA_HOST={database_service_name}
      - PMA_USER={database_username}
      - PMA_PASSWORD={safe_password}
      - PMA_ARBITRARY=1"""

with open("docker-compose.yaml","w",encoding='utf-8') as file:
    file.write(render(safe_random,safe_root_random))

with open("connection-details.txt","w",encoding='utf-8') as file:
    file.write(f"""Database: {database_name}
Username: {database_username}
{database_username}'s password: {safe_random}
root's password: {safe_root_random}


Entity Framework Core connection string:
"server=localhost;database={database_name};user={database_username};password={safe_random}"


Prisma connection URL:
mysql://{database_username}:{safe_random}@localhost:3306/{database_name}


""")