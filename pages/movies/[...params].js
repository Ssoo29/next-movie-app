
export default function Detail({ params }) {
  const [title, id] = params || [];
  return <div>{title || "Loading..."}</div>;
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
