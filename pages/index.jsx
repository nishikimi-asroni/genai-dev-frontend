import { useState } from 'react';
import Layout from '../components/Layout';
import ChatWindow from '../components/ChatWindow';
import InputBox from '../components/InputBox';
import SettingsPanel from '../components/SettingsPanel';

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
    <Layout>
      <SettingsPanel />
      <div className="h-full flex flex-col bg-black bg-opacity-40">
        <ChatWindow messages={messages} />
        <InputBox onSend={sendMessage} />
      </div>
    </Layout>
  );
}

