import "jquery";
import "textillate";
import React, { useEffect, useRef, useState } from "react";
import _debounce from "lodash/debounce";
import apiHandle from "../services/apiHandle";
import logo from "../../Images/logo.png";
import human from "../../Images/human.png";

const RightDraw = ({ setQuesAnsList, quesAnsList }) => {
  const [userInputData, setUserInputData] = useState("");
  const animatedRef = useRef(null);
  const textFieldRef = useRef(null);

  const handleChange = (e) => {
    setUserInputData(e.target.value);
  };

  const handleClickUserInput = () => {
    const textField = textFieldRef.current;
    if (textField) {
      textField.value = "";
    }
  };

  const debouncedClick = _debounce(handleClickUserInput, 1000);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    debouncedClick();
    try {
      const response = await apiHandle.post("query", {
        query: userInputData,
      });

      setQuesAnsList((prevList) => [
        ...prevList,
        {
          ques: userInputData,
          ans: response,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const animateOptions = {
      in: {
        effect: "fadeIn",
      },
    };
    if (animatedRef.current !== null) {
      window.$(animatedRef.current).textillate(animateOptions);
    }
  }, [quesAnsList, animatedRef]);

  console.log(quesAnsList, "question answer list");

  return (
    <div role="presentation" class="flex h-full flex-col">
      <div class="flex-1 overflow-y-scroll">
        <div class="react-scroll-to-bottom--css-ccsif-79elbk h-full">
          <div class="react-scroll-to-bottom--css-ccsif-1n7m0yu">
            <div class="flex flex-col pb-9 text-sm mt-4">
              {quesAnsList.length ? (
                quesAnsList.map((quesAns) => {
                  return (
                    <>
                      <div
                        class="w-full text-token-text-primary"
                        data-testid="conversation-turn-2"
                      >
                        <div class="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                          <div class="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
                            <div class="flex-shrink-0 flex flex-col relative items-end">
                              <div>
                                <div class="pt-0.5">
                                  <div class="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                    <div class="relative flex">
                                      <img src={human}></img>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="relative flex w-full flex-col lg:w-[calc(100%-115px)]">
                              <div class="font-semibold select-none">You</div>
                              <div class="flex-col gap-1 md:gap-3">
                                <div class="flex flex-grow flex-col max-w-full">
                                  <div
                                    data-message-author-role="user"
                                    data-message-id="aaa26a6e-0f9c-4d06-a521-cd4fdfee7201"
                                    class="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto"
                                  >
                                    <div class="">{quesAns.ques}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full text-token-text-primary pt-4"
                        data-testid="conversation-turn-3"
                      >
                        <div class="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                          <div class="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion">
                            <div class="flex-shrink-0 flex flex-col relative items-end">
                              <div>
                                <div class="pt-0.5">
                                  <div class="gizmo-shadow-stroke flex  items-center justify-center overflow-hidden rounded-full">
                                    <div class="relative p-1 rounded-sm text-white flex items-center justify-center">
                                      <img
                                        src={logo}
                                        style={{ width: "20px" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn">
                              <div
                                class="font-semibold select-none"
                                style={{ fontFamily: "system-ui" }}
                              >
                                ChatGPT
                              </div>
                              <div class="flex-col gap-1 md:gap-3">
                                <div class="flex flex-grow flex-col max-w-full">
                                  <div
                                    data-message-author-role="assistant"
                                    data-message-id="b9be15c3-b77d-4f10-8bd9-3e26727bcd74"
                                    class="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto"
                                  >
                                    <div class="markdown prose w-full break-words dark:prose-invert light">
                                      <p
                                        key={quesAns.ans}
                                        ref={animatedRef}
                                        style={{
                                          color: "#40414f",
                                          fontFamily: "system-ui",
                                        }}
                                      >
                                        {quesAns.ans}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div
                  class="w-full text-token-text-primary pt-4"
                  data-testid="conversation-turn-3"
                >
                  <div class="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                    <div class="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion">
                      <div class="flex-shrink-0 flex flex-col relative items-end">
                        <div>
                          <div class="pt-0.5">
                            <div class="gizmo-shadow-stroke flex  items-center justify-center overflow-hidden rounded-full">
                              <div class="relative p-1 rounded-sm text-white flex items-center justify-center">
                                <img src={logo} style={{ width: "20px" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn">
                        <div
                          class="font-semibold select-none"
                          style={{ fontFamily: "system-ui" }}
                        >
                          ChatGPT
                        </div>
                        <div class="flex-col gap-1 md:gap-3">
                          <div class="flex flex-grow flex-col max-w-full">
                            <div
                              data-message-author-role="assistant"
                              data-message-id="b9be15c3-b77d-4f10-8bd9-3e26727bcd74"
                              class="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto"
                            >
                              <div class="markdown prose w-full break-words dark:prose-invert light">
                                <p
                                  key={2}
                                  ref={animatedRef}
                                  style={{
                                    color: "#40414f",
                                    fontFamily: "system-ui",
                                  }}
                                >
                                  Hey, Welcome to the chatBot how may I help you
                                  ?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full pt-2 md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:w-[calc(100%-.5rem)]">
        <div class="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
          <div class="relative flex h-full flex-1 items-stretch md:flex-col">
            <div class="flex w-full items-center">
              <div class="overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full dark:border-token-border-heavy flex-grow relative border border-token-border-heavy dark:text-white rounded-2xl bg-white dark:bg-gray-800 shadow-[0_0_0_2px_rgba(255,255,255,0.95)] dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)]">
                <textarea
                  id="prompt-textarea"
                  tabindex="0"
                  data-id="root"
                  ref={textFieldRef}
                  rows="1"
                  placeholder="Message Here..."
                  class="m-0 w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                ></textarea>
                <button
                  disabled=""
                  onClick={handleSendMessage}
                  class="absolute md:bottom-3 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 dark:disabled:bg-white disabled:bg-black disabled:opacity-10 disabled:text-gray-400 enabled:bg-black text-white p-0.5 border border-black rounded-lg dark:border-white dark:bg-white bottom-1.5 transition-colors"
                  data-testid="send-button"
                >
                  <span class="" data-state="closed">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="text-white dark:text-black"
                    >
                      <path
                        d="M7 11L12 6L17 11M12 18V7"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
          <span>
            ChatBox can make mistakes. Consider checking important information.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightDraw;
