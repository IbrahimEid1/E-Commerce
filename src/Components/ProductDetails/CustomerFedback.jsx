import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { FedbackClients } from "./FedbackClients";

const CustomerFedback = () => {
  return (
    <div className="w-full py-6 min-h-screen flex flex-col gap-10 px-4 sm:px-8 lg:px-[100px] justify-center">
      {FedbackClients.map((item, index) => (
        <div
          className="w-full flex flex-col gap-8 justify-center"
          key={index}
        >
          {/* Header & rating */}
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4 w-full items-start sm:items-center justify-between">
              {/* Stars + user info */}
              <div className="flex flex-row gap-4 items-start sm:items-center">
                <h1 className="flex gap-1 h-[30px] sm:h-[50px] items-center">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      width={15}
                      className="fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </h1>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h1 className="text-[14px] leading-5 font-bold">
                    {item.title}
                  </h1>
                  <h1 className="text-xs leading-5 font-normal text-zinc-600">
                    {item.nameCustomer}
                  </h1>
                </div>
              </div>

              {/* Like / Dislike */}
              <div className="flex gap-3">
                <button className="border-[0.5px] border-zinc-600 w-[45px] sm:w-[55px] h-[28px] sm:h-[30px] flex items-center justify-center">
                  <ThumbsUp width={18} className="fill-zinc-600" />
                </button>
                <button className="border-[0.5px] border-zinc-600 w-[45px] sm:w-[55px] h-[28px] sm:h-[30px] flex items-center justify-center">
                  <ThumbsDown width={18} className="fill-zinc-600" />
                </button>
              </div>
            </div>

            {/* Content sections */}
            <div className="flex flex-col gap-4 w-full">
              <section className="w-full flex flex-col sm:flex-row sm:gap-16 sm:pl-10 lg:pl-32">
                <h6 className="text-[14px] font-normal text-zinc-400 min-w-[100px]">
                  {item.Advantages}
                </h6>
                <p className="text-[14px]">{item.AdvantagesContent}</p>
              </section>

              <section className="w-full flex flex-col sm:flex-row sm:gap-16 sm:pl-10 lg:pl-32">
                <h6 className="text-[14px] font-normal text-zinc-400 min-w-[100px]">
                  {item.DisAdvantages}
                </h6>
                <p className="text-[14px]">{item.DisAdvantagesContent}</p>
              </section>

              <section className="w-full flex flex-col sm:flex-row sm:gap-16 sm:pl-10 lg:pl-32">
                <h6 className="text-[14px] font-normal text-zinc-400 min-w-[100px]">
                  {item.Review}
                </h6>
                <p className="text-[14px] sm:pl-4 lg:pl-8">{item.RatePro}</p>
              </section>
            </div>
          </div>

          {/* Images */}
          <div className="w-full sm:w-[70%] lg:w-[50%] flex gap-2 flex-wrap">
            {item.images.img1 && (
              <img
                src={item.images.img1}
                alt="review"
                className="w-20 h-[96px] object-cover rounded"
              />
            )}
            {item.images.img2 && (
              <img
                src={item.images.img2}
                alt="review"
                className="w-20 h-[96px] object-cover rounded"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerFedback;
