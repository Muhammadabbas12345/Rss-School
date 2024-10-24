import React from 'react'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from '../../components/Dashboard/Dashboard';

function page() {
  return (
    <div>
          <DefaultLayout>
      <Dashboard/>
      </DefaultLayout>
    </div>
  )
}

export default page
