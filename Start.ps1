Set-Location .\mysql-database
docker compose up -d

Set-Location ..\arnes.backend
Start-Process powershell { .\gradlew.bat bootRun }

Set-Location ..\arnes-frontend
npm i ; npx ng serve