"use client"
import React, { useRef, useState } from "react"
import Image from "next/image"
import avatar from "../../../../public/album/avatar.png"
import Button from "@mui/material/Button"
import Popper from "@mui/material/Popper"
import Grow from "@mui/material/Grow"
import Paper from "@mui/material/Paper"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import MenuList from "@mui/material/MenuList"
import MenuItem from "@mui/material/MenuItem"
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <nav
      className="flex justify-around items-center w-full py-4 fixed top-0 bg-gray-900/80 z-10 backdrop-blur"
    >
      <div className="flex w-full container--max-width">
        <div className="flex basis-1/2 items-center justify-start min-h-10 pl-4">
          <a href="#home" className="scroll-smooth">
            <Image
              src={avatar}
              alt='My-avatar'
              className="w-10 flex items-center"
              objectFit="fill"
            />
          </a>
        </div>
        <div className="md:flex lg:flex basis-1/2 justify-around items-end min-h-10 hidden">
          <a className="font-bold lg:tex-md text-sm" href="#home" >Home</a>
          <a className="font-bold lg:tex-md text-sm" href="#about" >About</a>
          <a className="font-bold lg:tex-md text-sm" href="#projects" >Projects</a>
          <a className="font-bold lg:tex-md text-sm" href="#stats" >Stats</a>
        </div>
        <div className="flex justify-end basis-1/2 items-end lg:hidden md:hidden w-full">
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MenuIcon className="text-white" />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      className="bg-dark-cuartiary"
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose} >
                        <a className="font-bold lg:tex-md text-sm" href="#home" >Home</a>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <a className="font-bold lg:tex-md text-sm" href="#about" >About</a>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <a className="font-bold lg:tex-md text-sm" href="#projects" >Projects</a>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <a className="font-bold lg:tex-md text-sm" href="#stats" >Stats</a>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </nav>
  )
}
