node("docker") {
    stage('Get Source') {
        git 'https://github.com/AileenMolot/fileshare.git'
    }
    
    def fileshareImage

    sh 'git describe --tags > GIT_TAG'
    git_tag = readFile('GIT_TAG').trim()

    stage('Docker Build') {
        fileshareImage = docker.build("fileshare:release-${git_tag}-${env.BUILD_ID}")
    }
   
    stage ('Docker Push') {
        docker.withRegistry('https://483149632405.dkr.ecr.eu-west-1.amazonaws.com', 'ecr:eu-west-1:jenkins') {
            fileshareImage.push()
        }
    }
    
    stage ('Cleanup') {
        sh 'docker rmi -f `docker image ls -q`'
        cleanWs()
    }
}
