import React, { useState } from "react"
import { produce } from "immer"
import { lastItemofArr } from "../utils"
// Components
import Layout from "./Layout"
import Input from "../components/Input"
import Button from "../components/Button"
import Modal from "../components/Modal"

import addressBookServices from "../services"

const Home = () => {
  const [people, setPeople] = useState([{ id: 1, name: "", number: "" }])
  const [error, setError] = useState({ value: false, text: "" })

  const formHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await addressBookServices.createData({ people })
      if (data.isError) {
        setError({
          ...error,
          value: true,
          text: data.message,
        })
        return
      }
      setPeople([{ id: 1, name: "", number: "" }])
    } catch (error) {
      console.log("err", error)
    }
  }

  const closeModal = () => {
    setError({ text: "", value: false })
  }

  const inputChangeHandler = (index, value, property) => {
    setPeople((currentPeople) =>
      produce(currentPeople, (v) => {
        v[index][property] = value
      })
    )
  }

  const addPersonHandler = () => {
    setPeople((currentPeople) => [
      ...currentPeople,
      {
        id: lastItemofArr(currentPeople).id + 1,
        name: "",
        number: "",
      },
    ])
  }

  return (
    <Layout>
      <form className="w-full" onSubmit={formHandler}>
        {people.map((item, index) => (
          <React.Fragment key={item.id}>
            <Input
              onChange={(event) =>
                inputChangeHandler(index, event.target.value, "name")
              }
              value={item.name}
              className={
                "w-full pt-2.5 pb-2.5 mb-2 border-2 border-[#50d71f] outline-[0px]"
              }
              label="Name"
            />
            <Input
              onChange={(event) =>
                inputChangeHandler(index, event.target.value, "number")
              }
              value={item.number}
              className={
                "w-full pt-2.5 pb-2.5 mb-2 border-2 border-[#50d71f] outline-[0px]"
              }
              label="Phone Number"
            />
          </React.Fragment>
        ))}
        <Button
          className={"w-full py-2 text-white flex justify-center bg-[#50d71e]"}
          type="submit"
          text={"Submit"}
        />
        {lastItemofArr(people).id < 50 && (
          <Button
            type={"button"}
            onClick={addPersonHandler}
            className={
              "px-8 mt-3 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium text-center"
            }
            text={"Add Another"}
          />
        )}
      </form>
      {error.value && <Modal text={error.text} closeModal={closeModal} />}
    </Layout>
  )
}

export default Home
