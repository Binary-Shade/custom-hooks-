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
npm install @Binary-Shade/react-hooks-collection
# or
yarn add @Binary-Shade/react-hooks-collection
```

## 🔧 Available Hooks

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

Your Name - [@sureshk](02042003sureshk@gmail.com)

Project Link: [https://github.com/yourusername/react-hooks-collection](https://github.com/yourusername/react-hooks-collection)

## ✨ Acknowledgments

- Inspired by real-world React applications
- Thanks to the React community for best practices
- Firebase for awesome backend services

---

Made with ❤️ and React hooks
