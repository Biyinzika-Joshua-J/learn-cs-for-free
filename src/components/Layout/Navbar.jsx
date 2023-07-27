import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeToggleButton from './ThemeToggleButton'

const Navbar = () => {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.theme.mode)

  useEffect(()=>{
      if (mode == 'dark'){
          document.documentElement.classList.remove('light')
          document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      }
  }, [mode])

  return (
    <nav className="w-screen py-4 dark:bg-slate-600">
      <div className="mx-auto w-[90%] ">
          <ThemeToggleButton/>
      </div>
    </nav>
  )
}

export default Navbar