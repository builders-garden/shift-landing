import { TallyButton } from "@/components/TallyButton";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import * as SolarIconSet from "solar-icon-set";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 text-black bg-white  bg-gradient-to-b from-cyan-100/30 via-10% via-amber-100/50 to-25% to-white">
      <div className="flex flex-row w-full items-center justify-center lg:items-left lg:justify-between lg:flex">
        <Image src={"/images/logo.svg"} height={50} width={100} alt="logo" />
        <div className=" hidden sm:block">
          <TallyButton label="Get started" />
        </div>
      </div>
      <div className="h-screen flex flex-col gap-4 items-center justify-center">
        <div className="text-6xl lg:text-8xl text-center font-black">
          Lower Fees. Higher Profits. Loyal Customers.
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <TallyButton label="Get started" />
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center lg:my-auto gap-16 lg:gap-36 mx-4 lg:mx-48">
        <div className="text-2xl lg:text-4xl text-center font-bold">
          Shift offers an innovative and convenient POS for merchants
        </div>
        <div className="flex lg:flex-row flex-col gap-12 lg:gap-36 items-center justify-evenly text-center">
          <div className="flex flex-col gap-2 lg:gap-16 items-center justify-center">
            <div className="block lg:hidden">
              <SolarIconSet.Tuning size={40} />
            </div>
            <div className="hidden lg:block">
              <SolarIconSet.Tuning size={100} />
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="text-lg lg:text-2xl  font-semibold">
                Easy to Setup
              </div>
              <div className="text-md lg:text-lg">
                No additional device required. Customers pay scanning your Shift
                QRCode.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-16 items-center justify-center">
            <div className="block lg:hidden">
              <SolarIconSet.GraphNewUp size={40} />
            </div>
            <div className="hidden lg:block">
              <SolarIconSet.GraphNewUp size={100} />
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="text-lg lg:text-2xl font-semibold">
                Higher Margins
              </div>
              <div className="text-md lg:text-lg">
                Traditional solutions get 2-4% fee. Shift cuts them down to 1%.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-16 items-center justify-center">
            <div className="block lg:hidden">
              <SolarIconSet.Shop size={40} />
            </div>
            <div className="hidden lg:block">
              <SolarIconSet.Shop size={100} />
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="text-lg lg:text-2xl  font-semibold">
                Attract More Customers
              </div>
              <div className="text-md lg:text-lg">
                Join the growing network of merchants who accept payments with
                Shift.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center lg:my-auto gap-16 lg:gap-36 mx-4 lg:mx-48">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-2xl lg:text-4xl font-bold text-center">
            How does it work
          </div>
          <div className="text-md lg:text-lg text-center">
            Shift lets your customers pay with EURC, a secure digital euro
            benefiting the speed of the internet. You can use EURC just like you
            would any euro – send and receive payments globally, or to save and
            earn on your money.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-36 items-center justify-evenly">
          <div className="flex flex-col gap-2 lg:items-start lg:justify-start items-center justify-center">
            <div className="text-2xl font-semibold text-center lg:text-left">
              Receive payments in EURC
            </div>
            <div className="lg:text-lg lg:max-w-96 text-center lg:text-left">
              Customers scan a QRCode and pay you with EURC. You can track
              payments on your dashboard.
            </div>
          </div>
          <Image
            src="/images/transactions.png"
            alt="transactions"
            className="border-2 border-gray-200 rounded-lg w-96"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-36 items-center justify-evenly">
          <Image
            src="/images/transfer.png"
            alt="transactions"
            className="border-2 border-gray-200 rounded-lg w-96"
          />
          <div className="flex flex-col gap-2 items-center justify-center lg:items-end lg:justify-end">
            <div className="text-2xl font-semibold text-center lg:text-right">
              Convert EURC to EURO
            </div>
            <div className="lg:text-lg lg:max-w-96 text-center lg:text-right">
              You can then transfer your EURC balance to your bank account in
              EURO, it requires only 1-click!
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center lg:py-72 my-auto gap-36">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-4xl font-bold text-center">
            Want to learn more?
          </div>
          <TallyButton label="Let's chat" />
        </div>
      </div>
    </main>
  );
}
