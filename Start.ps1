Set-Location .\mysql-database
docker compose up -d

Set-Location ..\backend
Start-Process powershell { .\gradlew.bat bootRun }

Set-Location ..\frontend
npm i ; npx ng serve