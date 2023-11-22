import Styles from "./styles.module.scss";
import Link from "next/link";
import React, { useState, useRef, useEffect, FC } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface iDropdownButton {
  title: string;
  menus: string[];
  onYearSelect: (year: string) => void;
}

const DropdownButton: FC<iDropdownButton> = ({
  title,
  menus,
  onYearSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: { target: any }) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleYearSelect = (year: string) => {
    onYearSelect(year);
    setIsOpen(false);
  };

  return (
    <div className={Styles.dropContainer} ref={dropdownRef}>
      <button className={Styles.btn} onClick={handleButtonClick}>
      <span>{title || "2022"}</span>
        <div className={Styles.arrowDropdown} onClick={handleButtonClick}>
          <MdOutlineArrowDropDown className={isOpen ? Styles.rotated : ""} />
        </div>
      </button>

      {isOpen && (
        <div className={Styles.openBox}>
          <div
            className={Styles.boxContainer}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menus.map((menu, index) => (
              <div
                key={index}
                className={Styles.box}
                role="menuitem"
                onClick={() => handleYearSelect(menu)}
              >
                {menu}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
