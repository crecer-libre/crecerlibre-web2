pipeline{
    agent any
    stages{
        stage ('Build'){
            step{
                echo "Etapa BUILD no disponible"
            }
        }
        stage ('Test'){
            step{
                echo "Etapa TEST no disponible"
            }
        }
        stage ('Deploy'){
            steps{
                sh "docker-compose down --rmi all"
                sh "docker-compose up -d --build"
            }
        }
    }
}