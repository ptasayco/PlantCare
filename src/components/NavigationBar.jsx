import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";

export default function NavigationBar() {
    return (
        <>
            <Disclosure
                as="nav"
                className="text-gray-400 bg-gray-900 body-font"
            >
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Movile button */}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Abrir menu
                                        </span>
                                        {open ? (
                                            <i className="fa-solid fa-xmark"></i>
                                        ) : (
                                            <i className="fa-solid fa-bars"></i>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    {/* Logo */}
                                    <div className="flex flex-shrink-0 items-center">
                                        <Link
                                            to="/"
                                            className="font-bold text-3xl sm:text-4xl lg:text-4xl tracking-tight text-center text-white"
                                        >
                                            PlantCare
                                        </Link>
                                    </div>
                                    {/* itemsDiv*/}
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            <Link
                                                to="/dashboard"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium"
                                            >
                                                Dashboard
                                            </Link>
                                            <Link
                                                to="/installedbase"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium"
                                            >
                                                Base instalada
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {/* user */}
                                    <Menu as="div" className="relative ml-3">
                                        <Menu.Button>
                                            <i className="fa-solid fa-circle-user text-2xl text-gray-300 ms-4"></i>
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
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    <span
                                                        className="bg-gray-100 cursor-pointer ps-1 text-sm"
                                                        // onClick={closeSession}
                                                    >
                                                        Log Out
                                                    </span>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <Link
                                    to="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium block"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/dashboard"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium block"
                                >
                                    asdas
                                </Link>
                                <Link
                                    to="/installedbase"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium block"
                                >
                                    Base instalada
                                </Link>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}
