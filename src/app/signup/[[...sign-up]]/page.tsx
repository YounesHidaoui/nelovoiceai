// import { SignUp } from '@clerk/nextjs';

import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex items-center justify-center  gap-10 py-5 mt-20 pt-10'>
        <SignUp />
    </div>
  );
}
