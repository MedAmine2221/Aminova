"use client";;
import { Card, CardHeader, CardBody } from "@heroui/react";

export default function Service({
  serviceImage,
  service
}: {
  serviceImage: React.ReactNode;
  service: String;
}) {

  return (
    <Card className="m-2 py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {serviceImage}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-black text-lg font-bold text-center">{service}</p>
      </CardBody>
    </Card>
  );
}