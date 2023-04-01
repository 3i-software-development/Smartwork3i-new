import React from 'react';
import { useRouter } from "next/router";
import { GetAPost } from '../api/CallAPI';
import Content from '@/component/Content.js/Content';

const Careers = () => {

  const router = useRouter();
  const getPost = GetAPost(router.query.id);

  return (
    <div>
      {getPost.data && <Content data={getPost.data} />} 
    </div>
  )
}

export default Careers