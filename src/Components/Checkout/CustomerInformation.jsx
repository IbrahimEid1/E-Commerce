import { useContext, useState } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
import { Country, City } from "country-state-city";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/ContextCart";
import useOrderCustomer from "../../hooks/OrderCustomer";
import { useNavigate } from "react-router-dom";

function CustomerInformation() {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const { cartCount,setActive, setNewOrder,selectedPayment , selectedShipping
  } = useContext(CartContext);
  const options = countryList().getData();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const Navigate = useNavigate()

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
const onSubmit = (data) => {
  
  const newCustomer = {
    ...data,
    
    country: selectedCountry?.label,
    city: selectedCity?.label,
    phone: Number(data.phone),
    TypePay: selectedPayment,
    TypeShipping: selectedShipping
  };
  console.log(data) ,
  
  setNewOrder({
    data: {
      firstName: newCustomer.firstName,
      lastName: newCustomer.lastName,
      email: newCustomer.email,
      phone: newCustomer.phone,
      address: newCustomer.address,
      country: newCustomer.country,
      city: newCustomer.city,
      categories: cartCount.map((item) => item.id),
      TypePay: newCustomer.TypePay,
      TypeShipping: newCustomer.TypeShipping
    },
  }); 
  setActive("ShippingPayment")
  console.log("✅ New Customer Data:", newCustomer);
};


  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Checkout Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* CUSTOMER INFO */}
        <section>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Customer Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">First Name</label>
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Last Name</label>
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                type="Number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("phone", { required: "Please Enter Your Phone" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </section>

        {/* SHIPPING ADDRESS */}
        <section>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Shipping Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Country</label>
              <Select
                options={countryOptions}
                value={selectedCountry}
                onChange={(val) => {
                  setSelectedCountry(val);
                  setSelectedCity(null);
                }}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">City</label>
              <Select
                options={cityOptions}
                value={selectedCity}
                onChange={setSelectedCity}
                isDisabled={!selectedCountry}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Address</label>
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>
          </div>
        </section>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerInformation;
