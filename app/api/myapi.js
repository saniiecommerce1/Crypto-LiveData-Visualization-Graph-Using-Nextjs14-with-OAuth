import { NextResponse } from "next/server"

export const config = {
 runtime: 'edge', // for Edge API Routes only
 unstable_allowDynamic: [
   './Db/db.js', // allows a single file
   '/lib/auth.js', // allows a single file
   '/node_modules/function-bind/**', // use a glob to allow anything in the function-bind 3rd party module
 ],
}

const handler = (req)=>{
 return NextResponse.json({name: 'I m an Edge Function'})
}

export default handler;