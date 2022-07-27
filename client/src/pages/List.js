import { useEffect, useState } from "react"
import addressBookServices from "../services"

const List = () => {
  const [peopleData, setPeopleData] = useState({ isError: false, data: [] })

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { data, isError },
      } = await addressBookServices.getPeopleData()
      setPeopleData({ ...peopleData, isError, data })
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          {peopleData?.data?.map((item) => (
            <tr
              key={item.name}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="py-4 px-6">{item.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
