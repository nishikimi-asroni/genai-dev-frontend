import { useState } from 'react';

export default function InputBox({ onSend }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  return (
    <div className="p-4 flex border-t bg-white">
      <input
        className="flex-1 border rounded px-3 py-2 mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="フリー入力欄"
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        送信
      </button>
    </div>
  );
}

