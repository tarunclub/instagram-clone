import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-4 ml-6 w-full">
      <Image
        src={session?.user?.image}
        className="rounded-full h-10 cursor-pointer"
        width={40}
        height={34}
      />
      <div className="flex flex-col flex-1 mx-4">
        <p className="text-sm md:text-md font-semibold cursor-pointer flex-1 mx-2">
          {session?.user?.email}
        </p>
        <p className="text-sm mx-2">Welcome to Instagram</p>
      </div>
      <button className="font-semibold text-blue-500" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}

export default MiniProfile;
