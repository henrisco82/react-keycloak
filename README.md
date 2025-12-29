# Secured React App with Keycloak Authentication

A modern React application built with Vite that demonstrates OpenID Connect (OIDC) authentication using Keycloak as the authorization server. The app features a protected route system and Material-UI components for a polished user interface.

## 🏗️ Architecture

- **Frontend**: React 18 with Vite build tool
- **Authentication**: Keycloak (OIDC/OAuth 2.0)
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router v6
- **State Management**: React Context (via react-oidc-context)

## 📋 Prerequisites

- **Node.js**: v20.19.0 or higher (recommended: v20.19.4)
- **Keycloak Server**: v17.0.0 or higher
- **npm**: v10.8.2 or higher

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Keycloak Server

#### Option A: Using Docker (Recommended)

```bash
# Run Keycloak with Docker
docker run -p 9000:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev
```

Keycloak will be available at: http://localhost:9000

#### Option B: Download and Install Manually

1. Download Keycloak from [official website](https://www.keycloak.org/downloads)
2. Extract and run:
   ```bash
   # Start Keycloak in development mode
   ./bin/kc.sh start-dev
   ```

### 3. Configure Keycloak Realm and Client

1. **Access Keycloak Admin Console**
   - Open: http://localhost:9000
   - Login with: `admin` / `admin`

2. **Create a New Realm**
   - Go to "Master" dropdown → "Create realm"
   - Name: `myrealm` (or any name you prefer)
   - Click "Create"

3. **Create a Client**
   - Go to "Clients" → "Create client"
   - Client ID: `client`
   - Client Type: `OpenID Connect`
   - Click "Next"
   - Enable "Client authentication" → Off
   - Authentication flow: Enable "Standard flow"
   - Login settings:
     - Valid redirect URIs: `http://localhost:3000/*`
     - Web origins: `http://localhost:3000`
   - Click "Save"

4. **Create a Test User**
   - Go to "Users" → "Create new user"
   - Username: `testuser`
   - Email: `test@example.com`
   - First name: `Test`
   - Last name: `User`
   - Click "Create"
   - Go to "Credentials" tab → "Set password"
   - Password: `password`
   - Temporary: Off
   - Click "Save"

### 4. Configure the Application

The app is pre-configured to work with the above Keycloak setup. If you used different settings, update `src/main.jsx`:

```javascript
const oidcConfig = {
  authority: 'http://localhost:9000', // Your Keycloak URL
  client_id: 'client',                // Your client ID
  redirect_uri: 'http://localhost:3000',     // Your app URL
  post_logout_redirect_uri: 'http://localhost:3000',
};
```

### 5. Start the Application

```bash
npm run dev
```

The app will be available at: http://localhost:3000

## 📱 Usage

1. **Home Page**: Public welcome page with login prompt
2. **Authentication**: Click "Login with Keycloak" to authenticate
3. **Protected Route**: Access `/hidden` route after authentication
4. **User Info**: View authenticated user information
5. **Logout**: Sign out and return to home page

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point with OIDC config
├── Layout.jsx          # App layout wrapper
├── PrivateRoute.jsx    # Route protection component
├── Loading.jsx         # Loading spinner component
└── Home.jsx            # Home page component
```

## 🔐 Authentication Flow

1. User clicks "Login with Keycloak"
2. Redirected to Keycloak login page
3. After successful authentication, redirected back to app
4. Access token stored in memory (via react-oidc-context)
5. Protected routes check authentication status
6. Logout clears tokens and redirects to home

## 🛠️ Technologies Used

- **React 18**: UI framework
- **Vite**: Fast build tool and dev server
- **Keycloak**: Identity and access management
- **Material-UI**: React component library
- **React Router**: Client-side routing
- **react-oidc-context**: OIDC authentication library
- **TypeScript**: Type definitions (via @types packages)

## 🔒 Security Features

- OpenID Connect authentication
- JWT token handling
- Automatic token refresh
- Protected routes
- Secure logout
- CSRF protection via OIDC flow

## 🚀 Deployment

1. Build the app:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains production-ready files

3. Configure your web server to:
   - Serve static files from `dist/`
   - Handle client-side routing (SPA mode)
   - Set up HTTPS in production

4. Update Keycloak client configuration with production URLs

## 🐛 Troubleshooting

**Common Issues:**

1. **404 on localhost:3000**
   - Ensure `index.html` is in the root directory (not `public/`)
   - Check that Vite dev server is running

2. **Keycloak connection issues**
   - Verify Keycloak is running on port 9000
   - Check realm and client configuration
   - Ensure redirect URIs match app URL

3. **Authentication not working**
   - Check browser console for errors
   - Verify OIDC configuration in `main.jsx`
   - Ensure CORS is properly configured in Keycloak

## 📚 Additional Resources

- [Keycloak Documentation](https://www.keycloak.org/documentation)
- [React OIDC Context](https://github.com/authts/react-oidc-context)
- [Material-UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
