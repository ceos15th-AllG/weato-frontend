/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Head from 'next/head';
import Link from 'next/link';

import { text_white } from '@styles/Colors';

import { Display1, Headline2 } from '@styles/FontStyle';

import Card from '@common/CardContainer';
import Button from '@common/ButtonContainer';

import banner from '@public/main_banner.png';

const HomeLayout = styled.div`
  margin-bottom: 4px;
`;

const BannerLayout = styled.div`
  width: 1920px;
  height: 421px;

  background-image: url(${banner.src});
  background-size: contain;
`;

const BannerContent = styled.div`
  position: relative;

  right: 300px;
  top: 140px;

  height: 184px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const BannerText = styled.article`
  text-align: right;

  color: ${text_white};
`;

const HomeContent = styled.main`
  margin: 0px 300px;
  padding-top: 90px;
`;

const CardHeader = styled.header`
  margin-bottom: 60px;
`;

const CardRow = styled.div`
  display: flex;

  justify-content: space-between;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 60px 0px 96px;
`;

export default function Home() {
  return (
    <>
      <HomeLayout>
        <Head>
          <title>Weato Title</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <BannerLayout>
            <BannerContent>
              <BannerText
                css={[
                  Headline2,
                  css`
                    line-height: 42px;
                  `,
                ]}
              >
                아토피와의 긴 여정,
                <br />
                이제는 위아토와 함께해요!
              </BannerText>
              <Button text={'바로 구독하기'} btnType={'4'} href="/login" />
            </BannerContent>
          </BannerLayout>

          <HomeContent>
            <CardHeader css={Display1}>이주의 아토레터</CardHeader>
            <CardRow
              css={css`
                margin-bottom: 40px;
              `}
            >
              <Card
                text={
                  '샤워부터 시작하는 아토피 관리 샤워부터 시작하는 시작하는 시작하는 시작하는 시작하는'
                }
                date={'2022.07.21'}
                tag={'약품'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'수면'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'세면'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'음식'}
              />
            </CardRow>
            <CardRow>
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'환경'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'기타'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'기타'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'기타'}
              />
            </CardRow>
            <ButtonRow>
              <Button text={'더보기'} btnType={'4'} />
            </ButtonRow>

            <CardHeader css={Display1}>가장 많은 스크랩</CardHeader>
            <CardRow
              css={css`
                margin-bottom: 40px;
              `}
            >
              <Card
                text={
                  '샤워부터 시작하는 아토피 관리 샤워부터 시작하는 시작하는 시작하는 시작하는 시작하는'
                }
                date={'2022.07.21'}
                tag={'약품'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'수면'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'세면'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'음식'}
              />
            </CardRow>
            <CardRow>
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'환경'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'기타'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'기타'}
              />
              <Card
                text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
                date={'2022.07.21'}
                tag={'기타'}
              />
            </CardRow>
            <ButtonRow>
              <Button text={'더보기'} btnType={'4'} />
            </ButtonRow>
          </HomeContent>
        </div>
      </HomeLayout>
    </>
  );
}
