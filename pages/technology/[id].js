import React from 'react';
import { useRouter } from "next/router";
import { GetAPost } from '../api/CallAPI';
import Content from '@/component/Content.js/Content';

const Technology = () => {

  const router = useRouter();
  const getPost = GetAPost(router.query.id);

  console.log(getPost)
  {getPost.data && console.log('tech',getPost.data )}

  return (
    <div>
      {getPost.data && <Content data={getPost.data} />} 
    </div>
  )
}

export default Technology