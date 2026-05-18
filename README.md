# Node.js Auth - JWT Authentication System

A production-ready full-stack authentication application built with Node.js, Express, React, and MongoDB. This project demonstrates secure user authentication patterns including JWT tokens, HTTP-only cookies, rate limiting, and comprehensive security headers.

## Overview

This application provides a complete authentication system with user registration, login, logout, and session management. It is designed as a learning resource for understanding modern web authentication flows and best practices for securing Node.js applications.

The project is containerized with Docker and can be deployed to any container hosting platform, with specific instructions provided for Google Cloud Run.

## Technology Stack

### Backend

| Technology | Purpose |
|------------|---------|
| Express.js | Web framework for REST API |
| MongoDB | Database with Mongoose ODM |
| JWT | Token-based authentication |
| bcrypt | Password hashing |
| Helmet | Security headers |
| express-rate-limit | Request rate limiting |
| cookie-parser | Cookie parsing |

### Frontend

| Technology | Purpose |
|------------|---------|
| React 19 | UI library |
| Vite | Build tool and dev server |
| React Router | Client-side routing |
| Axios | HTTP client |

### DevOps

| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Docker Compose | Local orchestration |
| Nginx | Production web server |
| Google Cloud Run | Cloud deployment |

## Project Structure

```
nodejs-Auth/
├── client/                     # React frontend application
│   ├── src/
│   │   ├── main.tsx           # Application entry point
│   │   ├── App.tsx            # Root component
│   │   └── ...
│   ├── Dockerfile             # Multi-stage Docker build
│   ├── nginx.conf             # Nginx configuration
│   └── package.json           # Frontend dependencies
│
├── server/                     # Express.js backend
│   ├── src/
│   │   └── server.ts          # Server entry point
│   ├── Dockerfile             # Docker build
│   └── package.json           # Backend dependencies
│
├── docker-compose.yml         # Docker Compose configuration
└── README.md                  # This documentation
```

## Prerequisites

Before running or deploying this application, ensure you have:

- Node.js 22 or higher
- Docker Engine 20.10 or higher
- Docker Compose v2 or higher
- Google Cloud SDK (for cloud deployment)
- MongoDB instance (local or cloud)

## Google Cloud Deployment

This section provides step-by-step instructions for deploying to Google Cloud Run.

### 1. Setup Google Cloud Project

```bash
# Install Google Cloud SDK if not already installed
# https://cloud.google.com/sdk/docs/install

# Authenticate with GCP
gcloud auth login

# Create a new project (replace with your project name)
gcloud projects create my-auth-project

# Set the active project
gcloud config set project my-auth-project

# Enable required APIs
gcloud services enable run.googleapis.com containerregistry.googleapis.com artifactregistry.googleapis.com
```

### 2. Configure MongoDB

For the database, you have several options:

#### Option A: MongoDB Atlas (Recommended)

1. Create a free cluster at https://www.mongodb.com/cloud/atlas
2. Get your connection string from Atlas dashboard
3. Replace `<password>` with your database user password

#### Option B: Google Cloud MongoDB

Deploy MongoDB on Compute Engine or use Cloud SQL (requires proxy setup).

### 3. Build and Push Docker Images

#### Using Container Registry

```bash
# Configure Docker for GCP
gcloud auth configure-docker

# Build server image
docker build -t gcr.io/my-auth-project/auth-server ./server

# Build client image
docker build -t gcr.io/my-auth-project/auth-client ./client

# Push images to Google Container Registry
docker push gcr.io/my-auth-project/auth-server
docker push gcr.io/my-auth-project/auth-client
```

#### Using Artifact Registry (Recommended)

```bash
# Create artifact registry repository
gcloud artifacts repositories create auth-repo \
  --repository-type=docker \
  --location=us-central1

# Tag images for artifact registry
docker tag gcr.io/my-auth-project/auth-server:latest \
  us-central1-docker.pkg.dev/my-auth-project/auth-repo/auth-server:latest

docker tag gcr.io/my-auth-project/auth-client:latest \
  us-central1-docker.pkg.dev/my-auth-project/auth-repo/auth-client:latest

# Push to artifact registry
docker push us-central1-docker.pkg.dev/my-auth-project/auth-repo/auth-server:latest
docker push us-central1-docker.pkg.dev/my-auth-project/auth-repo/auth-client:latest
```

### 4. Deploy to Cloud Run

#### Deploy the Backend

```bash
gcloud run deploy auth-server \
  --image us-central1-docker.pkg.dev/my-auth-project/auth-repo/auth-server:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars MONGO_URI=your-mongodb-uri,JWT_SECRET=your-secret-key,CLIENT_URL=https://your-client-url
```

Note the service URL returned by this command (e.g., `https://auth-server-xyz.a.run.app`).

#### Deploy the Frontend

```bash
gcloud run deploy auth-client \
  --image us-central1-docker.pkg.dev/my-auth-project/auth-repo/auth-client:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### 5. Configure Custom Domain (Optional)

If you want to use a custom domain:

```bash
gcloud run domain-mappings create \
  --service auth-client \
  --domain your-domain.com \
  --region us-central1
```
## Security Implementation

This application implements several security measures:

### Authentication

- **JWT Tokens**: Access tokens are short-lived and stored in HTTP-only cookies
- **Secure Cookies**: Cookies are configured with `HttpOnly`, `Secure`, and `SameSite` attributes
- **Password Hashing**: All passwords are hashed using bcrypt before storage

### API Security

- **Rate Limiting**: Global rate limit of 200 requests per 15 minutes
- **Auth Rate Limiting**: Stricter limit of 10 requests per 15 minutes for authentication endpoints
- **Helmet**: Security headers are set automatically
- **CORS**: Cross-origin requests are restricted to allowlisted origins

### Input Validation

- All user input is validated before processing
- SQL injection prevention through Mongoose parameterized queries
- XSS prevention through React's default escaping

## Troubleshooting

### Common Issues

#### Connection Refused Errors

Ensure MongoDB is running and the connection string is correct:

```bash
# Test MongoDB connection
mongosh "your-mongodb-uri"
```

#### CORS Errors

Verify that your `CLIENT_URL` matches the frontend URL exactly, including the protocol:

```bash
# Correct
CLIENT_URL=http://localhost:80

# Incorrect (missing protocol)
CLIENT_URL=localhost:80
```

#### Docker Build Failures

If build fails on Alpine Linux (bcrypt native module):

```dockerfile
# Add these lines to server/Dockerfile before npm install
RUN apk add --no-cache python3 make g++
```

#### Cloud Run 502 Errors

Check logs for the actual error:

```bash
gcloud logs read --service auth-server --limit 50
```