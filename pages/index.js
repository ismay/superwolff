import Image from "@graphcms/react-image";
import { gql } from "graphql-request";
import Head from "next/head";
import T from "prop-types";
import client from "../client";
import BoxShadow from "../components/box-shadow";
import Details from "../components/details";
import { Cell, Grid } from "../components/grid";
import UndecoratedLink from "../components/undecorated-link";

export default function Home({ works }) {
  return (
    <>
      <Head>
        <title>Superwolff</title>
        <meta
          content="The work of visual artist Superwolff."
          name="description"
        />
      </Head>
      <Grid>
        {works.map((work) => (
          <Cell key={work.id} columns={2}>
            <UndecoratedLink href={`/work/${work.slug}`} title={work.title}>
              <BoxShadow>
                <Image
                  alt={work.title}
                  image={{
                    handle: work.thumbnail.handle,
                    height: work.thumbnail.height,
                    width: work.thumbnail.width,
                  }}
                  title={work.title}
                />
              </BoxShadow>
              <Details date={work.releasedAt} title={work.title} />
            </UndecoratedLink>
          </Cell>
        ))}
      </Grid>
    </>
  );
}

Home.propTypes = {
  works: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      releasedAt: T.string.isRequired,
      slug: T.string.isRequired,
      thumbnail: T.shape({
        handle: T.string.isRequired,
        height: T.number.isRequired,
        width: T.number.isRequired,
      }).isRequired,
      title: T.string.isRequired,
    })
  ).isRequired,
};

export async function getStaticProps() {
  const { works } = await client.request(gql`
    query getWorks {
      works(orderBy: releasedAt_DESC) {
        id
        title
        slug
        releasedAt
        thumbnail {
          handle
          width
          height
        }
      }
    }
  `);

  return {
    props: { works },
    revalidate: 3600,
  };
}
