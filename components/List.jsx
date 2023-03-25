import data from "../data.json";
import ReactPaginate from "react-paginate";
import { BiBed } from "react-icons/bi";
import { MdOutlineKitchen, MdShower } from "react-icons/md";
import { useState } from "react";

function List() {
  const [houses, setHouses] = useState(data.slice(0, 18));
  const [pageNumber, setPageNumber] = useState(0);
  const housesPerPage = 6;
  const pagesVisited = pageNumber * housesPerPage;
  const displayHouses = houses
    .slice(pagesVisited, pagesVisited + housesPerPage)
    .map((item) => {
      return (
        <div
          className="flex flex-col rounded-t-2xl  rounded-b-2xl shadow-lg  bg-white text-[#18191F] "
          key={item.id}
        >
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.id}
              className=" w-full h-48  object-cover  transform transition duration-1000 hover:scale-125 rounded-t-2xl "
            />
          </div>
          <div>
            <p className="px-6 pt-1 text-xl sm:text-base font-bold">
              {item.title}
            </p>
            <p className="px-6 pt-2 text-sm sm:text-xs text-[#818181]">
              {item.subtitle}
            </p>
            <p className="px-6 pt-1 text-lg sm:text-base text-[#F4511E] font-bold">
              {item.price}
            </p>
            <div className="flex mx-auto font-bold items-center justify-around pb-2 pt-2 text-black">
              <p className="flexutils">
                <BiBed size={15} />
                <span className="text-base sm:text-xs">4</span>
              </p>
              <p className="flexutils">
                <MdShower size={15} />
                <span className="text-base sm:text-xs">2</span>
              </p>
              <p className="flexutils">
                <MdOutlineKitchen size={15} />
                <span className="text-base sm:text-xs">3</span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(houses.length / housesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="bg-[#E5E5E5] lg:px-24 px-6  pb-8">
        <div className="text-3xl headings">
          <p className="relative sm:after:w-[5%] text-2xl underliner">
            List of Properties
          </p>
        </div>
        <div className=" grid sm:grid-cols-3 grid-flow-row mx-auto gap-5  max-w-screen-md">
          {displayHouses}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination-container"}
            previousLinkClassName={"pagination-previous"}
            nextLinkClassName={"pagination-next"}
            disabledClassName={"disabled"}
            activeClassName={"pagination-active"}
            pageClassName={"page-name"}
          />
        </div>
      </div>
    </>
  );
}

export default List;
