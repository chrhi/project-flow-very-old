/* eslint-disable */
import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/header/Header";
import { useEffect, useState } from "react";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import {  getUserMetadata } from "~/lib/MetaData";
import { AccessGivePopUp } from "~/components/popup/AccessGivePopUp";

type IpiData = {
  user_name : string , 
  role : string ,
  id :  string,
  email : string,
  photo : string

}

const Page: NextPage = () => {
  
  const set_loading = loading_Reducer(state => state.set_isLoading)

  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])

 
  return (
    <>
      <Head>
      <title>ProjectFlow</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main id="container1"  className=" custopn-page-height  items-center flex flex-col w-full bg-gray-50 ">

        {/* this is the title section */}
      <div className="w-full h-[70px] mt-4 flex items-start justify-center flex-col p-12 ">
      <p className="text-md text-gray-700 ">Team</p>
      <h1 className="text-2xl text-gray-900 font-semibold " >Manage and grow your team</h1>
      </div>
      {/* this is the table section */}
      <div className="w-full max-w-7xl my-4 bg-white rounded-lg h-fit min-h-[300px] ">
          {/* this is the header of the table */}
          <div className="w-full h-[50px] flex justify-start p-4 items-start">
          <h3 className="text-xl text-gray-900 " >Team Members ({commingData.length})</h3>
          </div>
          <div className="w-full h-[40px] flex items-center ">
              <div className="w-[40%] pl-8">
               <p className="text-md text-gray-400"> Name</p>
              </div>
              <div className="w-[40%]">            
                <p className="text-md text-gray-400" > Email</p>
              </div>
              <div className="w-[10%]">            
                <p className="text-md text-gray-400" >  status</p>
              </div>
              <div className="w-[10%]">                
                <p className="text-md text-gray-400" >  Action</p>
              </div>
          </div>
          <div className="w-full h-[40px] flex items-center ">
                <div className="w-[40%] pl-8 flex items-center gap-x-4">
                  <img src={""} alt="picture of user " className="w-[40px] h-[40px] rounded-[50%]" />
                 <p className="text-md text-gray-900"> test</p>
                </div>
                <div className="w-[40%]">            
                  <p className="text-md text-gray-900" > test</p>
                </div>
                <div className="w-[10%] pr-4 flex justify-start">            
                 {/* <Status color="bg-green-500" name ="Active"  /> */}
                </div>
                <div className="w-[10%]">                
                   <AccessGivePopUp />
                </div>
            </div>
          {
            commingData.map((item , index) => {
              console.log(item)
              return (
                <div className="w-full h-[40px] flex items-center ">
                <div className="w-[40%] pl-8 flex items-center gap-x-4">
                  <img src={item?.photo} alt="picture of user " className="w-[40px] h-[40px] rounded-[50%]" />
                 <p className="text-md text-gray-900"> {item.user_name }</p>
                </div>
                <div className="w-[40%]">            
                  <p className="text-md text-gray-900" > {item.email }</p>
                </div>
                <div className="w-[10%] pr-4 flex justify-start">            
                 {/* <Status color="bg-green-500" name ="Active" key={index + 234} /> */}
                </div>
                <div className="w-[10%]">                
                  
                </div>
            </div>
              )
            })
          }
      </div>
      </main>
    </>
  );
};

export default Page;