import React from 'react';
import Channels from '../../components/dasboard/admin/channels';
import TopAffiliates from '../../components/dasboard/admin/topAffiliates';
import ProfileHeader from '../../components/profileHeader';

export default function Dashboard() {
  return (
    <div className='px-8 py-8 h-full overflow-y-auto'>
      <header className='flex justify-between items-center'>
        <div>
          <h2 className='text-lg text-light_text font-semibold'>Dashboard</h2>
          <p className='text-light_600'>You&apos;ve got 24 new sales</p>
        </div>
        <ProfileHeader />
      </header>
      <main className='py-8'>
        <div className='grid grid-cols-2 gap-4'>
          <Channels />
          <TopAffiliates />
        </div>
      </main>
    </div>
  );
}
