import { FaBook, FaBriefcase } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { IoTerminalOutline } from 'react-icons/io5';
import { FaConnectdevelop } from 'react-icons/fa';
import { BsPlug } from 'react-icons/bs';
import {
	AiOutlineApple,
	AiOutlinePhone,
	AiOutlineTrophy,
	AiFillMoneyCollect,
} from 'react-icons/ai';
import { HiOutlineLibrary } from 'react-icons/hi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { BiHelpCircle } from 'react-icons/bi';

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
			{ label: 'E-commerce ', icon: <AiOutlineApple />, url: '/products' },
			{ label: 'SaaS', icon: <AiOutlinePhone />, url: '/products' },
			{ label: 'Marketplaces', icon: <AiOutlineTrophy />, url: '/products' },
			{
				label: 'Embedded Finance',
				icon: <AiFillMoneyCollect />,
				url: '/products',
			},
		],
	},
	{
		page: 'developers',
		links: [
			{ label: 'plugins', icon: <BsPlug />, url: '/products' },
			{ label: 'libraries', icon: <HiOutlineLibrary />, url: '/products' },
			{ label: 'help', icon: <BiHelpCircle />, url: '/products' },
			{ label: 'billing', icon: <FaBook />, url: '/products' },
		],
	},
	{
		page: 'company',
		links: [
			{ label: 'about', icon: <FaBriefcase />, url: '/products' },
			{
				label: 'customers',
				icon: <RiCustomerService2Line />,
				url: '/products',
			},
		],
	},
];
