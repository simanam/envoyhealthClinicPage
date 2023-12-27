// Assuming you have an icon component or you can replace these with actual icon components
import React from "react";

interface ServiceIconProps {
  name: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ name }) => (
  <span>{name}</span>
);

interface Service {
  name: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    name: "Free Exam",
    icon: <ServiceIcon name="📋" />,
  },
  {
    name: "Free Wifi",
    icon: <ServiceIcon name="📶" />,
  },
  {
    name: "Free Water",
    icon: <ServiceIcon name="💧" />,
  },
  {
    name: "Free Parking",
    icon: <ServiceIcon name="🚗" />,
  },
  {
    name: "Free Ground Transportation to Hotel",
    icon: <ServiceIcon name="🚌" />,
  },
  {
    name: "Free Phone Call",
    icon: <ServiceIcon name="📞" />,
  },
  {
    name: "Wheelchair Accessible",
    icon: <ServiceIcon name="♿" />,
  },
];

const ServicesList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 border border-gray-200 rounded"
        >
          {service.icon}
          <span className="text-sm">{service.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
