import React from 'react';
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
    </div>
  );
}
