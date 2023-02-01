import Image from 'next/image';
import logo from '../public/logo.png';
import logosm from '../public/logo-sm.png';
import {
  HeartIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '@/atoms/modalAtom';

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 px-3 py-2 shadow-md bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        {/* Left - Section */}
        <div
          className="flex items-center justify-between"
          onClick={() => router.push('/')}
        >
          <div className="hidden lg:inline-flex cursor-pointer">
            <Image src={logo} height={140} width={140} />
          </div>
          <div className="lg:hidden flex-shrink-0 cursor-pointer">
            <Image src={logosm} height={34} width={34} />
          </div>
        </div>

        {/* Middle - Section */}
        <div className="flex items-center px-2 lg:py-2 py-1 bg-gray-200 rounded-md space-x-3 w-[50%] lg:w-[40%] focus-within:shadow-md focus-within:bg-gray-100 mx-3">
          <div>
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="search"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Right section */}
        {session ? (
          <div className="flex items-center text-gray-600 space-x-4">
            <HomeIcon
              onClick={() => router.push('/')}
              className="header-button hidden md:flex"
            />
            <PaperAirplaneIcon className="header-button hidden md:flex" />
            <PlusCircleIcon
              className="header-button"
              onClick={() => setOpen(true)}
            />
            <HeartIcon className="header-button hidden md:flex" />
            <Image
              src={session?.user?.image}
              className="rounded-full cursor-pointer"
              width={30}
              height={24}
              onClick={signOut}
            />
          </div>
        ) : (
          <button className="font-semibold text-blue-500" onClick={signIn}>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
