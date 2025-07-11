# React Custom Hooks Collection 🎣

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-3178C6?logo=typescript)

A collection of reusable, well-typed custom React hooks to supercharge your development workflow. These hooks cover common use cases for authentication, time-based logic, and more.

## 🚀 Features

- **Authentication Hooks**: Complete auth flow with Firebase/Firestore integration
- **Time-based Hooks**: Smart time-of-day detection
- **Type Safety**: Fully typed with TypeScript
- **Real-time Updates**: Built-in subscription patterns
- **Customizable**: Adaptable to your specific needs

## 📦 Installation

```bash
npm install @yourusername/react-hooks-collection
# or
yarn add @yourusername/react-hooks-collection
```

## 🔧 Available Hooks

### 🔐 `useAuth()`
Complete authentication solution with Firebase/Firestore integration.

```typescript
const {
  currentUser,    // { auth: User | null, profile: UserProfile | null }
  loading,        // boolean
  isAuthenticated,// boolean
  signUp,         // (email: string, password: string, fullName?: string) => Promise<AuthResult>
  signIn,         // (email: string, password: string) => Promise<AuthResult>
  logOut,         // () => Promise<AuthResult>
  verifyAuth,     // () => boolean
  getToken,       // () => Promise<string | null>
  updateUserProfile // (data: Partial<UserProfile>) => Promise<AuthResult>
} = useAuth();
```

### ⏰ `useTimeOfDay()`
Detects morning/afternoon/evening/night based on current time.

```typescript
const timeOfDay = useTimeOfDay(); // 'morning' | 'afternoon' | 'evening' | 'night'

// With custom time ranges:
const timeOfDay = useTimeOfDay({
  morning: [6, 11],
  afternoon: [11, 16],
  evening: [16, 20],
  night: [20, 6]
});
```

## 🛠 Usage Examples

### Authentication Flow Example
```typescript
import { useAuth } from '@yourusername/react-hooks-collection';

function LoginPage() {
  const { signIn, loading } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    const result = await signIn(email, password);
    if (!result.success) {
      alert(result.error);
    }
  };

  return (
    <button onClick={() => handleLogin('test@example.com', 'password')} disabled={loading}>
      {loading ? 'Loading...' : 'Login'}
    </button>
  );
}
```

### Time-Based Greeting Example
```typescript
import { useTimeOfDay } from '@yourusername/react-hooks-collection';

function Greeting() {
  const timeOfDay = useTimeOfDay();
  
  const greetings = {
    morning: 'Good morning! ☀️',
    afternoon: 'Good afternoon! 🌤',
    evening: 'Good evening! 🌙',
    night: 'Good night! 🌚'
  };

  return <h1>{greetings[timeOfDay]}</h1>;
}
```

## 🔄 Real-time Updates

All hooks are designed to handle real-time updates automatically:

```typescript
function Profile() {
  const { currentUser } = useAuth();
  
  // Will re-render when profile changes in Firestore
  return <div>{currentUser.profile?.fullName}</div>;
}
```

## 🛡️ Security

The authentication hooks include built-in security patterns:
- JWT token management
- Secure Firestore rules templates
- Protected route components
- Auth state persistence

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/react-hooks-collection](https://github.com/yourusername/react-hooks-collection)

## ✨ Acknowledgments

- Inspired by real-world React applications
- Thanks to the React community for best practices
- Firebase for awesome backend services

---

Made with ❤️ and React hooks
