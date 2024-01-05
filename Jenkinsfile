pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Etapa BUILD no disponible"
            }
        }
        stage('Test') {
            steps {
                echo "Etapa TEST no disponible"
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh "docker-compose down --rmi all"
                    sh "docker-compose up -d --build"
                }
            }
        }
    }
}
