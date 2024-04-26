import React, { useState } from 'react';

const AdvertisementList = () => {
    // State to store the list of advertisements
    const [advertisements, setAdvertisements] = useState([
        { name: ' ', quantity: 0 }
    ]);

    // Handler function to update name
    const handleNameChange = (index, event) => {
        const newAdvertisements = [...advertisements];
        newAdvertisements[index].name = event.target.value;
        setAdvertisements(newAdvertisements);
    };

    // Handler function to update quantity
    const handleQuantityChange = (index, event) => {
        const newAdvertisements = [...advertisements];
        newAdvertisements[index].quantity = parseInt(event.target.value, 10) || 0;
        setAdvertisements(newAdvertisements);
    };

    // Handler function to add a new line with empty data
    const handleAddAdvertisement = () => {
        setAdvertisements([...advertisements, { name: '', quantity: 0 }]);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>DANH SÁCH QUẢNG CÁO</h2>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                {/* Button to add a new line */}
                <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }} onClick={handleAddAdvertisement}> + Thêm </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ul style={{ marginRight: '10px', flex: 1, listStyleType: 'none' }}>
                    {advertisements.map((advertisement, index) => (
                        <li key={index}>
                            Tên quảng cáo:
                            <input
                                type="text"
                                value={advertisement.name}
                                onChange={(event) => handleNameChange(index, event)}
                            />
                        </li>
                    ))}
                </ul>
                <ul style={{ marginLeft: '10px', flex: 1, listStyleType: 'none' }}>
                    {advertisements.map((advertisement, index) => (
                        <li key={index}>
                            Số lượng:
                            <input
                                type="number"
                                value={advertisement.quantity}
                                onChange={(event) => handleQuantityChange(index, event)}
                                min="0"
                            />

                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    );
};

export default AdvertisementList;