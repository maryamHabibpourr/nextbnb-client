"use client";

// import useSearchModal from "@/app/hooks/useSearchModal";
import { searchFilterItems } from "../../staticData/index";

const SearchFilters = () => {
  // const searchModal = useSearchModal();

  return (
    <div
      // onClick={() => searchModal.open('location')}
      className="h-[48px] lg:h-[68px] flex flex-row items-center justify-between border rounded-full"
    >
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          {searchFilterItems.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 ${item.width || ''}`}
            >
              <p className="text-xs font-semibold">{item.title}</p>
              <p className="text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2">
        <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white">
          <svg
            viewBox="0 0 32 32"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentColor",
              strokeWidth: 4,
              overflow: "visible",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
