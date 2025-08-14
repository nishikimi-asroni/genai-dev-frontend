import { useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import InputBox from '../components/InputBox';

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'server', text: 'サーバーの返答を表示' }
  ]);

  const sendMessage = async (text) => {
    setMessages((prev) => [...prev, { role: 'user', text }]);

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();

    setMessages((prev) => [...prev, { role: 'server', text: data.reply }]);
  };

  return (
    <div className="h-screen flex flex-col">
      <ChatWindow messages={messages} />
      <InputBox onSend={sendMessage} />
    </div>
  );
}

