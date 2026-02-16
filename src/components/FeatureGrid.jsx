import { NavLink } from "react-router-dom";
import {
  HiOutlineCreditCard,
  HiOutlineCash,
  HiOutlineOfficeBuilding,
  HiOutlineSwitchHorizontal,
  HiOutlineCollection,
  HiOutlineShoppingBag,
  HiOutlineLocationMarker,
  HiOutlineRefresh,
} from "react-icons/hi";

const features = [
  {
    title: "İnvestisiya pul nişanları",
    icon: HiOutlineCollection,
    link: "/investisiya",
  },
  {
    title: "Onlayn sifarişlər",
    icon: HiOutlineShoppingBag,
    link: "/online-orders",
  },
  {
    title: "Kredit",
    icon: HiOutlineCash,
    link: "/credits",
  },
  {
    title: "Əmanət",
    icon: HiOutlineOfficeBuilding,
    link: "/deposits",
  },
  {
    title: "Plastik kartlar",
    icon: HiOutlineCreditCard,
    link: "/cards",
  },
  {
    title: "Xidmət tarifləri",
    icon: HiOutlineRefresh,
    link: "/tariffs",
  },
  {
    title: "Sürətli pul köçürmələri",
    icon: HiOutlineSwitchHorizontal,
    link: "/money-transfer",
  },
  {
    title: "Filial və bankomatlar",
    icon: HiOutlineLocationMarker,
    link: "/branches",
  },
];

const FeatureGrid = () => {
  return (
    <section className="w-full bg-[#F4F7FB] py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.title}
                to={item.link}
                className="
                  group
                  bg-white
                  rounded-2xl
                  p-6
                  flex
                  items-center
                  gap-4
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    text-primary
                    text-2xl
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon />
                </div>

                <span className="text-gray-900 font-medium text-sm md:text-base">
                  {item.title}
                </span>
              </NavLink>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;
