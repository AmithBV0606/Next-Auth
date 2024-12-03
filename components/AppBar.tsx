// "use client"
// import { useRouter } from "next/navigation";

// export const AppBar = () => {
//     const router = useRouter()
//      return(
//         <div className="bg-black text-white">
//             <button
//                 onClick={() => {
//                     router.push("/api/auth/signin")
//                 }}
//                 className="bg-blue-600 m-4 px-4 py-2 rounded-lg"
//             >
//                 Signin
//             </button>
//         </div>
//      );
// }

"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const AppBar = () => {
    const session = useSession();
  return (
    <div className="bg-black text-white flex justify-between items-center">
      <div>
        <button
          onClick={() => signIn()}
          className="bg-green-600 m-4 px-4 py-2 rounded-lg"
        >
          Signin
        </button>
        <button
          onClick={() => signOut()}
          className="bg-red-500 m-4 px-4 py-2 rounded-lg"
        >
          Sign out
        </button>
      </div>

      <div className="bg-blue-500 p-2 rounded-lg mr-6">
        <h2>{JSON.stringify(session.data)}</h2>
      </div>
    </div>
  );
};
