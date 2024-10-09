# push into the gandi remote
git push gandi main

# deploy the gandi remote
ssh 2609665@git.sd5.gpaas.net deploy schemateque.mysolisart.fr.git main

echo "Deployment successfull"