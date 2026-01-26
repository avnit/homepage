sudo docker-compose down
sudo docker rmi abambah/homepage2:latest
sudo docker build -t abambah/homepage2:latest .
sudo docker push abambah/homepage2:latest
sudo docker compose up -d
