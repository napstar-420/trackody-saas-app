import React, { useState } from 'react';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import { QuickLinksBtn } from './dashboard/admin/quickLinks';
import { ThemeToggleBtn } from './dashboard/admin/themeToggle.jsx';
import { NotificationBtn } from './dashboard/admin/notification.jsx';
import { ProfileBtn } from './dashboard/admin/profileBtn.jsx';

export default function ProfileHeader() {
  const [opened, setOpened] = useState('');

  return (
    <div className='flex gap-2 items-center relative'>
      <QuickLinksBtn opened={opened} setOpened={setOpened} />
      <button className='p-2 text-2xl border rounded-xl text-zinc-300 hover:text-primary hover:border-primary transition-colors'>
        <HiChatBubbleBottomCenterText />
      </button>
      <ThemeToggleBtn opened={opened} setOpened={setOpened} />
      <NotificationBtn opened={opened} setOpened={setOpened} />
      <ProfileBtn opened={opened} setOpened={setOpened} />
    </div>
  );
}
