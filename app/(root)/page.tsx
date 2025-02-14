import GuideList from "@/components/GuideList";
import GuideOverview from "@/components/GuideOverview";
import { sampleGuides } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";


const Home = async() => {

  /*
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2))
  */
   return (
    <>
      <GuideOverview {...sampleGuides[0]} />
      <GuideList
        title="Latest Guides"
        guides={sampleGuides}
        containerClassName="mt-28"
      />
    </>
)
}

export default Home
