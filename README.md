# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

product model rough draft

id number
name string
shortdescription string
price number
discount number
isOnSale bool
pictures string[]
createdby number
creatededate datetime
createdby string
modifiedby number
modifieddate datetime

details model rough draft

id number
productid number
material string
capacity string
dimensions string
weight string
care string
description string

user model rough draft

id number
username string
createdby datetime
isdeleted bool

review model rough draft

id number
productid number
name string
review string
rating number
createdby datetime