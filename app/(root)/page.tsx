import GuideList from "@/components/GuideList";
import GuideOverview from "@/components/GuideOverview";
import { db } from "@/database/drizzle";
import { guides } from "@/database/schema";
import { desc } from "drizzle-orm";


const Home = async() => {

  const guidesList = (await db.select().from(guides).limit(13).orderBy(desc(guides.createdAt))) as Guide[];

   return (
    <>
      <GuideOverview {...guidesList[0]} showBtn={true}/>
      <GuideList
        title="Latest Guides"
        guides={guidesList.slice(1)}
        containerClassName="mt-28"
      />
    </>
)
}

export default Home
