pipeline {

    agent any

    parameters{
        string(name: 'Feature', defaultValue: "cypress/e2e/**/*.feature", description: "Specifiy the feature file path that needs to be executed")
        choice(name: 'Browser', choices: ['chrome', 'edge', 'firefox'], description: "Select the browser in which the tests must be run")
    }

    stages{
        stage('Building'){
            steps{
                echo "Building Application"
            }
            
        }

        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${Browser} --spec ${Feature}"
            }
        }

        stage('Deploying'){
            steps{
                echo "Deploying Application"
            }
            
        }
    }
}