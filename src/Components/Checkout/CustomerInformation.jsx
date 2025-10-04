import { useState } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
import { Country, City } from "country-state-city";
function CustomerInformation() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const options = countryList().getData();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const countryOptions = Country.getAllCountries().map((c) => ({
    value: c.isoCode,
    label: c.name,
    flag: c.flag,
  }));

  const cityOptions = selectedCountry
    ? City.getCitiesOfCountry(selectedCountry.value)?.map((city) => ({
        value: city.name,
        label: city.name,
      }))
    : [];

  return (
    <div className="w-full  p-6 bg-white rounded-lg  outline-none border-none">
      {/* Customer Information */}
      <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
      <div className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full  rounded p-2 outline-none border-[0.5px] border-gray-300"
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2  rounded p-2 outline-none border-[0.5px] border-gray-300"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 outline-none border-[0.5px] border-gray-300 rounded p-2 "
          />
        </div>
      </div>

      {/* Shipping Address */}
      <h2 className="text-lg font-semibold mt-8 mb-4">Shipping Address</h2>
      <div className="space-y-4">
        <label className="block mb-2 font-semibold">Country</label>
        <Select
          options={countryOptions}
          value={selectedCountry}
          onChange={(val) => {
            setSelectedCountry(val);
            setSelectedCity(null);
          }}
        />
        <label className="block mb-2 font-semibold">City</label>
        <Select
          options={cityOptions}
          value={selectedCity}
          onChange={setSelectedCity}
          isDisabled={!selectedCountry}
        />
        <label className="block mb-2 font-semibold">Address</label>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full outline-none border-[0.5px] border-gray-300 rounded p-2"
        />
        <label className="block mb-2 font-semibold">phone</label>

        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full outline-none border-[0.5px] border-gray-300 rounded p-2"
        />
      </div>
    </div>
  );
}
export default CustomerInformation;
