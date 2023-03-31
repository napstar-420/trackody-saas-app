import React from 'react';
import Campaigns from '../../components/dasboard/admin/campaigns';
import Channels from '../../components/dasboard/admin/channels';
import ExternalLinks from '../../components/dasboard/admin/externalLinks';
import HighLights from '../../components/dasboard/admin/highLights';
import KeyStatistics from '../../components/dasboard/admin/keyStatistics';
import PerformanceOverview from '../../components/dasboard/admin/performanceOverview';
import TopAffiliates from '../../components/dasboard/admin/topAffiliates';
import ProfileHeader from '../../components/profileHeader';

export default function Dashboard() {
  return (
    <div className='px-8 py-8 h-full col-start-1 col-end-3 md:col-start-2 overflow-y-auto'>
      <header className='flex justify-between items-center'>
        <div>
          <h2 className='text-lg text-light_text font-semibold'>Dashboard</h2>
          <p className='text-light_600'>You&apos;ve got 24 new sales</p>
        </div>
        <ProfileHeader />
      </header>
      <main className='py-8 grid gap-4'>
        <div className='grid sm:grid-cols-2 xl:grid-cols-[2.5fr_1fr] grid-rows-[auto_auto] gap-4'>
          <PerformanceOverview />
          <HighLights />
          <ExternalLinks />
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(450px,1fr))] gap-4'>
          <Channels />
          <TopAffiliates />
        </div>
        <div className='grid xl:grid-cols-[2.5fr_1fr] gap-4 w-full'>
          <Campaigns />
          <KeyStatistics />
        </div>
      </main>
    </div>
  );
}
