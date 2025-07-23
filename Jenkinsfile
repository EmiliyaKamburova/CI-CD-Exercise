pipeline {
    agent any

    tools {
        nodejs 'nodejs-18' // This name must match your Jenkins global tool config
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Start application') {
            steps {
                sh 'nohup npm start &'
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