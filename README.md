# OrientDB Procédure FR

Prérequis généraux /

Installer WSL 2 (Windows Subsystem for Linux 2) : Suivez [la documentation officielle](https://docs.microsoft.com/en-us/windows/wsl/install-win10) fournie par Microsoft pour installer et configurer WSL 2 sur votre machine Windows.

Installer Git : Téléchargez et installez [Git](https://git-scm.com/downloads) depuis le site officiel de Git en fonction de votre système d'exploitation. Suivez les instructions d'installation fournies.

Installez Node.js LTS (Long-Term Support) : Visitez le site web de Node.js et téléchargez [la version LTS](https://nodejs.org/en/download) correspondant à votre système d'exploitation. Suivez les instructions d'installation fournies pour installer Node.js.

Pour installer la base de données OrientDB sous Docker dans un environnement Windows 11, vous pouvez suivre les étapes suivantes :

Étape 1: Installation de Docker

Installer Docker Desktop : Visitez le site officiel de Docker et téléchargez [Docker Desktop](https://www.docker.com/products/docker-desktop/) pour votre système d'exploitation. Suivez les instructions d'installation.

Étape 2: Configuration de Docker

    Ouvrez Docker une fois l'installation terminée.
    Assurez-vous que Docker est en cours d'exécution et fonctionne correctement.

Étape 3: Téléchargement de l'image Docker OrientDB

    Ouvrez une invite de commandes (Command Prompt) ou PowerShell sur votre machine Windows.
    Exécutez la commande suivante pour télécharger l'image Docker OrientDB :

docker pull orientdb

    Attendez que le téléchargement de l'image soit terminé.

Étape 4: Création d'un conteneur Docker OrientDB

    Exécutez la commande suivante pour créer un conteneur Docker OrientDB :

docker run -d --name orientdb -p 2424:2424 -p 2480:2480 -e ORIENTDB_ROOT_PASSWORD=<votre_mot_de_passe> orientdb

Assurez-vous de remplacer <votre_mot_de_passe> par un mot de passe sécurisé de votre choix.

    Cette commande crée un conteneur Docker nommé "orientdb" en utilisant l'image téléchargée précédemment.
    Les ports 2424 et 2480 sont exposés pour permettre l'accès à OrientDB depuis l'hôte Windows.
    Le mot de passe défini avec l'option ORIENTDB_ROOT_PASSWORD sera utilisé pour l'accès à l'instance OrientDB.

Étape 5: Vérification de l'exécution du conteneur OrientDB

    Exécutez la commande suivante pour vérifier si le conteneur OrientDB est en cours d'exécution :

docker ps

    Vous devriez voir une ligne avec le nom "orientdb" et le statut "Up" dans la liste des conteneurs en cours d'exécution.

Étape 6: Accès à OrientDB depuis un navigateur web

    Ouvrez votre navigateur web et accédez à l'URL suivante :

http://localhost:2480

    Vous devriez voir l'interface web d'OrientDB.

Étape 7: Configuration d'OrientDB

    Suivez les instructions à l'écran pour configurer OrientDB, y compris la création d'une base de données.

Étape 8: Récupération du projet

    Utiliser Git pour récuperer le projet en executant les commandes suivante:

  git clone https://github.com/attepemualliug/Crud-orientDB.git
  npm install 
  code .
