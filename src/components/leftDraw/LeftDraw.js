import React from "react";
import Navbar from "./Navbar";

const LeftDraw = ({ chatName }) => {
  return (
    <div
      class="dark flex-shrink-0 overflow-x-hidden bg-black"
      data-projection-id="103"
    >
      <div class="h-full w-[260px]">
        <div class="flex h-full min-h-0 flex-col">
          <div class="flex h-full min-h-0 flex-col transition-opacity opacity-100">
            <div class="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <nav
                class="flex h-full w-full flex-col px-3 pb-3.5"
                aria-label="Chat history"
              >
                <div class="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto">
                  <div class="sticky left-0 right-0 top-0 z-20 bg-black pt-3.5">
                    <div
                      class="pb-0.5 last:pb-0"
                      tabindex="0"
                      data-projection-id="105"
                    >
                      <a
                        class="group flex h-10 items-center gap-2 rounded-lg px-2 font-medium hover:bg-token-surface-primary"
                        href="/"
                      >
                        <div class="h-full w-100 flex-shrink-0">
                          <div class="gizmo-shadow-stroke relative flex h-full items-center justify-center text-black">
                            <img
                              src="https://www.assetpanda.com/wp-content/uploads/2020/03/AssetPandaLogoWhiteSVG.svg"
                              width={100}
                            ></img>
                          </div>
                        </div>
                        <div class="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">
                          New chat
                        </div>
                        <div class="flex gap-3">
                          <span class="flex items-center" data-state="closed">
                            <button class="text-token-text-primary">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon-md"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <Navbar chatName={chatName} />
                </div>
                <div class="flex flex-col pt-2 empty:hidden dark:border-white/20">
                  <div class="flex w-full items-center">
                    <div class="grow">
                      <div class="group relative" data-headlessui-state="">
                        <button
                          class="flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100 hover:bg-token-surface-primary group-ui-open:bg-gray-100 group-ui-open:bg-token-surface-primary dark:hover:bg-token-surface-primary dark:group-ui-open:bg-gray-800  dark:group-ui-open:bg-token-surface-primary"
                          id="headlessui-menu-button-:rm0:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <div class="flex-shrink-0">
                            <div class="flex items-center justify-center overflow-hidden rounded-full">
                              <div class="relative flex">
                                <img
                                  alt="User"
                                  loading="lazy"
                                  width="32"
                                  height="32"
                                  decoding="async"
                                  data-nimg="1"
                                  class="rounded-sm"
                                  src="https://s.gravatar.com/avatar/378aeb96b85b2cf6e6c62e8babf3a04f?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fni.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="relative -top-px grow -space-y-px overflow-hidden text-ellipsis whitespace-nowrap text-left text-gray-700 dark:text-white">
                            <div class="font-semibold">Nishant Trivedi</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftDraw;
