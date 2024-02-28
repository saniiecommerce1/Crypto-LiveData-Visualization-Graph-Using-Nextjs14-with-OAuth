import { auth } from "@/lib/auth";
import { handleLogout } from "@/lib/action";
import Link from "next/link";

const GetSession = async () => {

 const session = await auth();
console.log(session, "Session");

return (
<>
<Link href='/register'>Sign Up</Link>
{session?.user? (
<>
{session.user?.isAdmin && <Link href="/admin">Admin</Link>} 

<form action={handleLogout}>
<button>Logout</button>
</form>
</>
) : (
<>
<Link href="/login">Login</Link>
</>
)}
</>
);
};

export default GetSession;
