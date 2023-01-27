import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className="w-full flex items-center justify-center h-20 bg-slate-800 bg-opacity-25 drop-shadow-md fixed top-o z-30 py-6">
      <div className="flex items-center justify-center mx-auto text-white h-auto w-5/6 gap-12">
        {/* logo */}
        <div className="tracking-widest text-2xl font-nunito w-full font-extrabold">
          t k p .
        </div>
        <div className="w-full">
          {/* full menu */}
          <div className="hidden md:flex w-full gap-8 justify-end text-sm">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Experiences"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <Menu as="div" className="flex md:hidden h-12 p-2 justify-end w-full">
            <Menu.Button className="flex w-full justify-end focus:outline-none">
              <Bars3Icon className="h-auto" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute md:right-20 top-16 w-36 origin-top-right rounded-md drop-shadow-md bg-slate-800 bg-opacity-25 text-white focus:outline-none">
                <div className="p-2 flex flex-col gap-4 w-5/6 text-sm">
                  <Menu.Item>
                    <Link
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      page="Skills"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      page="Experiences"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      page="Projects"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      page="Contact"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
