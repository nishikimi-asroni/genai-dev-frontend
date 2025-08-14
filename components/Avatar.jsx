export default function Avatar({ type }) {
  const src =
    type === 'user'
      ? '/assets/avatar-user.png'
      : '/assets/avatar-server.png';

  return (
    <img
      src={src}
      alt={`${type} avatar`}
      className="w-10 h-10 rounded-full mx-2"
    />
  );
}

