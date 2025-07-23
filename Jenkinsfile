pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Set up Node.js') {
            steps {
                // You may need to install Node.js if not present on the agent
                sh 'node --version || curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Start application') {
            steps {
                // Start the app in the background
                sh 'nohup npm start &'
                // Wait for the app to start
                sh 'sleep 5'
            }
        }
        stage('Run tests') {
            steps {
                sh 'node ./node_modules/mocha/bin/mocha tests/*.js'
            }
        }
    }
}