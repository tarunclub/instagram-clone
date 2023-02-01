import { useSession } from 'next-auth/react';
import React from 'react';
import MiniProfile from './MiniProfile';
import Posts from './Posts';

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && '!grid-cols-1 !max-w-3xl'
      }`}
    >
      {/* Left Section */}
      <section className="col-span-2">
        <Posts />
      </section>
      {/* Right Section */}
      {session && (
        <section className="hidden lg:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <MiniProfile />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
