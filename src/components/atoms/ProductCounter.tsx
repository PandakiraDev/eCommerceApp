"use client";

// import {
//   useParams,
//   usePathname,
//   useRouter,
//   useSearchParams,
//   useSelectedLayoutSegment,
//   useSelectedLayoutSegments,
// } from "next/navigation";
import { useState } from "react";

export const ProductCounter = ({ children }: { children: React.ReactNode }) => {
  // const router=useRouter()
  // useEffect(()=>{
  //     if(isLoggedIn()){
  //         router.replace('/dashboard')
  //     }
  // },[router])

  //   useParams();
  //   usePathname();
  //   useSearchParams();

  //   useSelectedLayoutSegment();
  //   useSelectedLayoutSegments();

  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        className="border border-slate-200 px-4"
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
      <input
        readOnly
        value={counter}
        className="border border-slate-200 text-center"
      />
      <button
        className="border border-slate-200 px-4"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>
      {counter % 2 === 0 && children}
    </div>
  );
};
