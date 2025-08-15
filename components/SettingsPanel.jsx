import useSettings from '../store/useSettings';

const backgrounds = [
  '/assets/bg/office.png',
  '/assets/bg/city.png',
  '/assets/bg/night.png',
];

const userAvatars = [
  '/assets/avatars/user.png',
  '/assets/avatars/user2.png',
];

const serverAvatars = [
  '/assets/avatars/server.png',
  '/assets/avatars/server2.png',
];

export default function SettingsPanel() {
  const { setBackground, setUserAvatar, setServerAvatar } = useSettings();

  return (
    <div className="absolute top-4 right-4 bg-white p-4 rounded shadow-lg w-64 space-y-4">
      <h2 className="font-bold">背景選択</h2>
      <div className="flex gap-2">
        {backgrounds.map((bg, i) => (
          <img
            key={i}
            src={bg}
            alt="背景"
            className="w-12 h-12 object-cover cursor-pointer border"
            onClick={() => setBackground(bg)}
          />
        ))}
      </div>

      <h2 className="font-bold">ユーザーアバター</h2>
      <div className="flex gap-2">
        {userAvatars.map((av, i) => (
          <img
            key={i}
            src={av}
            alt="ユーザー"
            className="w-12 h-12 object-cover cursor-pointer border rounded-full"
            onClick={() => setUserAvatar(av)}
          />
        ))}
      </div>

      <h2 className="font-bold">サーバーアバター</h2>
      <div className="flex gap-2">
        {serverAvatars.map((av, i) => (
          <img
            key={i}
            src={av}
            alt="サーバー"
            className="w-12 h-12 object-cover cursor-pointer border rounded-full"
            onClick={() => setServerAvatar(av)}
          />
        ))}
      </div>
    </div>
  );
}

