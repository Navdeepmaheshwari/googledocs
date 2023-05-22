import React, { useEffect, useState } from "react";
import {
  MdOutlineComment,
  MdOutlineVideocam,
  MdLockOutline,
  MdOutlineAccountCircle,
  MdOutlineArrowDropDown,
  MdOutlineArrowRight,
  MdEditDocument,
  MdFileOpen,
  MdFileUpload,
  MdFileCopy,
  MdShare,
  MdEmail,
  MdDownload,
  MdMoveToInbox,
  MdMoveDown,
  MdUndo,
  MdRedo,
  MdShortcut,
  MdContentCopy,
  MdContentPaste,
  MdSelectAll,
  MdStar,
  MdStarBorder,
  MdOutlineCloudDone,
  MdAddToDrive,
  MdFindReplace,
  MdDeleteOutline,
  MdEdit,
  MdFullscreen,
  MdDone,
  MdCheckBoxOutlineBlank,
  MdOutlineImage,
  MdBlock,
  MdTableView,
  MdOutlineDraw,
  MdAddChart,
  MdEmojiEmotions,
  MdHorizontalRule,
  MdOutlineDriveFileMove,
} from "react-icons/md";
const HeaderMain = () => {
  const [name, setName] = useState(""); // to set the filename
  const [fav, setfav] = useState(false); // to set the favourite

  //function to chnage the name
  const handleName = (event) => {
    // console.log("OnChane");
    setName(event.target.value);
    document.title = name+'- Google Docs';
  };
  const handleFav = (event) => {
    setfav(!fav);
  };

  return (
    <div className="d-flex head justify-content-between mx-3 my-1">
      <div className="left d-flex align-items-center ">
        <div className="mx-auto logo">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png" alt="logo" />

        </div>
        <div>
          <div className="d-flex align-items-center ">
            <input
              className="mb-0 px-1 filename "
              placeholder="Untitled Document"
              value={name}
              onChange={handleName}
            />

            {fav ? (
              <MdStar
                color="#5f6364"
                size="20px"
                className="mr-2 onhover"
                onClick={handleFav}
                style={{ cursor: "pointer", fill: "#4285F4" }}
              />
            ) : (
              <MdStarBorder
                color="#5f6368"
                size="20px"
                className="mr-2 onhover"
                onClick={handleFav}
                style={{ cursor: "pointer" }}
              />
            )}

            <MdOutlineDriveFileMove
              color="#5f6368"
              size="20px"
              className="m-2 onhover"
              style={{ cursor: "pointer" }}
            />
            <MdOutlineCloudDone
              color="#5f6368"
              size="20px"
              className="m-2 onhover"
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* All List Items */}
          <div className="listItem ">
            <ul className="d-flex list-unstyled mb-0">
              <li className="mr-1 px-1 onhover ">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  File
                </a>
                {/* Nested List Items */}
                <ul
                  className="dropdown-menu"
                  style={{ width: "15rem" }}
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdFileUpload className=" " size="18px" />{" "}
                          <span className="lable">New</span>
                        </div>
                        <MdOutlineArrowRight className=" " size="20px" />{" "}
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-submenu w-100">
                      <li>
                        <a className="dropdown-item" href="#">
                          Document
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          From Template Gallery
                        </a>
                      </li>
                    </ul>
                  </li>{" "}
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="listimg">
                        <MdFileOpen className=" " size="18px" />{" "}
                        <span className="lable">Open</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="listimg">
                        <MdFileCopy className=" " size="18px" />{" "}
                        <span className="lable">Make a copy</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="listimg">
                        <MdShare className=" " size="18px" />{" "}
                        <span className="lable">Share</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="listimg">
                        <MdEmail className=" " size="18px" />{" "}
                        <span className="lable">Email</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdDownload className=" " size="18px" />{" "}
                          <span className="lable">Download</span>
                        </div>
                        <MdOutlineArrowRight className=" " size="20px" />{" "}
                      </div>
                    </a>

                    <ul className="dropdown-menu dropdown-submenu w-100">
                      <li>
                        <a className="dropdown-item" href="#">
                          Microsoft Word
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Open Document
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Rich Text File
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Pdf
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="listimg">
                        <MdEditDocument className=" " size="18px" />{" "}
                        <span className="lable">Rename</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="listimg">
                        <MdMoveToInbox className=" " size="18px" />{" "}
                        <span className="lable">Move</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="listimg">
                        <MdAddToDrive className=" " size="18px" />{" "}
                        <span className="lable">Add to Drive</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="listimg">
                        <MdMoveDown className=" " size="18px" />{" "}
                        <span className="lable">Move to Trash</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="mx-1 px-2 onhover ">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Edit
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ width: "15rem" }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdUndo className=" " size="18px" />{" "}
                          <span className="lable">Undo</span>
                        </div>
                        <span className="commands">Ctrl+Z</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdRedo className=" " size="18px" />{" "}
                          <span className="lable">Redo</span>
                        </div>
                        <span className="commands">Ctrl+Y</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item disabled" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdShortcut className=" " size="18px" />{" "}
                          <span className="lable">Cut</span>
                        </div>
                        <span className="commands">Ctrl+X</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item disabled" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdContentCopy className=" " size="18px" />{" "}
                          <span className="lable">Copy</span>
                        </div>
                        <span className="commands">Ctrl+C</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdContentPaste className=" " size="18px" />{" "}
                          <span className="lable">Paste</span>
                        </div>
                        <span className="commands">Ctrl+V</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdSelectAll className=" " size="18px" />{" "}
                          <span className="lable">Select all</span>
                        </div>

                        <span className="commands">Ctrl+A</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item disabled" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdDeleteOutline className=" " size="18px" />{" "}
                          <span className="lable">Delete</span>
                        </div>

                        <span className="commands"></span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdFindReplace className=" " size="18px" />{" "}
                          <span className="lable">Find and Replace</span>
                        </div>

                        <span className="commands">Ctrl+H</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mx-1 px-2 onhover ">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  View
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ width: "15rem" }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdEdit className=" " size="18px" />{" "}
                          <span className="lable">Mode</span>
                        </div>
                        <MdOutlineArrowRight className=" " size="20px" />{" "}

                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdDone className=" " size="18px" />{" "}
                          <span className="lable">Show Print LAyout</span>
                        </div>
                        {/* <span className="commands">Ctrl+Y</span> */}
                      </div>
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item " href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdDone className=" " size="18px" />{" "}
                          <span className="lable">Show Ruler</span>
                        </div>
                        {/* <span className="commands">Ctrl+X</span> */}
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdDone className=" " size="18px" />{" "}
                          <span className="lable">Show Outline</span>
                        </div>
                        {/* <span className="commands">Ctrl+C</span> */}
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdCheckBoxOutlineBlank className=" " size="18px" />{" "}
                          <span className="lable">Show Equation Toolbar</span>
                        </div>
                        {/* <span className="commands">Ctrl+V</span> */}
                      </div>
                    </a>
                  </li>


                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdFullscreen className=" " size="18px" />{" "}
                          <span className="lable">Full Screen</span>
                        </div>

                        <span className="commands"></span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="mx-1 px-2 onhover ">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Insert
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ width: "15rem" }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdOutlineImage className=" " size="18px" />{" "}
                          <span className="lable">Image</span>
                        </div>
                        <MdOutlineArrowRight className=" " size="20px" />{" "}

                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdTableView className=" " size="18px" />{" "}
                          <span className="lable">Table</span>
                        </div>
                        <MdOutlineArrowRight className=" " size="20px" />{" "}

                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdOutlineDraw className=" " size="18px" />{" "}
                          <span className="lable">Drawing</span>
                        </div>
                        <MdOutlineArrowRight className=" " size="20px" />{" "}

                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdAddChart className=" " size="18px" />{" "}
                          <span className="lable">Chart</span>
                        </div>
                        <MdOutlineArrowRight className=" " size="20px" />{" "}

                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdHorizontalRule className=" " size="18px" />{" "}
                          <span className="lable">Horizontal Line</span>
                        </div>
                        {/* <MdOutlineArrowRight className=" " size="20px" />{" "} */}

                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdEmojiEmotions className=" " size="18px" />{" "}
                          <span className="lable">Emoji</span>
                        </div>
                        <MdOutlineArrowRight className=" " size="20px" />{" "}

                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="sub">
                        <div className="listimg">
                          <MdBlock className=" " size="18px" />{" "}
                          <span className="lable">Building Blocks</span>
                        </div>
                        {/* <MdOutlineArrowRight className=" " size="20px" />{" "} */}

                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mx-1 px-2 onhover ">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Format
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>

              <li className="mx-1 px-2 onhover ">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>

              <li className="mx-1 px-2 onhover ">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Extensions
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>

              <li className="mx-1 px-2 onhover ">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Help
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side of Header */}
      <div className="right d-flex ">
        {/*   <div className="p-2">
          <MdOutlineTimer size="30px" />
        </div> */}
        <div className="p-2">
          <a href="" className="">
            {" "}
            <MdOutlineComment size="30px" className="onhover p-1 " />
          </a>
        </div>
        <div className="p-2">
          <a href="" className="">
            {" "}
            <div className="d-flex align-items-center onhover">
              <MdOutlineVideocam size="30px" className=" " />
              <MdOutlineArrowDropDown />
            </div>
          </a>
        </div>
        <div className="onhoverbtn">
          <button className="btnn button">
            <MdLockOutline className=" " size="20px" />{" "}
            <span className="">Share</span>
          </button>
        </div>

        <div className="user my-2">
          <a href="">
            {" "}
            <MdOutlineAccountCircle size="35px" className="onhoveruser " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
