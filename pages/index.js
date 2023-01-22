import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "hadith" });

  return {
    props: {
      hadiths: res.items,
    },
  };
}

export default function Home({ hadiths }) {
  //   console.log("Hadith: " + JSON.stringify(hadiths.items[0].fields.arabic_matn, null, 4));
  return (
    <>
      <div>Hello Contentful process</div>
      <div className="text-[24px] leading-8 text-right tracking-wide">
        {" "}
        Hadiths go here
        {hadiths.map((hadith) => {
          return <p className="my-4 font-serif" key={hadith.sys.id}>{hadith.fields.arabic_matn}</p>;
        })}
      </div>
    </>
  );
}
