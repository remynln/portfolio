import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close, france, english } from '../assets'
import { setLanguage, getLanguage, initLanguage } from '../constants'

const languages = [
  {
    id: 1,
    name: 'en',
    flag: english,
  },
  {
    id: 2,
    name: 'fr',
    flag: france,
  },
]
const Navbar = () => {

  useEffect(() => {
    initLanguage()
  }, []);

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [selectedLanguage, setselectedLanguage] = useState(languages.find((lang) => lang.name === getLanguage()));

  const handleLanguageChange = (e) => {
    console.log(e)
    setselectedLanguage(e.name);
    setLanguage(e.name);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Remy&nbsp;
            <span className='sm:block hidden'>Noulin</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            {/* <select value={selectedLanguage} onChange={handleLanguageChange} className='bg-transparent text-secondary'>
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select> */}
            <Listbox value={selectedLanguage} onChange={handleLanguageChange}>
              <div className="relative w-auto">
                <ListboxButton className="relative w-full cursor-default rounded-md bg-primary py-1.5 pl-3 pr-10 text-left text-secondary shadow-sm ring-1 ring-inset ring-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <img alt="" src={selectedLanguage.flag
                    } className="h-5 w-5 flex-shrink-0 rounded-full" />
                    <span className="ml-3 block truncate">{selectedLanguage.name}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                  </span>
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {languages.map((lang) => (
                    <ListboxOption
                      key={lang.id}
                      value={lang}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                    >
                      <div className="flex items-center">
                        <img alt="" src={lang.flag} className="h-5 w-5 flex-shrink-0 rounded-full" />
                        <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                          {lang.name}
                        </span>
                      </div>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }
                  }
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <Listbox value={selectedLanguage} onChange={handleLanguageChange}>
                  <div className="relative w-auto">
                    <ListboxButton className="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left text-secondary shadow-sm ring-1 ring-inset ring-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <img alt="" src={selectedLanguage.flag} className="h-5 w-5 flex-shrink-0 rounded-full" />
                        <span className="ml-3 block truncate">{selectedLanguage.name}</span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                    >
                      {languages.map((lang) => (
                        <ListboxOption
                          key={lang.id}
                          value={lang}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                        >
                          <div className="flex items-center">
                            <img alt="" src={lang.flag} className="h-5 w-5 flex-shrink-0 rounded-full" />
                            <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                              {lang.name}
                            </span>
                          </div>

                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                          </span>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar