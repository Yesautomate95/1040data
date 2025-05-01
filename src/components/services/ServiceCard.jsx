import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const ServiceCard = ({ title, content }) => {
  return (
    <Card
      className={
        "pb-0  pt-3 gap-2 hover:cursor-pointer hover:shadow-lg  max-w-xs  bg-[#C2D5E4]"
      }
    >
      <CardHeader className={"px-3 pt-2"}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className={"px-3"}>
        <p className="line-clamp-3 text-sm">{content}</p>
      </CardContent>
      <CardFooter className={"bg-accent p-4"}>
        <div className="flex justify-between w-full">
          <p className=" text-green-500 text-sm font-bold">Status: Active</p>
        </div>
        <div className="flex justify-end">
          <Button size="sm" className="btn btn-primary rounded-full">
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
