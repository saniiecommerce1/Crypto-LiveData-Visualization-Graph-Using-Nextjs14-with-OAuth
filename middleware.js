import {auth} from './lib/auth'
import { NextResponse } from "next/server";

export default auth((req) => {

  const url = req.nextUrl
  const isLoggedIn = !!req.auth  //in case of null convert to boolean
  
  // console.log('LoggedIn: ' , isLoggedIn)
  // console.log('Req.Auth: ' , req.auth)
  // console.log(url.pathname, 'URL')
  
  const isOnAdminPanel = url?.pathname.startsWith('/admin')
  const isOnSearch = url?.pathname.startsWith('/search')
  const isOnLogin = url?.pathname.startsWith('/login')




  // if (!isLoggedIn){return null}
  

  if (isOnAdminPanel && !req.auth?.user.isAdmin){
    console.log('User not Admin')
    return NextResponse.redirect(new URL('/', url))
  }

  if (isOnSearch && !isLoggedIn){
    console.log('User Unauthenticated and goto search')
    return NextResponse.redirect(new URL('/login', url))
  }

})

//auth call when see matcher
export const config = {
  matcher: ['/admin', '/search', "/((?!api|_next/static|_next/image|favicon.ico).*)"],

};

