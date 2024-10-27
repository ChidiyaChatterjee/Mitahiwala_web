import Image from "../../assets/uilover.png";
import Image1 from "../../assets/support.png";
import Image3 from "../../assets/delivery.png";
//import Image4 from "../../assets/delivery.png";
import Image5 from "../../assets/quality.png";
import { Tabs } from "./ui";

export function TabsDemo() {
  const tabs = [
    {
      title: "Ui Lovers",
      value: "ui lovers",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#ffe7c2]">
          <p>UI</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Support",
      value: "support",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#ffe7c2]">
        <p>Support</p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Delivery",
      value: "delivery",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#ffe7c2]">
          <p>Delivery</p>
          <DummyContent3 />
        </div>
      ),
    },
    // {
    //   title: "Smoothness",
    //   value: "smoothness",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#ffe7c2]">
    //       <p>Smoothness</p>
    //       <DummyContent4 />
    //     </div>
    //   ),
    // },
    {
      title: "Quality",
      value: "quality",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#ffe7c2]">
          <p>Quality</p>
          <DummyContent5 />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[10rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src={Image}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent1 = () => {
  return (
    <img
      src={Image1}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent3 = () => {
  return (
    <img
      src={Image3}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
// const DummyContent4 = () => {
//   return (
//     <img
//       src={Image4}
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };
const DummyContent5 = () => {
  return (
    <img
      src={Image5}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};