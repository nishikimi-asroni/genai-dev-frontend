import useSettings from '../store/useSettings';

export default function Layout({ children }) {
  const { background } = useSettings();
  
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${background}')` }}
    >
      {children}
    </div>
  );
}

