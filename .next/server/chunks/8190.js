"use strict";
exports.id = 8190;
exports.ids = [8190];
exports.modules = {

/***/ 8190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/shared/DashboardCard.tsx
var DashboardCard = __webpack_require__(8511);
;// CONCATENATED MODULE: ./components/dashboard/CardDataStats.jsx




const CardDataStats = ({ title, total, children, bgColorClass })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(DashboardCard/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                    className: `rounded-full py-5 px-5 shadow-normal`,
                    sx: {
                        backgroundColor: bgColorClass,
                        color: "#fff"
                    },
                    children: children
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                            className: "text-title-md font-bold text-black dark:text-white",
                            children: total
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "text-sm font-medium",
                            children: title
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const dashboard_CardDataStats = (CardDataStats);

// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
;// CONCATENATED MODULE: ./components/dashboard/TopCard.jsx





const TopCards = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(dashboard_CardDataStats, {
                    title: "Total Users",
                    total: "1,500",
                    bgColorClass: "success.light",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconUsers, {
                            className: "text-success-main"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(dashboard_CardDataStats, {
                    title: "Total Enquiry",
                    total: "2,500",
                    bgColorClass: "secondary.light",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconTicket, {
                            className: "text-secondary-main"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(dashboard_CardDataStats, {
                    title: "Total Events",
                    total: "450",
                    bgColorClass: "warning.light",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconAddressBook, {
                            className: "text-warning-main"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(dashboard_CardDataStats, {
                    title: "Total Services",
                    total: "81",
                    bgColorClass: "primary.light",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconAtom, {
                            className: "text-primary-main"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const TopCard = (TopCards);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/shared/theme.js
var theme = __webpack_require__(3417);
;// CONCATENATED MODULE: ./components/dashboard/CustomerTickets.jsx







const products = [
    {
        ticketid: "#01234",
        name: "Prakashraj",
        email: "prakash.raj@gmail.com",
        medium: "Call",
        date: "2023-06-05",
        status: "Approved"
    },
    {
        ticketid: "#02234",
        name: "Prakashraj",
        email: "prakash.raj@gmail.com",
        medium: "Message",
        date: "2023-06-05",
        status: "Pending"
    },
    {
        ticketid: "#03234",
        name: "Prakashraj",
        email: "prakash.raj@gmail.com",
        medium: "Message",
        date: "2023-06-05",
        status: "Completed"
    }
];
function CustomerTickets() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(DashboardCard/* default */.Z, {
            title: "Enquiry list",
            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                sx: {
                    overflow: "auto",
                    width: {
                        xs: "280px",
                        sm: "auto"
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Table, {
                    "aria-label": "simple table",
                    sx: {
                        whiteSpace: "nowrap"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_.TableHead, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.TableRow, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                            variant: "subtitle2",
                                            fontWeight: 600,
                                            children: "Ticket Id"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                            variant: "subtitle2",
                                            fontWeight: 600,
                                            children: "Name"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                            variant: "subtitle2",
                                            fontWeight: 600,
                                            children: "Email"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                            variant: "subtitle2",
                                            fontWeight: 600,
                                            children: "Medium"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                            variant: "subtitle2",
                                            fontWeight: 600,
                                            children: "Date"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                            variant: "subtitle2",
                                            fontWeight: 600,
                                            children: "Status"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                            align: "center",
                                            variant: "subtitle2",
                                            fontWeight: 600,
                                            children: "Action"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.TableBody, {
                            children: products.map((product)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.TableRow, {
                                    sx: {
                                        border: "2px solid #f6f9fc"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: product.ticketid
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: product.name
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: product.email
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: product.medium
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: product.date
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                            children: product.status === "Pending" ? /*#__PURE__*/ jsx_runtime.jsx(material_.Chip, {
                                                className: "text-xs",
                                                style: {
                                                    backgroundColor: theme/* default */.Z.palette.success.light,
                                                    color: theme/* default */.Z.palette.success.main
                                                },
                                                size: "small",
                                                label: product.status
                                            }) : product.status === "Approved" ? /*#__PURE__*/ jsx_runtime.jsx(material_.Chip, {
                                                className: "text-xs",
                                                style: {
                                                    backgroundColor: theme/* default */.Z.palette.warning.light,
                                                    color: theme/* default */.Z.palette.warning.main
                                                },
                                                size: "small",
                                                label: product.status
                                            }) : product.status === "Completed" ? /*#__PURE__*/ jsx_runtime.jsx(material_.Chip, {
                                                className: "text-xs",
                                                style: {
                                                    backgroundColor: theme/* default */.Z.palette.primary.light,
                                                    color: theme/* default */.Z.palette.primary.main
                                                },
                                                size: "small",
                                                label: product.status
                                            }) : /*#__PURE__*/ jsx_runtime.jsx(material_.Chip, {
                                                className: "text-xs",
                                                size: "small",
                                                color: "error",
                                                label: "Unknown Status"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.TableCell, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Tooltip, {
                                                title: "View",
                                                arrow: true,
                                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconEyeEdit, {
                                                    id: btoa(product.id),
                                                    className: "mx-auto text-primary-main cursor-pointer"
                                                })
                                            })
                                        })
                                    ]
                                }, product.name))
                        })
                    ]
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./components/layouts/full/FullLayout.tsx + 7 modules
var FullLayout = __webpack_require__(5630);
;// CONCATENATED MODULE: ./pages/admin/Dashborad.jsx






function Dashboard() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Grid, {
                container: true,
                spacing: 3,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime.jsx(TopCard, {})
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        lg: 12,
                        children: /*#__PURE__*/ jsx_runtime.jsx(CustomerTickets, {})
                    })
                ]
            })
        })
    });
}
Dashboard.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(FullLayout/* default */.Z, {
        children: page
    });
};


/***/ })

};
;