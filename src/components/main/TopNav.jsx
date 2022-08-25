/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Modal from '@common/Modal';
import SearchModal from '@search/SearchModal';

import { Subhead3, Subhead4 } from '@styles/FontStyle';
import { main, gray04, text_black } from '@styles/Colors';

import icon_search from '@public/icon_search.png';
import logo_horizontal from '@public/logo_horizontal.png';
// import { loginState } from 'states';

const NavbarLayout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0px 300px;

  width: 100%;
  height: 100px;

  background-color: white;

  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.07);
`;

const NavbarCenterLayout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;

  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0px 300px;

  width: 100%;
  height: 100px;

  background-color: white;

  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.07);
`;

const NavbarContent = styled.ul`
  height: 100%;

  display: flex;
  align-items: center;

  padding: 0px;
`;

const NavbarItem = styled.li`
  width: 92px;
  height: 100%;

  padding-top: 5px;

  ${Subhead4}

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 5px solid
    ${(props) =>
      `${props.currentPath.startsWith(props.menu) ? main : 'transparent'}`};
  color: ${(props) =>
    `${props.currentPath.startsWith(props.menu) ? main : text_black}`};

  transition: 0.3s ease;

  /* &:hover {
    border-bottom: 5px solid ${main};
  } */
`;

const NavbarRightGroup = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRightGroupItem = styled.div`
  margin-right: 64px;

  color: ${gray04};
`;

const TopNav = () => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  // const login = useRecoilValue(loginState);

  // console.log(login);

  const onClickModalOn = () => {
    setIsActive(true);
  };

  if (router.pathname.startsWith(`/signup`)) {
    return (
      <NavbarCenterLayout>
        <Link href="/">
          <a>
            <Image src={logo_horizontal} width={239.5} height={58} alt="" />
          </a>
        </Link>
      </NavbarCenterLayout>
    );
  }

  return (
    <>
      <NavbarLayout>
        <NavbarContent>
          <Link href="/">
            <a>
              <Image src={logo_horizontal} width={239.5} height={58} alt="" />
            </a>
          </Link>
          <NavbarItem
            menu={'/newsletter'}
            currentPath={router.pathname}
            css={css`
              margin-left: 95px;
            `}
          >
            <Link href="/newsletter">
              <a>뉴스레터</a>
            </Link>
          </NavbarItem>
          <NavbarItem
            menu={'/community'}
            currentPath={router.pathname}
            css={css`
              margin-left: 130px;
            `}
          >
            <Link href="/community">
              <a>커뮤니티</a>
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarRightGroup>
          <NavbarRightGroupItem css={Subhead3}>
            <Link href="/login">
              <a>회원가입 / 로그인</a>
            </Link>
          </NavbarRightGroupItem>
          <div onClick={onClickModalOn}>
            <Image src={icon_search} width="34" height="35.02" alt="" />
          </div>
        </NavbarRightGroup>
      </NavbarLayout>

      <Modal active={isActive}>
        <SearchModal setIsActive={setIsActive} router={router} />
      </Modal>
    </>
  );
};

export default TopNav;
