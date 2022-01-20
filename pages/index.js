export default function Home({ query }) {
  return <pre>{JSON.stringify(query, null, 2)}</pre>;
}

/** @type {import('next').GetServerSideProps} */
export const getServerSideProps = (context) => {
  if (context.query.clear) {
    console.log("OKEY");
    context.res.writeHead(302, "Found", {
      Location: "/?cleared=true",
    });
    return {};
  }

  return {
    props: {
      query: context.query,
    },
  };
};
