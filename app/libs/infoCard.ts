import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from 'lucide-react';

interface IInfoCard {
  title: string;
  icon: LucideIcon;
  bodyText: string;
  id: number;
}

const infoCards: IInfoCard[] = [
  {
    title: "Increased Sales",
    bodyText: "Sales fkdfjsdl fjldkfjsdl jdfjsdl",
    icon: ArrowUpNarrowWide,
    id: 1,
  },
  {
    title: "No Time Wasted",
    bodyText: "Sales fkdfjsdl fjldkfjsdl jdfjsdl",
    icon: AlarmClockOff,
    id: 2,
  },
  {
    title: "Decreased Churn",
    bodyText: "Sales fkdfjsdl fjldkfjsdl jdfjsdl",
    icon: ArrowDownNarrowWide,
    id: 3,
  },
]

export default infoCards;