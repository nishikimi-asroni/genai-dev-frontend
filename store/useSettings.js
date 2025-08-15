import { create } from 'zustand';

const useSettings = create((set) => ({
  background: '/assets/bg/office.png',
  userAvatar: '/assets/avatars/user.png',
  serverAvatar: '/assets/avatars/server.png',

  setBackground: (bg) => set({ background: bg }),
  setUserAvatar: (avatar) => set({ userAvatar: avatar }),
  setServerAvatar: (avatar) => set({ serverAvatar: avatar }),
}));

export default useSettings;

