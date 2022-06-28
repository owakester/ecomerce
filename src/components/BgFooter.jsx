import React from 'react'

const BgFooter = props => {
  return (
<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-center  text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline">CBBurguer™</a>. All Rights Reserved.
    </span>
    
</footer>
  )
}

BgFooter.propTypes = {}

export default BgFooter