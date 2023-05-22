import React, { useRef, useState } from "react";
import {
  MdOutlineRedo,
  MdOutlineUndo,
  MdOutlineLocalPrintshop,
  MdSpellcheck,
  MdOutlineFormatPaint,
  MdOutlineFormatBold,
  MdOutlineFormatItalic,
  MdOutlineFormatUnderlined,
  MdOutlineFormatColorText,
  MdOutlineColorize,
  MdOutlineMoreVert,
  MdKeyboardArrowUp,
  MdOutlineFormatAlignCenter,
  MdOutlineFormatLineSpacing,
  MdOutlineChecklistRtl,
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumberedRtl,
  MdOutlineArrowDropDown,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
  MdFormatClear,
  MdOutlineFormatAlignLeft,
  MdOutlineFormatAlignJustify,
  MdOutlineFormatAlignRight,
  MdOutlineVisibility,
  MdOutlineEdit,
  MdOutlineEditNote,
  MdOutlineDraw,
  MdPlusOne,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import {
  FaGoogleDrive,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPlus,
} from "react-icons/fa";
import { SiGooglekeep } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";
const Toolbar = () => {

  //states to change
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [close, setClose] = useState(false);



  //hanldeBold function which is used to change the font weight of text to  bold/normal of textarea
  const handleBold = () => {
    let textarea = document.getElementById("inputtext");

    if (textarea.style.fontWeight == "normal") {
      textarea.style.fontWeight = "bold";
      setBold(true);
    } else {
      textarea.style.fontWeight = "normal";
      setBold(false);
    }
  };

  //hanldeItalic function which is used to change the font style of text to Italic/normal of 
  const handleItalic = () => {
    let textarea = document.getElementById("inputtext");
    if (textarea.style.fontStyle == "italic") {
      textarea.style.fontStyle = "normal";
      setItalic(false)
    } else {
      textarea.style.fontStyle = "italic";
      setItalic(true)
    }
  };

  //hanldeUnderline function is used to underline the text

  const handleUnderline = () => {
    let textarea = document.getElementById("inputtext");
    if (textarea.style.textDecoration == "none") {
      textarea.style.textDecoration = "underline";
      setUnderline(true);
    } else {
      textarea.style.textDecoration = "none";
      setUnderline(false);
    }
  };
  const handleColor = () => { };
  const handleHighlight = () => { };
  const handleUndo = () => { };
  const handleRedo = () => { };
  const handlePrint = () => { };
  const handleFormat = () => { };
  const handleSpell = () => { };

  const handleClose = () => {
    setClose(!close);
  };

  const handleOnChange = (event) => {
    // console.log("OnChane");
    setText(event.target.value);
  };

  return (
    <div className="">
      <div className="d-flex  justify-content-between tools  ">
        {/* Toolbar which contains all the tools */}
        <div className="alltools">
          <div className={`toolbar d-flex  justify-content-between   mx-3 ${close ? "" : ""}`}>
            <div className="d-flex align-items-center ">
              <div className=" border-right border-dark div1">
                <button
                  onClick={handleUndo}
                  title="Undo"
                  className="mr-2 px-1 onhover toolbtn"
                >
                  <div className="d-flex align-items-center">
                    <MdOutlineUndo size="20px" />
                  </div>
                </button>
                <button
                  onClick={handleRedo}
                  title="Redo"
                  className="mr-2 px-1 onhover toolbtn"
                >
                  <div className="d-flex align-items-center">
                    <MdOutlineRedo size="20px" />
                  </div>
                </button>

                <button
                  onClick={handlePrint}
                  title="Print"
                  className="mr-2 px-1 onhover toolbtn"
                >
                  <div className="d-flex align-items-center">
                    <MdOutlineLocalPrintshop size="20px" />
                  </div>
                </button>

                <button
                  onClick={handleFormat}
                  title="Format"
                  className="mr-2 px-1 onhover toolbtn"
                >
                  <div className="d-flex align-items-center">
                    <MdOutlineFormatPaint size="20px" />
                  </div>
                </button>

                <button
                  onClick={handleSpell}
                  title="Spell-Check"
                  className="mr-2 px-1 onhover toolbtn"
                >
                  <div className="d-flex align-items-center">
                    <MdSpellcheck size="20px" />
                  </div>
                </button>
                <select
                  title="Zoom"
                  class="selectpicker border-0 pointer bg-transparent mr-2 onhover"
                >
                  <option value="">50%</option>
                  <option value="nickname">75%</option>
                  <option value="first_name" selected>
                    100%
                  </option>
                  <option value="last_name">125%</option>
                  <option value="syntax_highlighting">150%</option>
                </select>
              </div>{" "}
              <div className="border-right border-dark div2">
                <select
                  title="Styles"
                  class="selectpicker border-0 pointer mx-2 bg-transparent onhover"
                >
                  <option value="first_name">Normal Text</option>
                  <option value="">Title</option>
                  <option value="nickname" selected>
                    Heading1
                  </option>
                  <option value="last_name">Heading2</option>
                  <option value="syntax_highlighting">Heading3</option>
                  <option value="syntax_highlighting">Heading4</option>
                  <option value="syntax_highlighting">Heading5</option>
                  <option value="syntax_highlighting">Heading6</option>



                </select>

                <select
                  title="Fonts"
                  class="selectpicker border-0 pointer bg-transparent mr-2 onhover"
                >
                  <option value="last_name">Roboto</option>
                  <option value="syntax_highlighting" selected>
                    Monospace
                  </option>
                  <option value="">Arial</option>
                  <option value="nickname">Serif</option>
                  <option value="first_name">Times Roman</option>
                  <option value="last_name">Georgia</option>
                  <option value="syntax_highlighting">Impact</option>
                </select>
              </div>
              <div className="border-right border-dark div3 pointer" title="Font Size">
                <button onclick="decrement()" className="toolbtn">
                  <span className="font-weight-bold h5">-</span>
                </button>

                <input
                  type="number"
                  name=""
                  id=""
                  className="inputnum text-center"
                  // placeholder="11"
                  defaultValue={11}
                />
                <button onclick="increment()" className="toolbtn">
                  <span className="font-weight-bold h5">+</span>
                </button>
              </div>
              <div className="ml-2 border-right border-dark div-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button
                  onClick={handleBold}
                  className={`mr-2 px-1 onhover toolbtn ${bold ? "acti" : ""}`}
                  title="Bold"
                  id="bold"
                >
                  <div className="d-flex align-items-center">
                    <MdOutlineFormatBold size="20px" />
                  </div>
                </button>
                <button
                  onClick={handleItalic}
                  className={`mr-2 px-1 onhover toolbtn ${italic ? "acti" : ""}`}
                  title="Italic"
                >
                  <div className="d-flex align-items-center">
                    <MdOutlineFormatItalic size="20px" />
                  </div>
                </button>
                <button
                  onClick={handleUnderline}
                  className={`mr-2 px-1 onhover toolbtn ${underline ? "acti" : ""}`}
                  title="Underline"
                >
                  <div className="d-flex align-items-center">
                    <MdOutlineFormatUnderlined size="20px" />
                  </div>
                </button>
                <button
                  onClick={handleColor}
                  className="mr-2 px-1 onhover toolbtn"
                  title="Text Color "
                >
                  <div className="d-flex align-items-center ">
                    <MdOutlineFormatColorText size="20px" />
                  </div>
                </button>
                <button
                  onClick={handleHighlight}
                  className="mr-2 px-1 onhover toolbtn"
                  title="Highlight Text"
                >
                  <div className="d-flex align-items-center">
                    <MdOutlineColorize size="20px" />
                  </div>
                </button>
              </div>
              <div
                className="ml-2  border-dark "
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="div5">
                  <button className="mr-1 px-1 onhover toolbtn" title="Align">
                    <li
                      className="d-flex align-items-center dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MdOutlineFormatAlignCenter size="20px" />
                      <MdOutlineArrowDropDown />
                    </li>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                      style={{
                        marginTop: "0.4rem",
                        width: "fit-content",
                        backgroundColor: "#edf2fa",
                      }}
                    >
                      <div className="d-flex px-1 align-items-center">
                        {" "}
                        <li className="" title="Center">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignCenter
                                className=" "
                                size="20px"
                              />{" "}
                            </div>
                          </a>
                        </li>
                        <li title="Justify">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignJustify
                                className=" "
                                size="20px"
                              />{" "}
                              {/* <span className="lable">Cut</span> */}
                            </div>
                          </a>
                        </li>
                        <li title=" Left">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignLeft className=" " size="20px" />{" "}
                              {/* <span className="lable">Copy</span> */}
                            </div>
                          </a>
                        </li>
                        <li title="Right">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignRight
                                className=" "
                                size="20px"
                              />{" "}
                              {/* <span className="lable">Paste</span> */}
                            </div>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </button>

                  <button
                    className="mr-1 px-1 onhover toolbtn"
                    title="Line Spacing"
                  >
                    <li className="d-flex align-items-center ">
                      <MdOutlineFormatLineSpacing size="20px" />
                      {/* <MdOutlineArrowDropDown /> */}
                    </li>
                  </button>

                  <button
                    href=""
                    className="mr-1 px-1 onhover toolbtn"
                    title="Line Spacing"
                  >
                    <li
                      className="d-flex align-items-center dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MdOutlineChecklistRtl size="20px" />
                      <MdOutlineArrowDropDown />
                    </li>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                      style={{
                        marginTop: "0.4rem",
                        width: "fit-content",
                        backgroundColor: "#edf2fa",
                      }}
                    >
                      <div className="d-flex px-1 align-items-center">
                        {" "}
                        <li className="" title="Center">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignCenter
                                className=" "
                                size="20px"
                              />{" "}
                            </div>
                          </a>
                        </li>
                        <li title="Justify">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignJustify
                                className=" "
                                size="20px"
                              />{" "}
                              {/* <span className="lable">Cut</span> */}
                            </div>
                          </a>
                        </li>
                        <li title=" Left">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignLeft className=" " size="20px" />{" "}
                              {/* <span className="lable">Copy</span> */}
                            </div>
                          </a>
                        </li>
                        <li title="Right">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignRight
                                className=" "
                                size="20px"
                              />{" "}
                              {/* <span className="lable">Paste</span> */}
                            </div>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </button>

                  <button
                    href=""
                    className="mr-1 px-1 onhover toolbtn"
                    title="Line Spacing"
                  >
                    <li
                      className="d-flex align-items-center dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MdOutlineFormatListBulleted size="20px" />
                      <MdOutlineArrowDropDown />
                    </li>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                      style={{
                        marginTop: "0.4rem",
                        width: "fit-content",
                        backgroundColor: "#edf2fa",
                      }}
                    >
                      <div className="d-flex px-1 align-items-center">
                        {" "}
                        <li className="" title="Center">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignCenter
                                className=" "
                                size="20px"
                              />{" "}
                            </div>
                          </a>
                        </li>
                        <li title="Justify">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignJustify
                                className=" "
                                size="20px"
                              />{" "}
                              {/* <span className="lable">Cut</span> */}
                            </div>
                          </a>
                        </li>
                        <li title=" Left">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignLeft className=" " size="20px" />{" "}
                              {/* <span className="lable">Copy</span> */}
                            </div>
                          </a>
                        </li>
                        <li title="Right">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignRight
                                className=" "
                                size="20px"
                              />{" "}
                              {/* <span className="lable">Paste</span> */}
                            </div>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </button>

                  <button
                    href=""
                    className="mr-1 px-1 onhover toolbtn"
                    title="Line Spacing"
                  >
                    <li
                      className="d-flex align-items-center dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MdOutlineFormatListNumberedRtl
                        size="20px"
                        title="Numbered List "
                      />
                      <MdOutlineArrowDropDown />
                    </li>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                      style={{
                        marginTop: "0.4rem",
                        width: "fit-content",
                        backgroundColor: "#edf2fa",
                      }}
                    >
                      <div className="d-flex px-1 align-items-center">
                        {" "}
                        <li className="" title="Center">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignCenter
                                className=" "
                                size="20px"
                              />{" "}
                            </div>
                          </a>
                        </li>
                        <li title="Justify">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignJustify
                                className=" "
                                size="20px"
                              />{" "}
                              {/* <span className="lable">Cut</span> */}
                            </div>
                          </a>
                        </li>
                        <li title=" Left">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignLeft className=" " size="20px" />{" "}
                              {/* <span className="lable">Copy</span> */}
                            </div>
                          </a>
                        </li>
                        <li title="Right">
                          <a className="dropdown-item onhover" href="#">
                            <div className="listimg ">
                              <MdOutlineFormatAlignRight
                                className=" "
                                size="20px"
                              />{" "}
                              {/* <span className="lable">Paste</span> */}
                            </div>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </button></div>

                <button
                  href=""
                  className="mr-2 px-1 onhover toolbtn"
                  title=""
                >
                  <li
                    className="d-flex align-items-center dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <MdOutlineMoreVert size="20px" />
                    {/* <MdOutlineArrowDropDown /> */}
                  </li>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                    style={{
                      marginTop: "0.4rem",
                      width: "fit-content",
                      backgroundColor: "#edf2fa",
                    }}
                  >
                    <div className="d-flex px-1 align-items-center">
                      {" "}
                      <div className="div4in">
                        <button
                          onClick={handleBold}
                          className={`mr-2 px-1 onhover toolbtn ${bold ? "acti" : ""}`}
                          title="Bold"
                          id="bold"
                        >
                          <div className="d-flex align-items-center">
                            <MdOutlineFormatBold size="20px" />
                          </div>
                        </button>
                        <button
                          onClick={handleItalic}
                          className={`mr-2 px-1 onhover toolbtn ${italic ? "acti" : ""}`}
                          title="Italic"
                        >
                          <div className="d-flex align-items-center">
                            <MdOutlineFormatItalic size="20px" />
                          </div>
                        </button>
                        <button
                          onClick={handleUnderline}
                          className="mr-2 px-1 onhover toolbtn"
                          title="Underline"
                        >
                          <div className="d-flex align-items-center">
                            <MdOutlineFormatUnderlined size="20px" />
                          </div>
                        </button>
                        <button
                          onClick={handleColor}
                          className="mr-2 px-1 onhover toolbtn"
                          title="Text Color "
                        >
                          <div className="d-flex align-items-center ">
                            <MdOutlineFormatColorText size="20px" />
                          </div>
                        </button>
                        <button
                          onClick={handleHighlight}
                          className="mr-2 px-1 onhover toolbtn"
                          title="Highlight Text"
                        >
                          <div className="d-flex align-items-center">
                            <MdOutlineColorize size="20px" />
                          </div>
                        </button>
                      </div>
                      <div className="div5in"> <button className="mr-1 px-1 onhover toolbtn" title="Align">
                        <li
                          className="d-flex align-items-center dropdown-toggle"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <MdOutlineFormatAlignCenter size="20px" />
                          <MdOutlineArrowDropDown />
                        </li>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                          style={{
                            marginTop: "0.4rem",
                            width: "fit-content",
                            backgroundColor: "#edf2fa",
                          }}
                        >
                          <div className="d-flex px-1 align-items-center">
                            {" "}
                            <li className="" title="Center">
                              <a className="dropdown-item onhover" href="#">
                                <div className="listimg ">
                                  <MdOutlineFormatAlignCenter
                                    className=" "
                                    size="20px"
                                  />{" "}
                                </div>
                              </a>
                            </li>
                            <li title="Justify">
                              <a className="dropdown-item onhover" href="#">
                                <div className="listimg ">
                                  <MdOutlineFormatAlignJustify
                                    className=" "
                                    size="20px"
                                  />{" "}
                                  {/* <span className="lable">Cut</span> */}
                                </div>
                              </a>
                            </li>
                            <li title=" Left">
                              <a className="dropdown-item onhover" href="#">
                                <div className="listimg ">
                                  <MdOutlineFormatAlignLeft className=" " size="20px" />{" "}
                                  {/* <span className="lable">Copy</span> */}
                                </div>
                              </a>
                            </li>
                            <li title="Right">
                              <a className="dropdown-item onhover" href="#">
                                <div className="listimg ">
                                  <MdOutlineFormatAlignRight
                                    className=" "
                                    size="20px"
                                  />{" "}
                                  {/* <span className="lable">Paste</span> */}
                                </div>
                              </a>
                            </li>
                          </div>
                        </ul>
                      </button>

                        <button
                          className="mr-1 px-1 onhover toolbtn"
                          title="Line Spacing"
                        >
                          <li className="d-flex align-items-center ">
                            <MdOutlineFormatLineSpacing size="20px" />
                            {/* <MdOutlineArrowDropDown /> */}
                          </li>
                        </button>

                        <button
                          href=""
                          className="mr-1 px-1 onhover toolbtn"
                          title="Line Spacing"
                        >
                          <li
                            className="d-flex align-items-center dropdown-toggle"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <MdOutlineChecklistRtl size="20px" />
                            <MdOutlineArrowDropDown />
                          </li>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                            style={{
                              marginTop: "0.4rem",
                              width: "fit-content",
                              backgroundColor: "#edf2fa",
                            }}
                          >
                            <div className="d-flex px-1 align-items-center">
                              {" "}
                              <li className="" title="Center">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignCenter
                                      className=" "
                                      size="20px"
                                    />{" "}
                                  </div>
                                </a>
                              </li>
                              <li title="Justify">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignJustify
                                      className=" "
                                      size="20px"
                                    />{" "}
                                    {/* <span className="lable">Cut</span> */}
                                  </div>
                                </a>
                              </li>
                              <li title=" Left">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignLeft className=" " size="20px" />{" "}
                                    {/* <span className="lable">Copy</span> */}
                                  </div>
                                </a>
                              </li>
                              <li title="Right">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignRight
                                      className=" "
                                      size="20px"
                                    />{" "}
                                    {/* <span className="lable">Paste</span> */}
                                  </div>
                                </a>
                              </li>
                            </div>
                          </ul>
                        </button>

                        <button
                          href=""
                          className="mr-1 px-1 onhover toolbtn"
                          title="Line Spacing"
                        >
                          <li
                            className="d-flex align-items-center dropdown-toggle"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <MdOutlineFormatListBulleted size="20px" />
                            <MdOutlineArrowDropDown />
                          </li>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                            style={{
                              marginTop: "0.4rem",
                              width: "fit-content",
                              backgroundColor: "#edf2fa",
                            }}
                          >
                            <div className="d-flex px-1 align-items-center">
                              {" "}
                              <li className="" title="Center">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignCenter
                                      className=" "
                                      size="20px"
                                    />{" "}
                                  </div>
                                </a>
                              </li>
                              <li title="Justify">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignJustify
                                      className=" "
                                      size="20px"
                                    />{" "}
                                    {/* <span className="lable">Cut</span> */}
                                  </div>
                                </a>
                              </li>
                              <li title=" Left">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignLeft className=" " size="20px" />{" "}
                                    {/* <span className="lable">Copy</span> */}
                                  </div>
                                </a>
                              </li>
                              <li title="Right">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignRight
                                      className=" "
                                      size="20px"
                                    />{" "}
                                    {/* <span className="lable">Paste</span> */}
                                  </div>
                                </a>
                              </li>
                            </div>
                          </ul>
                        </button>

                        <button
                          href=""
                          className="mr-1 px-1 onhover toolbtn"
                          title="Line Spacing"
                        >
                          <li
                            className="d-flex align-items-center dropdown-toggle"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <MdOutlineFormatListNumberedRtl
                              size="20px"
                              title="Numbered List "
                            />
                            <MdOutlineArrowDropDown />
                          </li>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                            style={{
                              marginTop: "0.4rem",
                              width: "fit-content",
                              backgroundColor: "#edf2fa",
                            }}
                          >
                            <div className="d-flex px-1 align-items-center">
                              {" "}
                              <li className="" title="Center">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignCenter
                                      className=" "
                                      size="20px"
                                    />{" "}
                                  </div>
                                </a>
                              </li>
                              <li title="Justify">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignJustify
                                      className=" "
                                      size="20px"
                                    />{" "}
                                    {/* <span className="lable">Cut</span> */}
                                  </div>
                                </a>
                              </li>
                              <li title=" Left">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignLeft className=" " size="20px" />{" "}
                                    {/* <span className="lable">Copy</span> */}
                                  </div>
                                </a>
                              </li>
                              <li title="Right">
                                <a className="dropdown-item onhover" href="#">
                                  <div className="listimg ">
                                    <MdOutlineFormatAlignRight
                                      className=" "
                                      size="20px"
                                    />{" "}
                                    {/* <span className="lable">Paste</span> */}
                                  </div>
                                </a>
                              </li>
                            </div>
                          </ul>
                        </button></div>
                      <li className="" title="Center">
                        <a className="dropdown-item onhover" href="#">
                          <div className="listimg ">
                            <MdFormatIndentDecrease className=" " size="20px" />{" "}
                          </div>
                        </a>
                      </li>
                      <li title=" Left">
                        <a className="dropdown-item onhover" href="#">
                          <div className="listimg ">
                            <MdFormatIndentIncrease className=" " size="20px" />{" "}
                            {/* <span className="lable">Copy</span> */}
                          </div>
                        </a>
                      </li>
                      <li title=" Left">
                        <a className="dropdown-item onhover" href="#">
                          <div className="listimg ">
                            <MdFormatClear className=" " size="20px" />{" "}
                            {/* <span className="lable">Copy</span> */}
                          </div>
                        </a>
                      </li>
                      <li title=" Left">
                        <a className="dropdown-item onhover" href="#">
                          <div className="listimg ">
                            <MdOutlineDraw className=" " size="20px" />{" "}
                            {/* <span className="lable">Copy</span> */}
                          </div>
                        </a>
                      </li>

                    </div>
                  </ul>
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="mr-3  onhover">
                {" "}
                <button className="mr-2 px-1 onhover toolbtn" title="">
                  <li
                    className="d-flex align-items-center dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <MdOutlineEdit size="20px" title="Editing Mode" />
                    <MdOutlineArrowDropDown />
                  </li>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                    style={{
                      marginTop: "0.4rem",
                      width: "fit-content",
                      backgroundColor: "white",
                    }}
                  >
                    <div className="px-1 align-items-center">
                      {" "}
                      <li title="Editing">
                        <a className="dropdown-item onhover" href="#">
                          <div className="listimg ">
                            <MdOutlineEdit className=" " size="20px" />{" "}
                            <span className="lable">Editing</span>
                          </div>
                        </a>
                      </li>
                      <li title="Suggesting">
                        <a className="dropdown-item onhover" href="#">
                          <div className="listimg ">
                            <MdOutlineEditNote className=" " size="20px" />{" "}
                            <span className="lable">Suggesting</span>
                          </div>
                        </a>
                      </li>
                      <li title="Viewing">
                        <a className="dropdown-item onhover" href="#">
                          <div className="listimg ">
                            <MdOutlineVisibility className=" " size="20px" />{" "}
                            <span className="lable">Viewing</span>
                          </div>
                        </a>
                      </li>
                    </div>
                  </ul>
                </button>
              </div>

              <button className="mr-2 px-1 onhover toolbtn" title="">
                <li
                  className="d-flex align-items-center dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MdKeyboardArrowUp size="20px" />
                </li>
              </button>
            </div>
          </div>{" "}
          <div className="my-2 mx-4 outerdiv">
            {/* <button className="btn btn-primary my-3 " onClick={handleUpClick}>
          Convert to UpperCase
        </button> */}
            <div className="p-2 innerdiv ">
              <div className="textarea ">
                <textarea
                  onChange={handleOnChange}
                  value={text}
                  id="inputtext"
                  placeholder="Type Text"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar */}
        <div className={`d-flex flex-column justify-content-between align-items-center sidebar  `} >
          <div className={`d-flex flex-column  align-items-center ${close ? 'close' : ''}`}>
            <div className="sidebarlogo">
              <div className="onhover p-1">
                {" "}
                <a href="https://calendar.google.com/calendar/u/0/r" target="_blank" title="Calender" className="sidelogo ">
                  <img src="	https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="Calender" />
                </a>
              </div>
              <div className="onhover p-1">
                {" "}
                <a href="https://keep.google.com" target="_blank" title="Google Keep" className="sidelogo ">
                  <img src="	https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="Google Keep" />
                </a>
              </div>
              <div className="onhover p-1">
                {" "}
                <a href="" target="_blank" title="Undo" className="sidelogo ">
                  <img src="	https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="logo" />
                </a>
              </div>
              <div className="onhover p-1">
                {" "}
                <a href="https://contacts.google.com/u/0?hl=en" target="_blank" title="Contacts" className="sidelogo ">
                  <img src="	https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="Contacts" />
                </a>
              </div>
              <div className="onhover p-1">
                {" "}
                <a href="https://www.google.com/maps/@24.4145424,74.4877302,13z?authuser=0&hl=en" target="_blank" title="Map" className="sidelogo ">
                  <img src="	https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png" alt="Map" />
                </a>
              </div>

            </div>
            <div className="list-unstyled w-fit">
              <hr className="" style={{ backgroundColor: "gray" }} />
            </div>
            <div className="d-flex flex-column  align-items-center">
              {" "}
              <a href="https://console.cloud.google.com/marketplace" title="More" className="sidelogo ">
                <AiOutlinePlus className=" " size="22px" />{" "}
              </a>
            </div>
          </div>
          <div className="closebtn d-flex align-items-center" style={{ position: 'fixed', top: '90vh' }}>
            <button href="https://console.cloud.google.com/marketplace" onClick={handleClose} title="More" className="toolbtn ">
              {close ? <MdOutlineKeyboardArrowLeft className=" " size="22px" /> : <MdOutlineKeyboardArrowRight className=" " size="22px" />}  {" "}
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Toolbar;
