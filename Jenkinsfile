pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/rithvik213/portfolio-website-version2.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("localhost:5000/your-image-name:${env.BUILD_ID}")
                }
            }
        }
        stage('Push Docker Image to Local Registry') {
            steps {
                script {
                    docker.withRegistry('http://localhost:5000') {
                        dockerImage.push("latest")
                    }
                }
            }
        }
        stage('Trigger Redeployment in Portainer') {
            steps {
                script {
                    sh '''
                    curl -X POST "http://portainer-server:9000/api/endpoints/1/docker/services/YOUR_SERVICE_ID/update?image=localhost:5000/your-image-name:latest" \
                    -H "Authorization: Bearer YOUR_PORTAINER_API_TOKEN"
                    '''
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
