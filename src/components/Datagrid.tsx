import  { useState,useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker"; 
import { DatepickerType , DateValueType } from "react-tailwindcss-datepicker/dist/types";

import Modal from "./Modal";

type capsuleType = {
    docs: [{
        id:string,
        reuse_count:number,
        water_landings:number,
        land_landings:number,
        last_update:string,
        serial:string,
        status:string,
        type:string,
        launches: {links: {flickr: {original: string[] }} , details: string | null ,date_local: string , name: string}[]
    }],
    totalDocs: number,
    totalPages: number,
    page: number,
    hasNextPage: boolean,
    hasPrevPage: boolean
    
    //launches:[]{name:string}
}

type launchType = {links: {flickr: {original: string[] }} , details: string | null ,date_local: string , name: string}[]


export function DataGrid(){
    const tableHeader = ['Type' , 'Serial' ,  'Water landings' , 'Land landings' , 'Last update', ''];
    const launchTableHeader = ['Name','Date ' , 'Details']
    const url = "http://127.0.0.1:8000/capsules"; 
    const status = [ "active" , "destroyed", "retired",  "unknown"]
    const types = [ "Dragon 1.0" , "Dragon 1.1" , "Dragon 2.0"]

    const [data , setData] = useState<capsuleType>()
    const [launch , setLauch] = useState<launchType>([])
    const [isOpen,setIsOpen] = useState(false)
    const [query,setQuery] = useState({
        "query": {},
        "options": {
            "populate": ["launches"],
            page: 1
        }
    })
    const [value, setValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date().setMonth(12)
        }); 

    const handleValueChange = (newValue: DatepickerType["value"] | null) => {
        setValue(newValue); 
        }    
    
    const previousPage = () => {
        setQuery(
             prevState => ({
                 "query": {
                     ...prevState.query
                 },
                 "options": {
                     ...prevState.options,
                     page: prevState.options.page - 1
                 }
             })
         )
    
     }
   

    const nextPage = () => {
           setQuery(
                prevState => ({
                    "query": {
                        ...prevState.query
                    },
                    "options": {
                        ...prevState.options,
                        page: prevState.options.page + 1
                    }
                })
            )
       
    }

    
    const lauchModal = (launch: launchType) => {
        setLauch(launch)
        setIsOpen(true)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (event: any) => {
        event.preventDefault()
        // console.log("newValue:", value); 
        // console.log(event.target.type.value)
        // console.log(event.target.status.value)
        setQuery(
            prevState => ({
                "query": {
                    ...prevState.query,
                    "date_utc": {
                        "$gte": new Date(value.endDate).toISOString(),
                        "$lte": new Date(value.startDate).toISOString() 
                     },
                     "$or": [
                        {
                            "status": event.target.status.value
                        },
                        {
                            "type": event.target.type.value
                        }
                    ]
                },
                "options": {
                    ...prevState.options,
                   
                }
            })
        )
    }
   
    useEffect(() => {
        const fetchCapsuleData = () => {
         
            fetch(url, {
               method: 'POST',
               //mode: 'cors',
               //credentials: 'include',
               headers: {
                  "Content-Type": "application/json",
                //   "Access-Control-Allow-Origin": "*",
               },
               //credentials: 'same-origin',
               body: JSON.stringify(query),
               redirect: 'follow'
            }).then(response => response.json())
            .then(data => {
                setData(data)
            })
            .catch(function(error){
              console.log("Request failed" , error)
            })
      }
  
        fetchCapsuleData()
    },[query])

    return (
      <div className="container px-4 py-10 mx-auto">
        <p className="font-sora font-bold text-xl text-center mb-6">
          {" "}
          Search for capsule information
        </p>
        <form onSubmit={handleSubmit} className="flex flex-row gap-6 mb-6 justify-center">
          <div className="date--range-filter">
            <Datepicker 
               value={value} 
               onChange={handleValueChange} 
               className="border border-gray-300"
               />
          </div>
          <div >
            <select
              name="type"
              className="font-sora bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option
                selected
                className="font-sora font-normal"
                value=""
                disabled
              >
                Select capsule type{" "}
              </option>

              {types.map((item) => {
                return (
                  <option
                    key={item}
                    className="font-sora font-normal"
                    value={item}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <select
              id="status"
              name="status"
              className="font-sora bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option
                selected
                className="font-sora font-normal"
                value=""
                disabled
              >
                Select status{" "}
              </option>

              {status.map((item) => {
                return (
                  <option
                    key={item}
                    className="font-sora font-normal"
                    value={item}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            type="submit"
            // className="px-3 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            {/* <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg> */}
            Search
          </button>
        </form>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {tableHeader.map((item, index) => {
                    return (
                      <th
                        key={"data--grid--" + index}
                        scope="col"
                        className="font-sora font-medium px-6 py-3"
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {data?.docs.map((item, index) => {
                  return (
                    <tr
                      key={item?.id + "--" + index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4 font-sora font-normal">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 font-sora font-normal">
                        {item.serial}
                      </td>
                      <td className="px-6 py-4 font-sora font-normal">
                        {item.water_landings}{" "}
                        {item.water_landings > 1
                          ? " water landings"
                          : " water landing"}{" "}
                      </td>
                      <td className="px-6 py-4 font-sora font-normal">
                        {item.land_landings}{" "}
                        {item.land_landings > 1
                          ? " land landings"
                          : " land landing"}
                      </td>
                      <td className="px-6 py-4 font-sora font-normal w-[30rem]">
                        {item.last_update}
                      </td>
                      <td className="px-6 py-4 font-sora font-normal">
                        <button
                          type="button"
                          onClick={() => lauchModal(item.launches)}
                          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 font-sora "
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <nav
              className="flex items-center justify-between p-6"
              aria-label="Table navigation"
            >
              <span className="font-sora text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {data?.page}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {data?.totalPages} pages
                </span>
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button
                  className="font-sora flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-none hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={previousPage}
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  disabled={data?.hasPrevPage! ? false : true}
                  //className="cursor-pointer flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                  </svg>
                  Prev
                </button>
                <button
                  //className="cursor-pointer flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  className="font-sora flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-none hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={nextPage}
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  disabled={data?.hasNextPage! ? false : true}
                >
                  Next
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
              {/* <ul className="inline-flex -space-x-px text-sm h-8">
                <li>
                  <button
                    onClick={previousPage}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                    disabled={data?.hasPrevPage! ? false : true}
                    className="cursor-pointer flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </button>
                </li>

                <li>
                  <button
                    onClick={nextPage}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                    disabled={data?.hasNextPage! ? false : true}
                    className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </button>
                </li>
              </ul> */}
            </nav>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col py-10">
            <h2 className="font-sora font-bold text-center text-lg mb-10">
              Details of Capsule Launches
            </h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {launchTableHeader.map((item, index) => {
                      return (
                        <th
                          key={"data--grid--" + index}
                          scope="col"
                          className="font-sora font-medium px-6 py-3"
                        >
                          {item}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {launch?.map((launch, index: number) => {
                    return (
                      <tr
                        key={"launch--" + index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4 font-sora font-normal">
                          <div className="flex flex-row items-center gap-5 mr-6">
                            {launch.links?.flickr.original.length > 0 ? (
                              <img
                                width="200"
                                height="150"
                                src={launch.links?.flickr.original[0]}
                                alt="launch image"
                              />
                            ) : null}
                            <p>{launch.name}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-sora font-normal">
                          {new Date(launch.date_local).toLocaleDateString(
                            "en-us",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </td>
                        <td className="px-6 py-4 font-sora font-normal w-[35rem]">
                          {launch.details === null ? "N/A" : launch.details}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
      </div>
    );
}