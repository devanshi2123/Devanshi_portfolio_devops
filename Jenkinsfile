pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t devanshi2123/devanshi-portfolio-build:latest .'
            }
        }

        stage('Docker Hub Push') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    bat '''
                        echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
                        docker push devanshi2123/devanshi-portfolio-build:latest
                        docker logout
                    '''
                }
            }
        }
        stage('Test EC2 SSH') {
            steps {
                bat '''
                ssh -i "C:\\Users\\Devanshi\\Downloads\\aws_shell_key.pem" -o StrictHostKeyChecking=no ubuntu@100.53.229.87 "echo EC2 SSH connection successful"
                '''
            }
        }
    }
}