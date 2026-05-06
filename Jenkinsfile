def dockerImage

pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("localhost:5000/personal-website:${env.BUILD_ID}")
                }
            }
        }
        stage('Push Docker Image to Local Registry') {
            steps {
                script {
                    docker.withRegistry('http://localhost:5000') {
                        dockerImage.push("${env.BUILD_ID}")
                        dockerImage.push("latest")
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
