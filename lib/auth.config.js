import { NextResponse } from "next/server"


export const authConfig = {

 
 callbacks:{

  authorized({auth, request}){
   console.log(auth, 'AUTH')
   const user = auth?.user
   const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin')
   const isOnService = request.nextUrl?.pathname.startsWith('/search')
   const isOnLogin = request.nextUrl?.pathname.startsWith('/login')
   
     
   //Only admin access Admin page

   if(isOnAdminPanel && !(user?.isAdmin)){return NextResponse.redirect(new URL('/', request.nextUrl))}  //back t home
   //Only Authenticated User access Service page
   if (isOnService && !(user)) {return false}

   //Only Authenticated User access Search page
   if (isOnLogin && user) {
    
    return NextResponse.redirect(new URL('/search', request.nextUrl))}


   return true;  //false means redirect to login for any domain page/available or not redirect to login
  },
 }
}