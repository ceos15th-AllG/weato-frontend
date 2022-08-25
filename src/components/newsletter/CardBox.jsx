import styled from '@emotion/styled';

import Card from '@common/CardContainer';

const Layout = styled.div`
  width: 1320px;

  display: grid;
  grid: '. . . .';
  column-gap: 20px;
  row-gap: 40px;
`;

export default function CardBox(props) {
  const { data } = props;

  return (
    <Layout>
      {data.map(({ id, title, createdAt, tagType }, index) => (
        <Card
          key={index}
          text={title}
          date={createdAt}
          tag={tagType}
          href={`/newsletter/${id}`}
        />
      ))}
    </Layout>
  );
}
