# Docker Installation on an EC2 Instance

This guide will walk you through the process of installing Docker on an Amazon EC2 instance. We will use an Ubuntu-based instance as the example. If you are using a different Linux distribution, you may need to adjust some commands accordingly.

## Prerequisites

- An AWS account
- A running EC2 instance (preferably Ubuntu 20.04 or higher)
- SSH access to the instance

---

## Step 1: Connect to Your EC2 Instance

Start by connecting to your EC2 instance via SSH.

```bash
ssh -i /path/to/your-key.pem ubuntu@<EC2-Public-IP>

sudo apt-get update

sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

docker --version

sudo systemctl start docker
sudo systemctl enable docker

docker run hello-world

sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version


This `README.md` guide covers the installation of Docker, optional Docker Compose, and basic verification steps for an EC2 instance, tailored to an Ubuntu-based environment.
