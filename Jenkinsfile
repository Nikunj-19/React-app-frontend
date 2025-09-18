pipeline {
    agent any

    tools {
        nodejs "NodeJS_18"  // Make sure you configured NodeJS in Jenkins Global Tool Configuration
    }

  stage('Checkout') {
    steps {
        git branch: 'main',
            credentialsId: 'git',
            url: 'git@github.com:Nikunj-19/React-app-frontend.git'
    }
}


        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Build completed successfully!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
