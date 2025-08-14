import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((m, i) => (
        <MessageBubble key={i} role={m.role} text={m.text} />
      ))}
    </div>
  );
}

