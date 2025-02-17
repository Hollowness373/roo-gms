import { auth } from "@/auth";
import GuideList from "@/components/GuideList";
import GuideOverview from "@/components/GuideOverview";
import { db } from "@/database/drizzle";
import { guides } from "@/database/schema";
import { desc } from "drizzle-orm";


const Home = async() => {

  const session =  await auth();

  const guidesList = (await db.select().from(guides).limit(13).orderBy(desc(guides.createdAt))) as Guide[];

  // userId={session?.user?.id as string}

   return (
    <>
      <GuideOverview {...guidesList[0]}/>
      <GuideList
        title="Latest Guides"
        guides={guidesList.slice(1)}
        containerClassName="mt-28"
      />
    </>
)
}

export default Home
