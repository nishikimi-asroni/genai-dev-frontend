import useSettings from '../store/useSettings';

export default function Avatar({ type }) {
  const { userAvatar, serverAvatar } = useSettings();
  const src = type === 'user' ? userAvatar : serverAvatar;

  return (
    <img
      src={src}
      alt={`${type} avatar`}
      className="w-16 h-16 rounded-full object-cover mx-2"
    />
  );
}

