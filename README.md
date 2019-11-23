# About
This is a simple REST API written in NodeJS using the [Express](https://expressjs.com) framework.

In this example you will learn how to deploy the NodeJS app in a Kubernetes cluster.

## Setup

#### Install Requirements:
- [NodeJS](https://nodejs.org/en/download/package-manager/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)


Get the code:

```bash
git clone git@github.com:rafaelsilvestri/nodejs-k8s.git
cd nodejs-k8s
```
Running locally
```bash
node ./bin/server.js
```

### Running the Container
Ensure your cluster is up and runnig
```bash
minikube start
```

#### Building the image
In order to publish your image to the minikube docker environment, rather than you local docker environment, run the command bellow:
```bash
eval $(minikube docker-env)
```
if you need to undo this change use the command bellow:
```bash
eval $(minikube docker-env -u)
```

Build the image:
```bash
docker build -t silvestri/nodejs-k8s .
```

#### Deploying to Kubernetes
The `deployment.yaml` contains the definition of our deployment application and the NodePort service to expose our application.

To create the stack, type:

```bash
kubectl create -f deployment.yaml
```

To check the pods and service status type:
```bash
kubectl get pods
kubectl get services
```

You can use minikube command bellow to open the service in your default browser:
```bash
minikube service nodejs-k8s-service
```
The command above will open the url http://192.168.99.100:30001

You can also try:
- http://192.168.99.100:30001/hello
- http://192.168.99.100:30001/hello/YourName