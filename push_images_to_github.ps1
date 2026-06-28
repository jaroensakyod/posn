$TOKEN = $env:GITHUB_TOKEN  # set env var before running
$REPO = "https://$TOKEN@github.com/jaroensakyod/posn-exam-images.git"
$IMAGES = "C:\Users\ASUS\Desktop\posn\public\exam-images"
$TMP = "C:\Users\ASUS\AppData\Local\Temp\posn-exam-images"

if (Test-Path $TMP) { Remove-Item $TMP -Recurse -Force }
New-Item -ItemType Directory -Path $TMP | Out-Null

cd $TMP
git init
git checkout -b main
Copy-Item "$IMAGES\*.png" $TMP
git add .
git commit -m "Add all exam images (288 files)"
git remote add origin $REPO
git push -u origin main

Write-Host "`nเสร็จแล้ว! รูปขึ้น GitHub แล้ว"
