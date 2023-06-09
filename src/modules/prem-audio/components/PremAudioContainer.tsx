import { useState } from "react";
import clsx from "clsx";
import Header from "./Header";
import PremImageRightSidebar from "./PremAudioRightSidebar";
import { PremAudioContainerProps } from "../types";
import PremAudioBox from "./PremAudioBox";
import PremAudioLeftSidebar from "./PremAudioLeftSidebar";
import { useMediaQuery } from "usehooks-ts";

const PremAudioContainer = ({ serviceName, serviceId, historyId }: PremAudioContainerProps) => {
  const [rightSidebar, setRightSidebar] = useState(false);
  const responsiveMatches = useMediaQuery("(max-width: 767px)");
  const [hamburgerMenuOpen, setHamburgerMenu] = useState<boolean>(true);

  return (
    <section>
      <div className="md:flex md:h-screen w-full relative">
        <div
          className={clsx("prem-chat-sidebar md:relative", {
            hidden: responsiveMatches && hamburgerMenuOpen,
          })}
        >
          <PremAudioLeftSidebar setHamburgerMenu={setHamburgerMenu} />
        </div>
        <div className="flex flex-1">
          <div className="bg-lines bg-darkjunglegreen relative h-full w-full">
            <div className="main-content h-full z-10 overflow-y-auto custom-scroll relative prem-img-services min-h-screen">
              <Header
                hamburgerMenuOpen={hamburgerMenuOpen}
                setHamburgerMenu={setHamburgerMenu}
                title={serviceName}
                setRightSidebar={setRightSidebar}
                rightSidebar={rightSidebar}
              />
              <PremAudioBox serviceId={serviceId} historyId={historyId} />
            </div>
          </div>
        </div>
        <div>{rightSidebar && <PremImageRightSidebar setRightSidebar={setRightSidebar} />}</div>
      </div>
    </section>
  );
};

export default PremAudioContainer;
