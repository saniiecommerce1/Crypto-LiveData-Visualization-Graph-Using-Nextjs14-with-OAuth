import Link from "next/link"

export default function NotFound(){
return(
<>
<h2 className="mb-5">The requested page is not found please go back to Home page</h2>
<div className="mb-5"><Link href='/'>Back to Home</Link></div>
</>
)
}