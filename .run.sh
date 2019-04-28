cd ~/Anuj/IIITB/complaintPortal
ng build
cp -a dist/. ComplaintMgmt/src/main/resources/static/
cd ComplaintMgmt
mvn clean install
sudo docker build -f Dockerfile -t speproject .
sudo docker run -d -t --name speproject-container --link mysql-docker-container:mysql -p 3051:3051 speproject 
