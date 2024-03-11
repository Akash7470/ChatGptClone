  import "jquery";
  import "textillate";
  import React, { useEffect, useRef, useState } from "react";
  import ReactMarkdown from "react-markdown"
  import _debounce from "lodash/debounce";
  import apiHandle from "../services/apiHandle";
  import logo from "../../Images/logo.png";
  import human from "../../Images/human.png";
  import bot from "../../Images/bot.png"
  import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
  import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
  import io from 'socket.io-client';
  import { LuRefreshCcw } from "react-icons/lu";

  const RightDraw = () => {
    const [userInputData, setUserInputData] = useState("");
    const [quesAnsList, setQuesAnsList] = useState([])
    const [buttonDisabled, setButtonDisable] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    // const socketRef = useRef(null);
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
      if (event.key === "Enter" && event.shiftKey) {
        setUserInputData((prevValue) => prevValue + "\n");
      } else if (
        event.keyCode === 13 ||
        event.which === 13 ||
        event.key === "Enter"
      ) {
        handleSendMessage();
      }
    };

    const handleSendMessage = async () => {
      debouncedClick();
      try {
        const response = await apiHandle.post("/query", {
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
      // if (socketRef.current) {
      //   socketRef.current.emit('query', { query: userInputData });
      // }
    };

    // useEffect(() => {
    //   const socket = io('http://localhost:5005');
    //   socketRef.current = socket;
    //   socket.on('connect', () => {
    //     console.log('Connected to server');
    //   });
    //   socket.on('response', (response) => {
    //     setQuesAnsList((prevRes) =>
    //       [...prevRes, { ques: userInputData, ans: response }]
    //     )
    //     animatedRef.current.scrollIntoView({ behavior: 'smooth' })
    //   });

    //   return () => {
    //     socket.disconnect();
    //   };
    // }, []);

    useEffect(() => {
      const animateOptions = {
        in: {
          effect: "fadeIn",
          delayScale: .25,
        // duration:"1s",
          
        },
        
        minDisplayTime: 2000
      };
      if (animatedRef.current !== null) {
        window.$(animatedRef.current).textillate(animateOptions);
      }
    }, [quesAnsList, animatedRef]);

    console.log(quesAnsList, "answer:----");
    
    return (
      <div role="presentation" class="h-full grid place-items-center ">
        <div className="border border-solid rounded-xl ">
          <div className="border border-solid rounded-xl flex justify-between items-center gap-[50vw] p-4">
            <div className="flex gap-2 items-center">
              <img className="w-12" src={bot} alt="" />
              <h1 className="text-xl font-semibold text-gray-500 font-sans">Chat Bot</h1>
            </div>
            <a href="/" className="text-gray-500 font-sans" ><LuRefreshCcw /></a>
          </div>

          <div class="flex overflow-y-scroll h-[66vh]">
            <div class="w-full h-full">
              <div class="">
                <div class="flex flex-col pb-9 text-sm ">
                  {quesAnsList.length ? (
                    quesAnsList.map((quesAns, index) => {
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
                                        class="min-h-[20px] text-message flex flex-col items-start gap-3 break-words [.text-message+&amp;]:mt-5 overflow-x-auto"
                                      >
                                        <div class="markdown prose w-full break-words dark:prose-invert light" style={{
                                          color: "#40414f",
                                          fontFamily: "system-ui",
                                        }}>{quesAns.ques}</div>
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
                                    PandaBOT
                                  </div>
                                  <div class="flex-col gap-1 md:gap-3">
                                    <div class="flex flex-grow flex-col max-w-full">
                                      <div
                                        data-message-author-role="assistant"
                                        data-message-id="b9be15c3-b77d-4f10-8bd9-3e26727bcd74"
                                        class="min-h-[20px] text-message flex flex-col items-start gap-3 break-words [.text-message+&amp;]:mt-5 overflow-x-auto"
                                      >
                                        <div class="markdown prose w-full break-words dark:prose-invert light">
                                          {/* <div className="border border-solid border-black w-full bg-[#2f2f2f] rounded-xl">
                                            <div className="flex justify-between p-3">
                                              <h1 className="text-slate-400 cursor-pointer border border-solid pl-3 pr-3 py-1 rounded-xl">#bash</h1>
                                              <p className="text-slate-400 cursor-pointer border border-solid pl-3 pr-3 py-1 rounded-xl">Copy code</p>
                                            </div>
                                            <SyntaxHighlighter showLineNumbers={true} language="javascript" style={atomDark}>
                                              {`// Function to compute the product of p1 and p2\nfunction myFunction(p1, p2) {
                                  return p1 * p2;
                                      }`}
                                            </SyntaxHighlighter>
                                          </div> */}
                                          <div className="chat-container">
                                          
                                            {/* <p
                                          key={quesAns.ans}
                                          ref={animatedRef}
                                          style={{
                                            color: "#40414f",
                                            fontFamily: "system-ui",
                                          }}> */}
                                          <div className="chat-box">
                                          <ReactMarkdown>{String(quesAns.ans)}</ReactMarkdown>
                                          {/* </p> */}
                                          </div>
                                          </div>
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
                              PandaBOT
                            </div>
                            <div class="flex-col gap-1 md:gap-3">
                              <div class="flex flex-grow flex-col max-w-full">
                                <div
                                  data-message-author-role="assistant"
                                  data-message-id="b9be15c3-b77d-4f10-8bd9-3e26727bcd74"
                                  class="min-h-[20px] text-message flex flex-col items-start gap-3 break-words [.text-message+&amp;]:mt-5 overflow-x-auto"
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
          <div class="w-[100vw] pt-2 md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:w-[calc(100%-.5rem)]">
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
                      class="m-0 w-full resize-none border-0 bg-transparent py-[10px] focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    ></textarea>
                    <button
                      disabled={buttonDisabled}
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
      </div>
      // <iframe style={{height:"100%",width:"100vw"}} frameBorder="0" 
      // src="https://widget.writesonic.com/CDN/index.html?service-base-url=https://api.botsonic.ai&token=867bc96b-48f3-4fda-82f9-53eebce79427&base-origin=https://bot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https://bot.writesonic.com/57933411-c949-40bd-99f1-7c6eb521ba52?t=connect&workspace_id=bbc9e9de-69d6-4b74-b7e5-eb8ffcfcaf65" >
      // </iframe>
    );
  };

  export default RightDraw;




  {/* <div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">Noteworthy technology acquisitions 2021</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 opacity-20">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
          <span class="sr-only">Loading...</span>
      </div>
  </div> */}
