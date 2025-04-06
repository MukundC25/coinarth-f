'use client';

import MainLayout from '../components/layout/MainLayout';
import CurrentBalance from '../components/dashboard/CurrentBalance';
import CibilScore from '../components/dashboard/CibilScore';
import Standings from '../components/dashboard/Standings';
import SpendingStats from '../components/dashboard/SpendingStats';
import Recommendations from '../components/dashboard/Recommendations';
import News from '../components/dashboard/News';
import Reminders from '../components/dashboard/Reminders';
import {
  userData,
  spendingStats,
  recommendations,
  news,
  reminders
} from '../data/mockData';

export default function Home() {
  return (
    <MainLayout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
          <div className="flex items-center bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-150">
            <span className="text-sm text-gray-600 mr-2 font-medium">Overall</span>
            <button className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <CurrentBalance
          balance={userData.currentBalance}
          currentMonthSalary={userData.currentMonthSalary}
          lastMonthSavings={userData.lastMonthSavings}
        />

        <CibilScore
          score={userData.cibilScore}
          nextUpdateDays={userData.nextUpdateDays}
        />

        <Standings
          income={userData.standings.income}
          expenses={userData.standings.expenses}
          investments={userData.standings.investments}
          savings={userData.standings.savings}
          period={userData.standings.period}
        />
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <SpendingStats
            total={spendingStats.total}
            period={spendingStats.period}
            monthlyData={spendingStats.monthlyData}
            highlightPoint={spendingStats.highlightPoint}
          />
        </div>

        <div className="space-y-6">
          <Recommendations
            taxTips={recommendations.taxTips}
            investmentOpportunities={recommendations.investmentOpportunities}
          />

          <News news={news} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mb-6">
        <Reminders reminders={reminders} />
      </div>
    </MainLayout>
  );
}
