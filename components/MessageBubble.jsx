import Avatar from './Avatar';

export default function MessageBubble({ role, text }) {
  const isUser = role === 'user';
  return (
    <div className={`mb-4 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <Avatar type="server" />}
      <div
        className={`p-3 rounded-lg max-w-xs ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-white text-black shadow'
        }`}
      >
        {text}
      </div>
      {isUser && <Avatar type="user" />}
    </div>
  );
}

