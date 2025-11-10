import React from 'react';
import { ChevronDown, ArrowRight, Mail, Shield, Activity, Brain, MapPin, Instagram, Twitter, Linkedin, Globe, Menu, X, Facebook } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const BounceDataPlatformPage = () => {
    const [email, setEmail] = React.useState('');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email submitted:', email);
    };

    const [isProductsOpen, setIsProductsOpen] = React.useState(false);


    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-40 right-0 left-0 bg-gradient-to-br from-gray-50 to-blue-50 p-3 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 bg-white rounded-lg">
                    <div className="flex justify-between items-center py-3 lg:py-4">
                        <div className="flex items-center space-x-2">
                        <a href="/">
                            <img src='full_logo.svg' className="h-8 w-auto" alt="Bunce Logo" />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <div className="relative">
                                <div
                                    className="flex items-center space-x-1 cursor-pointer"
                                    onClick={() => { setIsProductsOpen(!isProductsOpen); }}
                                    onMouseEnter={() => setIsProductsOpen(true)}
                                // onMouseLeave={() => setIsProductsOpen(false)}
                                >
                                    <span className="text-gray-700 hover:text-gray-900">Products</span>
                                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {/* Desktop Dropdown */}
                                {isProductsOpen && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                                        onMouseEnter={() => setIsProductsOpen(true)}
                                        onMouseLeave={() => setIsProductsOpen(false)}
                                    >
                                        <a href="https://bunce.so" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                                            <div className="font-medium">Growth</div>
                                            <div className="text-sm text-gray-500">AI Powered Customer Engagement</div>
                                        </a>
                                        <a href="https://monitor.bunce.so" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                                            <div className="font-medium">Monitor</div>
                                            <div className="text-sm text-gray-500">AI Powered Fraud Detection</div>
                                        </a>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                        </nav>

                        {/* Desktop CTA Button */}
                        <a href="#contact-us" className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                        
                        Contact us
                      
                    </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 pt-4 pb-3">
                            <div className="flex flex-col space-y-3">
                                <div>
                                    <div
                                        className="flex items-center space-x-1 cursor-pointer"
                                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                                    >
                                        <span className="text-gray-700">Products</span>
                                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                                    </div>

                                    {/* Mobile Dropdown */}
                                    {isProductsOpen && (
                                        <div className="ml-4 mt-2 space-y-3">
                                            <a href="https://bunce.so" className="block text-gray-600 hover:text-gray-900">
                                                <div className="font-medium">Growth</div>
                                                <div className="text-sm text-gray-500">AI Powered Customer Engagement</div>
                                            </a>
                                            <a href="https://monitor.bunce.so" className="block text-gray-600 hover:text-gray-900">
                                                <div className="font-medium">Monitor</div>
                                                <div className="text-sm text-gray-500">AI Powered Fraud Detection</div>
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <a href="#about-us" className="text-gray-700">About us</a>
                                <a href="#contact-us" className="text-gray-700">Contact</a>
                                <a href="#contact-us" className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium w-fit">
                                    Contact us
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-10 lg:mt-10 mt-16 lg:py-20 relative overflow-hidden">
                {/* Background decorative lines - Hidden on mobile */}
                <div className="hidden lg:flex">
                    <div>
                        <svg width="339" height="215" viewBox="0 0 339 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-119.868 1L60.6675 77.8663C66.6132 80.3978 73.0088 81.7027 79.4709 81.7027H270.829M310.329 147.539L78.7739 147.539C72.7633 147.539 66.8063 146.41 61.2125 144.211L-133.407 67.7027M332.329 211.252H78.4413C72.6469 211.252 66.9004 210.203 61.4797 208.155L-133.407 134.539" stroke="url(#paint0_linear_30770_283126)" />
                            <circle cx="273.305" cy="81.8648" r="2.94458" stroke="url(#paint1_linear_30770_283126)" />
                            <circle cx="313.305" cy="147.555" r="2.94458" stroke="url(#paint2_linear_30770_283126)" />
                            <circle cx="335.305" cy="211.555" r="2.94458" stroke="url(#paint3_linear_30770_283126)" />
                            <defs>
                                <linearGradient id="paint0_linear_30770_283126" x1="112.514" y1="118.336" x2="348.152" y2="114.998" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3143B5" />
                                    <stop offset="0.5" stopColor="#18DC9B" />
                                    <stop offset="1" stopColor="#3143B5" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_30770_283126" x1="261.697" y1="81.8648" x2="284.992" y2="84.3892" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.254808" stopColor="#3143B5" />
                                    <stop offset="0.778846" stopColor="#18DC9B" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_30770_283126" x1="301.697" y1="147.555" x2="324.992" y2="150.08" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.254808" stopColor="#3143B5" />
                                    <stop offset="0.778846" stopColor="#18DC9B" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_30770_283126" x1="323.697" y1="211.555" x2="346.992" y2="214.08" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.254808" stopColor="#3143B5" />
                                    <stop offset="0.778846" stopColor="#18DC9B" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                        <h1 className="text-6xl font-bold text-gray-900 mb-6">
                            Unlock <span
                                style={{
                                    background: 'linear-gradient(135deg, #3143B5 0%, #18DC9B 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                value
                            </span><br />
                            from your data
                        </h1>
                        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
                            Leverage your first party data to drive<br /> revenue and customer success
                        </p>
                    </div>

                    <div>
                        <svg width="386" height="215" viewBox="0 0 386 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M458.882 1L278.346 77.8663C272.401 80.3978 266.005 81.7027 259.543 81.7027H68.1847M28.6846 147.539L260.24 147.539C266.25 147.539 272.207 146.41 277.801 144.211L472.421 67.7027M6.68457 211.252H260.572C266.367 211.252 272.113 210.203 277.534 208.155L472.421 134.539" stroke="url(#paint0_linear_30770_283127)" />
                            <circle cx="3.44458" cy="3.44458" r="2.94458" transform="matrix(-1 0 0 1 69.1528 78.4202)" stroke="url(#paint1_linear_30770_283127)" />
                            <circle cx="3.44458" cy="3.44458" r="2.94458" transform="matrix(-1 0 0 1 29.1528 144.111)" stroke="url(#paint2_linear_30770_283127)" />
                            <circle cx="3.44458" cy="3.44458" r="2.94458" transform="matrix(-1 0 0 1 7.15283 208.111)" stroke="url(#paint3_linear_30770_283127)" />
                            <defs>
                                <linearGradient id="paint0_linear_30770_283127" x1="226.5" y1="118.336" x2="-9.138" y2="114.998" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3143B5" />
                                    <stop offset="0.5" stopColor="#18DC9B" />
                                    <stop offset="1" stopColor="#3143B5" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_30770_283127" x1="-8.1638" y1="3.44458" x2="15.1309" y2="5.969" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.254808" stopColor="#3143B5" />
                                    <stop offset="0.778846" stopColor="#18DC9B" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_30770_283127" x1="-8.1638" y1="3.44458" x2="15.1309" y2="5.969" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.254808" stopColor="#3143B5" />
                                    <stop offset="0.778846" stopColor="#18DC9B" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_30770_283127" x1="-8.1638" y1="3.44458" x2="15.1309" y2="5.969" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.254808" stopColor="#3143B5" />
                                    <stop offset="0.778846" stopColor="#18DC9B" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Mobile Hero Content */}
                <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Unlock <span
                            style={{
                                background: 'linear-gradient(135deg, #3143B5 0%, #18DC9B 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            value
                        </span><br />
                        from your data
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Leverage your first party data to drive revenue and customer success
                    </p>
                </div>

                <div className="my-12 lg:my-20">
                    <p className="text-sm flex justify-center text-gray-500 mb-6 lg:mb-8 tracking-wide font-medium px-4">THE CUSTOMER DATA PLATFORM TRUSTED BY</p>
                    <div className="flex justify-center items-center space-x-8 lg:space-x-16 flex-wrap gap-4 lg:gap-6 px-4">
                        <span className="text-2xl font-bold text-green-600"><img src='images/credpal.svg' alt="Gamp" /></span>
                        <div className="flex items-center space-x-1">
                            <span className="text-xl font-bold text-blue-600"><img src='images/mkobo.svg' alt="CredPal" /></span>
                        </div>
                        <span className="text-xl font-bold text-gray-800"><img src='images/selar.svg' alt="Printivo" /></span>
                        <div className="flex items-center space-x-1">

                            <span className="text-xl font-bold text-gray-800"><img src='images/3mtt.svg' alt="Shipbubble" /></span>
                        </div>
                        <div className="flex items-center space-x-1">

                            <span className="text-xl font-bold text-gray-800"><img src='images/gigm.svg' alt="Pocket Food" /></span>
                        </div>
                        <div className="flex items-center space-x-1">

                            <span className="text-xl font-bold text-gray-800"><img src='images/fiberone.svg' alt="Pocket Food" /></span>
                        </div>
                        <div className="flex items-center space-x-1">

                            <span className="text-xl font-bold text-gray-800"><img src='images/middleman.svg' alt="Pocket Food" /></span>
                        </div>
                        <div className="flex items-center space-x-1">

                            <span className="text-xl font-bold text-gray-800"><img src='images/vale.svg' alt="Pocket Food" /></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-12 lg:py-20 bg-[#F7F8FD]" id='about-us'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-20">
                        <p style={{ color: '#93A3B9' }} className="text-sm font-semibold mb-4 tracking-wide">PRODUCTS</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                            Turn Data Into Actionable Intelligence
                        </h2>
                    </div>

                    {/* AI Customer Engagement */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24 bg-white rounded-2xl overflow-hidden">
                        <div className="p-6 lg:p-8">
                            <div>
                                <img src='images/side_1.png' className="w-full h-auto" alt="AI Customer Engagement" />
                            </div>
                        </div>

                        <div className="p-6 lg:p-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
                                AI Powered Customer<br />
                                Engagement Platform
                            </h3>
                            <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                                Harness the power of AI to understand behavior, predict needs, and engage your customers at the right moment—across email, SMS, WhatsApp, push notifications and in-app messaging
                            </p>
                            <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                                <a href="https://www.bunce.so" target='_blank' className=' flex items-center group'>
                                    Learn more
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>

                            </button>
                        </div>
                    </div>

                    {/* Fraud Detection */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-2xl overflow-hidden">
                        <div className="p-6 lg:p-8 order-2 lg:order-1">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                                Fraud Analytics &<br />
                                Detection System
                            </h3>
                            <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                                Leverage advanced analytics and machine learning to detect suspicious activity, stop fraud before it happens, and secure every transaction—across payments, user behavior, and account access.
                            </p>
                            <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                                <a href="https://monitor.bunce.so" target='_blank' className=' flex items-center group'>
                                    Learn more
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </button>
                        </div>

                        <div className="bg-green-50 p-4 lg:p-4 m-6 lg:m-10 rounded-2xl flex justify-center order-1 lg:order-2">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                                <img src='images/circle.png' className="w-full h-full object-contain" alt="Fraud Detection Circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 lg:py-16" id='contact-us'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 lg:mb-16">
                        {/* Products Column */}
                        <div>
                            <h4 className="font-semibold mb-4 lg:mb-6 text-[#BDC6FF] text-base">Products</h4>
                            <ul className="space-y-3 lg:space-y-4 text-gray-400 text-sm">

                           
                                <li><a href="https://bunce.so" className="hover:text-white transition-colors">AI-powered Customer Engagement</a></li>
                                <li><a href="https://monitor.bunce.so" className="hover:text-white transition-colors">AI-powered Fraud Detection</a></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h4 className="font-semibold mb-4 lg:mb-6 text-[#BDC6FF] text-base">Company</h4>
                            <ul className="space-y-3 lg:space-y-4 text-gray-400 text-sm">
                                <li><a href="#about-us" className="hover:text-white transition-colors">About us</a></li>
                                {/* <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li> */}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="md:col-span-2">
                            <h4 className="font-semibold mb-4 lg:mb-6 text-[#BDC6FF] text-base">Contact</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Left Contact Info */}
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                                            <img src='nigeria.svg' />
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            <p className='text-gray-400'>4, Ayanbayo Street,</p>
                                            <p className='text-gray-400'>off Faramobi Ajike Street,</p>
                                            <p className='text-gray-400'>Anthony, Lagos.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                                            <img src='uk.svg' />
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            <p className='text-gray-400'>86-90, Paul Street, London</p>
                                            <p className='text-gray-400'>EC2A 4NE, England</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Contact Info */}
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                                            <img src='us.svg' />
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            <p className='text-gray-400'>88522 11 NE 1st St, 8th</p>
                                            <p className='text-gray-400'>floor Miami-Dade, US</p>
                                            <p className='text-gray-400'>33132</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section with Logo, Certifications, and Social */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
                        {/* Left Side - Logo */}
                        <div className="flex items-center space-x-3">
                            <img src='white_logo.svg' className="lg:w-[200px] w-[150px]  " alt="Bunce Logo" />
                        </div>

                        {/* Center - Certification Badges */}
                        {/* <div className="flex items-center justify-center lg:justify-start">
                            <img src='images/logos.png' className="h-8 lg:h-auto w-auto" alt="Certification Logos" />
                        </div> */}

                        {/* Right Side - Social Media */}
                        <div className="flex items-center space-x-3 lg:space-x-4">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer group">
                                <Instagram className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 group-hover:text-white" />
                            </div>
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer group">
                                <Twitter className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 group-hover:text-white" />
                            </div>

                            <a target='_blank' href={'https://www.linkedin.com/company/107639924/admin/dashboard/'}>
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer group">
                                    <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 group-hover:text-white" />
                                </div>
                            </a>

                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer group">
                                <Facebook className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 group-hover:text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
                        <p className="text-gray-400 text-sm text-center lg:text-left">
                            © 2025 Bunce Technologies Ltd. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BounceDataPlatformPage;