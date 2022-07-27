import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"

import addressBookServices from "../services"

const Search = () => {
  const [value, setValue] = useState("")
  const [data, setData] = useState(null)
  const searchHandler = async () => {
    try {
      const {
        data: { data },
      } = await addressBookServices.searchData(value)
      setData(data)
    } catch (err) {
      console.log("err", err)
    }
  }

  return (
    <>
      <div className="flex justify-center	items-center mt-8">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={
            "w-full pt-2.5 pb-2.5 mb-2 border-2 border-[#338def] outline-[0px]"
          }
          label="Search"
        />
        <Button
          type={"button"}
          onClick={searchHandler}
          className={
            "px-8 ml-6 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium text-center"
          }
          text={"Search"}
        />
      </div>
      {data?.length === 0 && <h2 className="text-center">No results!</h2>}
      {data?.length > 0 && (
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-2 border-[#3b82f6] text-left p-2">Name</th>
              <th className="border-2 border-[#3b82f6] text-left p-2">
                Number
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item.name + index}>
                <td className="border-2 border-[#3b82f6] text-left p-2">
                  {item.name}
                </td>
                <td className="border-2 border-[#3b82f6] text-left p-2">
                  {item.number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Search
