import {
  DotsHorizontalIcon,
  HeartIcon as HeartIconFilled,
} from '@heroicons/react/solid';
import {
  BookmarkIcon,
  ChatIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

function Post({ id, username, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      name: session.user.name,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="border-2 p-5 my-4 rounded-md">
      {/* Header - Post */}
      {session && (
        <div className="flex items-center">
          <Image
            src={session?.user?.image}
            className="rounded-full cursor-pointer"
            width={30}
            height={24}
          />
          <p className="text-sm md:text-lg font-semibold cursor-pointer flex-1 mx-2">
            {session?.user?.name}
          </p>

          <DotsHorizontalIcon className="button" />
        </div>
      )}

      {/* Middle Image section - Post */}
      <img src={img} className="object-cover w-full my-4 rounded-md" />

      {/* Bottom - Post */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center space-x-4">
          <HeartIcon className="button" />
          <ChatIcon className="button" />
          <PaperAirplaneIcon className="button" />
        </div>
        <BookmarkIcon className="button" />
      </div>

      {/* caption */}
      {session && (
        <>
          <p className="text-sm lg:text-base p-5 truncate">
            <span className="font-bold mr-1">
              {session.user.name.toLowerCase().split(' ')}{' '}
            </span>
            {caption}
          </p>

          <form className="flex items-center justify-between p-4">
            <EmojiHappyIcon className="button" />
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="outline-none flex-1 mx-2 px-1 py-2"
              placeholder="Add a comment"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className="font-semibold text-blue-500 disabled:text-gray-500"
              onClick={sendComment}
            >
              POST
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Post;
