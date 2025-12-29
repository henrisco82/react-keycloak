# Secured React App with OAuth 2.0 / OIDC Authentication

A modern React application built with Vite that demonstrates OpenID Connect (OIDC) authentication using any OAuth 2.0 / OIDC compliant authorization server (such as Keycloak, Spring Boot Authorization Server, Auth0, Okta, etc.). The app features a protected route system and Material-UI components for a polished user interface.

## 🏗️ Architecture

- **Frontend**: React 18 with Vite build tool
- **Authentication**: OAuth 2.0 / OIDC compliant authorization server
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router v6
- **State Management**: React Context (via react-oidc-context)

## 📋 Prerequisites

- **Node.js**: v20.19.0 or higher (recommended: v20.19.4)
- **Authorization Server**: Any OAuth 2.0 / OIDC compliant server (Spring Boot Authorization Server, Keycloak, Auth0, Okta, etc.)
- **npm**: v10.8.2 or higher

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Your Authorization Server

This app works with any OAuth 2.0 / OIDC compliant authorization server. Here are examples for popular providers:

#### Option A: Spring Boot Authorization Server (Recommended for your setup)

1. **Start your Spring Boot Authorization Server**
   ```bash
   # Your Spring Boot app should be running on port 9000
   # Make sure it's configured with the correct OAuth settings
   ```

2. **Configure OAuth Client**
   - Ensure your server has a client configured with:
     - Client ID: `client`
     - Grant Types: `authorization_code`, `refresh_token`
     - Redirect URIs: `http://localhost:3000/*`
     - Scopes: `openid`, `profile`, `email`

#### Option B: Keycloak (Alternative Example)

```bash
# Run Keycloak with Docker (example)
docker run -p 9000:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev
```

Configure your preferred authorization server with the same client settings as above.

#### Option C: Other Providers (Auth0, Okta, etc.)

1. **Create an OAuth Application/Client**
   - Set redirect URIs to: `http://localhost:3000/*`
   - Note down your client ID and authorization endpoint URL
2. **Update configuration** in `src/main.jsx` with your provider's details

### 3. Configure OAuth Client Settings

Regardless of which authorization server you use, ensure it has:

- **Client ID**: `client` (or update in `src/main.jsx`)
- **Authorization Endpoint**: Available at your server's `/oauth/authorize` or equivalent
- **Token Endpoint**: Available at your server's `/oauth/token` or equivalent
- **User Info Endpoint**: For retrieving user profile information
- **Supported Grant Types**: Authorization Code flow
- **Redirect URIs**: `http://localhost:3000/*`

### 4. Configure the Application

The app uses environment variables for OAuth 2.0 / OIDC configuration. To customize the settings:

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your authorization server details
```

Update `.env` with your configuration:

```bash
# OAuth 2.0 / OIDC Configuration
VITE_OIDC_AUTHORITY=http://localhost:9000          # Your authorization server base URL
VITE_OIDC_CLIENT_ID=client                         # Your OAuth client ID
VITE_OIDC_REDIRECT_URI=http://localhost:3000       # Your app URL
VITE_OIDC_POST_LOGOUT_REDIRECT_URI=http://localhost:3000  # Post-logout redirect URL
```

**Environment Variables:**
- `VITE_OIDC_AUTHORITY`: Base URL of your OAuth 2.0 / OIDC authorization server
- `VITE_OIDC_CLIENT_ID`: Client ID registered with your authorization server
- `VITE_OIDC_REDIRECT_URI`: URL where users are redirected after authentication
- `VITE_OIDC_POST_LOGOUT_REDIRECT_URI`: URL where users are redirected after logout

**Note:** The app includes fallback defaults, so it will work out-of-the-box with `.env.example` values. Only create `.env` if you need to override the defaults. After updating `.env`, restart the development server.

### 5. Start the Application

```bash
npm run dev
```

The app will be available at: http://localhost:3000

## 📱 Usage

1. **Home Page**: Public welcome page with login and register options
2. **Registration**: Click "Register" to create a new account
3. **Authentication**: Click "Login" to authenticate with your authorization server
4. **Protected Route**: Access `/hidden` route after authentication
5. **User Info**: View authenticated user information
6. **Logout**: Sign out and return to home page

### Registration Process

- Navigate to the registration page via the "Register" button
- Fill in the required fields: username, email, password, and confirm password
- Password confirmation ensures both password fields match
- Form validates all fields with helpful error messages
- Registration API endpoint: `{VITE_OIDC_AUTHORITY}/api/auth/register`
- Upon successful registration, users are redirected to the login page

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
/
├── .env.example           # Environment variables template
├── src/
├── components/          # Reusable UI components
│   ├── Footer.jsx      # App footer component
│   └── Register.jsx    # User registration page
├── pages/              # Page components (empty for now)
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point with OIDC config
├── Layout.jsx          # App layout wrapper
├── PrivateRoute.jsx    # Route protection component
├── Loading.jsx         # Loading spinner component
├── Header.jsx          # App header with navigation
├── Home.jsx            # Home page component
└── Hidden.jsx          # Protected page component
```

## 🔐 Authentication Flow

1. User clicks "Login"
2. Redirected to authorization server login page
3. After successful authentication, redirected back to app
4. Access token stored in memory (via react-oidc-context)
5. Protected routes check authentication status
6. Logout clears tokens and redirects to home

## 🛠️ Technologies Used

- **React 18**: UI framework
- **Vite**: Fast build tool and dev server
- **Authorization Server**: Any OAuth 2.0 / OIDC compliant server
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

4. Update your authorization server client configuration with production URLs

## 🐛 Troubleshooting

**Common Issues:**

1. **404 on localhost:3000**
   - Ensure `index.html` is in the root directory (not `public/`)
   - Check that Vite dev server is running

2. **Authorization server connection issues**
   - Verify your authorization server is running on port 9000
   - Check realm and client configuration
   - Ensure redirect URIs match app URL

3. **Authentication not working**
   - Check browser console for errors
   - Verify OIDC configuration in `.env` file
   - Ensure CORS is properly configured in your authorization server

4. **Environment variables not loading**
   - Copy `.env.example` to `.env` and customize values
   - Restart the dev server after changing `.env` file
   - Ensure variables are prefixed with `VITE_`
   - Variables only load on server start, not hot reload

## 📚 Additional Resources

- [OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
- [Spring Boot Authorization Server](https://docs.spring.io/spring-authorization-server/docs/current/reference/html/)
- [React OIDC Context](https://github.com/authts/react-oidc-context)
- [Material-UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
