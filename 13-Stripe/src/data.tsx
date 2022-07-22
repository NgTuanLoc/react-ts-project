import { FaBook, FaBriefcase } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { IoTerminalOutline } from 'react-icons/io5';
import { FaConnectdevelop } from 'react-icons/fa';
import { BsPlug } from 'react-icons/bs';

export const data = [
	{
		page: 'projects',
		links: [
			{ label: 'payment', icon: <MdOutlinePayment />, url: '/products' },
			{ label: 'terminal', icon: <IoTerminalOutline />, url: '/products' },
			{ label: 'connect', icon: <FaConnectdevelop />, url: '/products' },
		],
	},
	{
		page: 'solutions',
		links: [
			{ label: 'plugins', icon: <BsPlug />, url: '/products' },
			{ label: 'libraries', icon: <FaBook />, url: '/products' },
			{ label: 'help', icon: <FaBook />, url: '/products' },
			{ label: 'billing', icon: <FaBook />, url: '/products' },
		],
	},
	{
		page: 'developers',
		links: [
			{ label: 'plugins', icon: <FaBook />, url: '/products' },
			{ label: 'libraries', icon: <FaBook />, url: '/products' },
			{ label: 'help', icon: <FaBook />, url: '/products' },
			{ label: 'billing', icon: <FaBook />, url: '/products' },
		],
	},
	{
		page: 'company',
		links: [
			{ label: 'about', icon: <FaBriefcase />, url: '/products' },
			{ label: 'customers', icon: <FaBriefcase />, url: '/products' },
		],
	},
];
