/*eslint-disable*/
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { productsData as products } from "../constants/products";
import { companyData as company } from "../constants/company";
import { supportData as support } from "../constants/support";

const Footer = () => {
	return (
		<>
			<div className="bg-gray-200 w-full flex md:flex-row flex-col justify-around items-start px-12 py-8">
				<div className="p-5 ">
					<ul>
						<h1 className="text-gray-800 font-bold text-3xl pb-6">
							Car<span className="text-slate-800">Marketplace</span>
						</h1>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:pulse text-pink-700" />
							<FaTwitter className="text-2xl cursor-pointer hover:pulse text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:pulse text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:pulse text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
					{products.map((product) => (
						<ul key={product.id}>
							<li className="text-gray-500 text-md pb-2 font-semibold hover:text-slate-600 cursor-pointer">
								{product.name}
							</li>
						</ul>
					))}
				</div>
				<div className="p-5">
					<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
					{company.map((companyListItems) => (
						<ul key={companyListItems.id}>
							<li className="text-gray-500 text-md pb-2 font-semibold hover:text-slate-600 cursor-pointer">
								{companyListItems.name}
							</li>
						</ul>
					))}
				</div>
				<div className="p-5">
					<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
					{support.map((supportListItems) => (
						<ul key={supportListItems.id}>
							<li className="text-gray-500 text-md pb-2 font-semibold hover:text-slate-600 cursor-pointer">
								{supportListItems.name}
							</li>
						</ul>
					))}
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center p-5 bg-gray-200">
				<h2 className=" text-gray-800 font-semibold">
					© 2021-2022 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Car Marketplace{" "}
					</span>
				</h2>
			</div>
		</>
	);
};
export default Footer;