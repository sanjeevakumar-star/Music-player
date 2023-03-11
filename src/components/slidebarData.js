import React from "react";

import * as BiIcons from "react-icons/bi";
import * as MiIcons from "react-icons/im";
import * as FiIcons from "react-icons/fi";
import * as CiIcons from "react-icons/ci";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";

export const SidebarData = [{
    id: 1,
    mainTitle: "Browse",
    path: "/",
    cName: "nav-text",
    subList: [
        {
            title: "Discover",
            path: "/",
            icon: <BiIcons.BiSearch />,
            cName: "nav-text",

        }, {
            title: "Song",
            path: "/",
            icon: <MiIcons.ImHeadphones />,
            cName: "nav-text",

        }, {
            title: "Top chart",
            path: "/",
            icon: <FiIcons.FiBarChart />,
            cName: "nav-text",
        }, {

            title: "Artist",
            path: "/",
            icon: <CiIcons.CiUser />,
            cName: "nav-text",
        }
    ],
}, {
    id: 2,
    mainTitle: "Playlist",
    path: "/",
    cName: "nav-text",
    subList: [

        {
            title: "Favourite",
            path: "/",
            icon: <GiIcons.GiSelfLove />,
            cName: "nav-text",

        }, {
            title: "Recent",
            path: "/",
            icon: <IoIcons.IoIosTimer />,
            cName: "nav-text",

        }
    ],
},
{
    id: 3,
    mainTitle: "My music",
    path: "/",
    cName: "nav-text",
    subList: [
        {
            title: "High is hope",
            path: "/",
            icon: '',
            cName: "nav-text",
        }, {
            title: "Shape of you",
            path: "/",
            icon: '',
            cName: "nav-text",
        }, {
            title: "All we know",
            path: "/",
            icon: null,
            cName: "nav-text",
        }

    ],
}


];