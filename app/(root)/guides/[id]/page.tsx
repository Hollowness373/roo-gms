import GuideOverview from '@/components/GuideOverview';
import GuideVideo from '@/components/GuideVideo';
import { db } from '@/database/drizzle';
import { guides } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async({ params }: { params: Promise<{id: string}> }) => {

    const id = (await params).id;

    const [guideDetails] = await db.select().from(guides).where(eq(guides.id, id)).limit(1);
    if(!guideDetails) {
        redirect('/404');
    }

    return (
        <>
            <GuideOverview
                {...guideDetails}
            />
            <div className='guide-details'>
                <div className="flex-[1.5]">
                    <section className='flex flex-col gap-7'>
                        {guideDetails.videoUrl && (
                            <>
                                <h3>Video Guide</h3>
                                <GuideVideo
                                    uri={guideDetails.videoUrl}
                                />
                            </>
                        )}
                    </section>
                    <section className='mt-10 flex flex-col gap-7'>
                        <h3>Summary</h3>
                        <div className='space-y-5 text-xl text-light-100'>
                            {guideDetails.description.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}

export default Page;