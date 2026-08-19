pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Test') {
            steps {
                bat 'docker --version'
            }
        }

        stage('Test') {
            steps {
                echo 'Portfolio CI/CD pipeline is working!'
            }
        }
    }
}