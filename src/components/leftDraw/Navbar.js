import React from "react";

const Navbar = ({ chatName }) => {
  return (
    <>
      <div className="flex flex-col gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm">
        <div className="relative mt-5">
          <div data-projection-id="336">
            <h3
              class="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all bg-gray text-gray"
              style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}
            >
              Today
            </h3>
          </div>
          <ol>
            <li class="relative z-[15]" data-projection-id="526">
              <div class="group relative rounded-lg active:opacity-90 bg-token-surface-secondary">
                <a href="#" class="flex items-center gap-2 p-2">
                  <div
                    class="relative grow overflow-hidden whitespace-nowrap text-white"
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {chatName}
                    <div class="absolute bottom-0 right-0 top-0 bg-gradient-to-l to-transparent w-8 from-black from-0% group-hover:w-20 group-hover:from-token-surface-primary group-hover:from-60%"></div>
                  </div>
                </a>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Navbar;
