import React, { useEffect, useState } from "react";
import plane from "../../Images/airplane.gif";
import ship from "../../Images/container-ship.gif";
import truck from "../../Images/pickup-truck.gif";
import { Button } from "@mui/material";
import world from "../../Images/dotted-world-map-gray-color-vector-removebg-preview.png";
import { AxiosInstance } from "../../Config/API/AxiosInstance";
import Card from "../Card";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [todo, setTodo] = useState([]);

  const UserData = async () => {
    try {
      const response = await AxiosInstance.get("user");
      console.log(response);
      setUsers(response?.data?.users);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    UserData();
  }, []);

  console.log(users, "users");

  const Todo = async () => {
    try {
      const response = await AxiosInstance.get("todos");
      console.log(response);
      setTodo(response?.data?.todos);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(todo, "todo");
  useEffect(() => {
    Todo();
  }, []);

  const ID = todo.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0
  );
  const UID = todo.reduce(
    (accumulator, currentValue) => accumulator + currentValue.userId,
    0
  );
  const SIDUID = todo.reduce(
    (accumulator, currentValue) => accumulator + currentValue.userId,
    ID
  );
  const MIDUID = todo.reduce(
    (accumulator, currentValue) =>
      accumulator * currentValue.userId,ID
  )

  return (
    <>
      {/* Part 1 */}
      <div className="flex  text-white  justify-center bg-[#060b59] lg:h-[44rem] h-[25rem]">
        {" "}
        {/*Main div Part 1*/}
        <img
          src={world}
          alt=""
          className=" lg:w-[95%] h-[100%]  brightness-0  "
        />
        <div className="flex absolute  text-white justify-center">
          {" "}
          {/*Main div Part 1*/}
          <div className="flex pt-[12%] flex-col  gap-5 px-5 lg:w-[52rem] ">
            <span className="lg:text-[4rem]  text-3xl font-bold">
              Find Logistic Services
            </span>
            <span className="lg:text-[1.5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
              totam et, quidem repellendus nihil officia, voluptatibus incidunt.
            </span>
            <span className="flex mt-[0.5rem] lg:gap-5 items-center lg:text-lg text-sm ">
              <input
                type="text"
                placeholder="Your ZIP code or City e.g. New York"
                className="lg:h-10  bg-transparent w-full"
              />
              <Button
                variant="contained"
                className="!text-black !bg-[#08efff] lg:!mr-[1.5rem] lg:h-8 h-6  "
              >
                Search
              </Button>
            </span>
            <div className="flex lg:mt-[2rem] justify-around gap-[2rem]">
              <div className=" flex flex-col justify-center items-center gap-5">
                <span className="lg:text-3xl font-bold">
                  {/* <p>
                    {" "}
                    {todo.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.id,
                      0
                    )}
                  </p> */}
                  {ID}
                  <div className="  lg:ml-[1rem] lg:mt-[0.5rem] border border-[#08efff] w-8"></div>
                </span>
                <span className="text-[#636ba5] lg:text-lg text-xs">
                  Sum of ID
                </span>
              </div>
              <div className=" flex flex-col justify-center items-center gap-5">
                <span className="lg:text-3xl font-bold">
                  {/* <p>
                    {" "}
                    {todo.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.userId,
                      0
                    )}
                  </p> */}
                  {UID}
                  <div className="  lg:ml-[1rem] lg:mt-[0.5rem] border border-[#08efff] w-8"></div>
                </span>
                <span className="text-[#636ba5] lg:text-lg text-xs">
                  Sum of User ID
                </span>
              </div>
              <div className=" flex flex-col justify-center items-center gap-5">
                <span className="lg:text-3xl font-bold">
                  {SIDUID}
                  <div className="  lg:ml-[2rem] ml-[0.5rem] lg:mt-[0.5rem] border border-[#08efff] w-8"></div>
                </span>
                <span className="text-[#636ba5] lg:text-lg text-xs">
                  Sum of ID & User ID
                </span>
              </div>
              <div className=" flex flex-col justify-center items-center gap-5">
                <span className="lg:text-3xl font-bold">
                  {SIDUID * 2}
                  <div className="  lg:ml-[1rem] lg:mt-[0.5rem] border border-[#08efff] w-8"></div>
                </span>
                <span className="text-[#636ba5] lg:text-lg text-xs">
                  Multi. of ID & User ID
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        {/*Main div Part 1*/}
      </div>
      {/* Part 2 Cards */}
      <div className="lg:absolute  lg:top-[73%]  max-xl:left-[4%] max-xl:right-[4%] max-2xl:left-[8%] max-2xl:right-[8%] left-[15%] right-[15%]   ">
        {" "}
        {/*Start Absolute div cards */}
        <div className="flex lg:pt-0 pt-10 lg:flex-row  flex-col items-center justify-center lg:gap-[2%] ">
          {" "}
          {/* card 1 */}
          <Card
            icon={plane}
            words={users.map((u) => u.firstName)}
            maxwords={users.length}
          />
        
          {/* card 2  */}
          <Card
            icon={ship}
            words={users.map((u) => u.maidenName)}
            maxwords={users.length}
          />
    
          {/* card 3  */}
          <Card
            icon={truck}
            words={users.map((u) => u.lastName)}
            maxwords={users.length}
          />
          {/*End div card 3 */}
        </div>
        {/*End Main div  Part 2 Cards */}
      </div>{" "}
      {/*End Absolute div cards */}
      {/* Part 3 */}
      <div className="flex lg:flex-row  md:flex-row flex-col p-2 lg:pt-[12rem] pt-[4rem] lg:gap-[6rem] gap-[2rem] justify-center">
        {" "}
        {/*Main div Part 3*/}
        <div className="flex flex-col  lg:w-[26rem] w-[101%]">
          {" "}
          {/*Start div  Column 1 */}
          <span className="text-[8px] text-slate-400  font-semibold uppercase">
            Mission
          </span>
          <span className="font-bold text-xl">About Us</span>
          <span className="text-xs pt-5 lg:w-[26rem]  ">
            Far far away, behind the word mountain far from the countries
            Vokalla and Consonantia, there live the blind text. Seperated they
            live in Bookmarksgrove right at the coast of the Semantics,a large
            language ocean.
          </span>
          <div className="flex pt-5 lg:w-[26rem] ">
            <img src={plane} alt="plane" width={90} />
            <div className="flex flex-col">
              <span className="font-bold text-xl">Air Freight</span>
              <span className="text-xs">
                far far away,behind the word mountain far from the countries
                Vokalla and Consonantia, there live the blind text.
              </span>
            </div>
          </div>
        </div>{" "}
        {/*End div Column 1 */}
        {/* Column 2 */}
        <div>
          {" "}
          {/*Start div  Column 2 */}
          <img
            src="https://img.freepik.com/free-photo/young-man-working-warehouse-with-boxes_1303-16612.jpg?t=st=1694198130~exp=1694198730~hmac=7454b60f961c03b5d5be35672f4a0d47d453108e098f88dfdeba8f72e3f73723"
            alt=""
            // width={500}
            // height={600}
          />
        </div>{" "}
        {/*End div  Column 2 */}
      </div>{" "}
      {/*Main div Part 3*/}
    </>
  );
};

export default Home;
