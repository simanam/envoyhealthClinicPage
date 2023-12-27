import MasterIcon from "./MasterIcon";
import VisaIcon from "./VisaIcon";
import CashIcon from "./CashIcon";
import CheckBookIcon from "./CheckBookIcon";
import HealthInsuranceIcon from "./HealthInsuranceIcon";

type PaymentIconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface PaymentMethod {
  name: string;
  Icon: PaymentIconComponent;
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "Visa",
    Icon: VisaIcon,
  },
  {
    name: "MasterCard",
    Icon: MasterIcon,
  },
  {
    name: "Cash",
    Icon: CashIcon,
  },
  {
    name: "Traveler's Check",
    Icon: CheckBookIcon,
  },
  {
    name: "Health Insurance",
    Icon: HealthInsuranceIcon,
  },
  // ... other payment methods
];

const PaymentMethods: React.FC = () => {
  return (
    <div className="flex justify-start items-center gap-12 p-4">
      {paymentMethods.map((method, index) => (
        <div key={index} className="group relative">
          <method.Icon className="h-8 w-8" />
          <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 bottom-full mb-2">
            {method.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
