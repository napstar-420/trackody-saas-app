import React from 'react';
import Campaigns from '../../components/dashboard/admin/campaigns';
import Channels from '../../components/dashboard/admin/channels';
import ExternalLinks from '../../components/dashboard/admin/externalLinks';
import HighLights from '../../components/dashboard/admin/highLights';
import KeyStatistics from '../../components/dashboard/admin/keyStatistics';
import PerformanceOverview from '../../components/dashboard/admin/performanceOverview';
import TopAffiliates from '../../components/dashboard/admin/topAffiliates';
import Header from '../../components/header';
import { NetworkSummary } from '../../components/dashboard/admin/networkSummary.jsx';

export default function Dashboard() {
  return (
    <div className='dark:bg-dark_600 px-4 py-4 lg:px-8 lg:py-8 h-full col-start-1 col-end-3 md:col-start-2 overflow-y-auto'>
      <Header>
        <div>
          <h2 className='text-lg text-light_text dark:text-white font-semibold'>
            Dashboard
          </h2>
          <p className='text-light_600 dark:text-dark_200'>
            You&apos;ve got 24 new sales
          </p>
        </div>
      </Header>
      <main className='py-4 lg:py-8 grid gap-4'>
        <NetworkSummary />
        <div className='grid xl:grid-cols-[2.5fr_1fr] gap-4'>
          <PerformanceOverview />
          <div className='h-full sm:grid grid-cols-2 xl:grid-cols-1 gap-4'>
            <HighLights />
            <ExternalLinks />
          </div>
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
