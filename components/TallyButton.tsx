import { Button } from "@nextui-org/react";
import Link from "next/link";

export const TallyButton = ({ label, }: { label: string }) => {
  return (
    <Link
      href={"#tally-open=mKLkVD&tally-emoji-text=👋&tally-emoji-animation=wave"}
    >
      <Button
        size="lg"
        className="font-medium bg-black text-white rounded-full"
      >
        {label}
      </Button>
    </Link>
  );
};
