import { useState, useEffect } from 'react';
import './App.css';

function formatTime(date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
}

function App() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <h1>Workout Timer</h1>
      <time>
        For your workout on
        {' '}
        {time}
      </time>
    </main>
  );
}

export default App;
