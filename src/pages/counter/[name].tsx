import { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';
import React from 'react';
import Container from '@/components/organisms/Counter/container';

const Page: NextPage = ({ name }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      名前は:{name}です
      <br />
      <Container />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  return {
    props: { name: query.name }
  };
};

export default Page;
