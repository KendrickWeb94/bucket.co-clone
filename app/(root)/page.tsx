import { ModeToggle } from "@/components/themes/theme-toggler";
import { Button } from "@/components/ui/button";
import { Companies } from "@/components/ui/companies";
import { Hero } from "@/components/ui/hero";
import { ChevronLeft } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <br></br>
      <Companies />
    </div>
  );
};

export default page;
