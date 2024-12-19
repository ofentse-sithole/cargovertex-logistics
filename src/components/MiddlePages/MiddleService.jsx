import React, { useState } from "react";
import "./MiddleService.css"; // Assuming you have a CSS file for styling

const MiddleService = () => {
  const [distance, setDistance] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [vatAmount, setVatAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const stationaryAmount = 50; // Base fee
  const pricePerKm = 7; // Cost per kilometer
  const additionalCharge = 200; // Additional charge for every 5km over 20km
  const vatRate = 0.15; // VAT (15%)

  const handleCalculate = () => {
    let baseFee = stationaryAmount + distance * pricePerKm;

    // Apply additional charges for distances over 20km
    if (distance > 20) {
      const extraDistance = distance - 20;
      const extraCharges = Math.ceil(extraDistance / 5) * additionalCharge;
      baseFee += extraCharges;
    }

    const vat = baseFee * vatRate; // Calculate VAT
    const totalAmount = baseFee + vat; // Total amount (delivery fee + VAT)

    // Update state values
    setDeliveryFee(baseFee.toFixed(2));
    setVatAmount(vat.toFixed(2));
    setTotal(totalAmount.toFixed(2));
  };

  return (
    <div className="service-page">

      <h2>Distance Travelling</h2>
      <p>
        At CargoVertex, we pride ourselves on offering reliable
        transportation and logistics services across all nine
        provinces of South Africa. Whether you're moving goods
        locally or across provincial borders, we ensure safe and
        timely deliveries tailored to your needs. For shorter
        distances, we provide free delivery within a 20km range
        from our Gauteng base, making local transportation
        hassle-free and cost-effective.
      </p>

      <p>
        For distances beyond 20km, a nominal delivery fee is applied
        to ensure continued efficiency and reliability. An additional
        charge of R200 is added for every 5km beyond the 20km free
        range, providing a transparent and straightforward pricing
        structure. At CargoVertex, we are committed to delivering
        exceptional service while maintaining affordability for our clients.
      </p>
      <br />
      <br />

      <h2>Vehicle Rental Services</h2>
      <p>We offer a variety of vehicles for rental to deliver your packages safely and efficiently.</p>
      <h3>Our Vehicles</h3>
      <div className="gallery">
        <img src="/h-100-transparent.png" alt="Vehicle 1" />
        <img src="/Mercedes-Benz-1.jpeg" alt="Vehicle 2" />
      </div>

      <br />
      <br />
      <h3>Calculate Your Delivery Cost</h3>
      <div className="calculator">
        <label htmlFor="distance">Enter distance (in km):</label>
        <input
          type="number"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
        />
        <button onClick={handleCalculate}>Calculate</button>
        {total > 0 && (
          <div className="total">
            <p>Delivery Fee: R{deliveryFee}</p>
            <p>VAT (15%): R{vatAmount}</p>
            <p>Total Cost: R{total}</p>
          </div>
        )}
      </div>

      
      
    </div>
  );
};

export default MiddleService;
