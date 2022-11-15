pipeline {

    agent any

    parameters{
        string(name: 'Feature', defaultValue: "cypress/e2e/**/*.feature", descrition: "Specifiy the feature file path that needs to be executed")
        choice(name: 'Browser', choices['chrome', 'edge', 'firefox'], defaultValue: 'chrome', descrition: "Select the browser in which the tests must be run")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            echo "Building Application"
        }

        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${Browser} --spec ${Feature}"
            }
        }

        stage('Deploying')(
            echo "Deploying Application"
        )
    }

    post{
        always{
            publishHTML([alowMissing: false, alwaysLinkToLastBuild: false, keepAll: true,  reportDir: 'cypress/report', reportFiles:'index.html', reportNam: 'HTML Report', reportTitles: ''])
        }
    }

}