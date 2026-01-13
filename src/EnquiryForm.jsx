import React, { useState } from 'react';

const COLORS = {
    DeepGreen: '#0D753C',
    DarkForest: '#064422',
    BananaYellow: '#FFC83B',
    TextWhite: '#FFFFFF',
    SoftGray: '#F3F4F6',
};

const EnquiryForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        port: '',
        requirement: '',
        packaging: 'Bulk',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // WhatsApp Number aur Message Formatting
        const phoneNumber = "919817008240";
        const message = `*New Enquiry Received*%0A
--------------------------%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Port:* ${formData.port}%0A
*Requirement:* ${formData.requirement}%0A
*Packaging:* ${formData.packaging}%0A
--------------------------`;

        // WhatsApp URL open karna
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');

        alert('Redirecting to WhatsApp to send your enquiry...');
        onClose(); 
    };

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
                
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black z-10 text-xl font-bold"
                >✕</button>

                <div className="md:w-1/3 p-8 text-white flex flex-col justify-center" style={{ backgroundColor: COLORS.DeepGreen }}>
                    <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
                    <p className="text-sm opacity-90">
                        Details bhariye aur hum aapko WhatsApp par rate share karenge.
                    </p>
                    <div className="mt-8 space-y-4 text-xs">
                        <p>📍 Global Shipping</p>
                        <p>⚡ Fast Quote</p>
                        <p>📦 Custom Options</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="md:w-2/3 p-8 md:p-12 space-y-5">
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <label className="block text-sm font-semibold mb-1" style={{ color: COLORS.DarkForest }}>Full Name</label>
                            <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" style={{ borderColor: '#ddd' }} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1" style={{ color: COLORS.DarkForest }}>Destination Port</label>
                            <input type="text" name="port" placeholder="e.g. Mundra Port" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1" style={{ color: COLORS.DarkForest }}>Qty (MT)</label>
                                <input type="text" name="requirement" placeholder="500" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" onChange={handleChange} />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1" style={{ color: COLORS.DarkForest }}>Packaging</label>
                                <select name="packaging" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" onChange={handleChange}>
                                    <option value="Bulk">Bulk</option>
                                    <option value="Sacks">Sacks (50kg)</option>
                                    <option value="Jumbo">Jumbo Bags</option>
                                    <option value="Retail">Retail</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1" style={{ color: COLORS.DarkForest }}>Email Address</label>
                            <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" onChange={handleChange} />
                        </div>
                    </div>
                    <button type="submit" className="w-full py-3 mt-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
                        style={{ backgroundColor: COLORS.BananaYellow, color: COLORS.DarkForest, boxShadow: '0 4px 15px rgba(255, 200, 59, 0.3)' }}>
                        Send via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;