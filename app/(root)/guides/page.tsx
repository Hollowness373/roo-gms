import GuideList from '@/components/GuideList'
import { sampleGuides } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <>
      <form>
        <div>Search Guide</div>
      </form>
      <GuideList 
        title='Guides:'
        guides={sampleGuides}
        containerClassName='mt-28'
      />
    </>
  )
}

export default Page