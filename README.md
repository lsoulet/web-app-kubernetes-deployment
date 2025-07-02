# Web Apps K8s Deployment Project

This project contains two Node.js web applications deployed as separate Kubernetes pods within the same namespace.

- **App 1 (hello-app):**  
  Responds on `/hello` with HTTP 200.
- **App 2 (health-app):**  
  Responds on `/health` and checks if **App 2** is available.

---

## Getting started

### Prerequisites

- Docker installed
- Kubernetes cluster with `kubectl` configured
- Access to Docker Hub or any container registry

---

### Setup and Build

1. Clone the repo:

```bash
git clone <repo-url>
cd <repo-folder>
```

### Pull Docker images for both apps

```bash
docker pull lsoulet/main-app:latest ./main-app
docker pulllsoulet/hello-app:latest ./hello-app
```

### Deployment

Each web application has its own deployment file (\*-deployment.yaml) and service file (\*-service.yaml) that defines how the application should be deployed in Kubernetes.
Create a pod for each app and applys the manifests.
