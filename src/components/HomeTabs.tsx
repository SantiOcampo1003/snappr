'use client';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";
import Prompt from "./Prompt";
import ImageGenerate from "./ImageGenerate"

export default function HomeTabs() {
  const [activeTab, setActiveTab] = React.useState("prompt");
  const data = [
    {
      label: "Prompt Generator",
      value: "prompt",
      desc: <Prompt />,
    },
    {
      label: "Image Generator",
      value: "image-generator",
      desc: <ImageGenerate />,
    }]
  return (
    <Tabs value={activeTab}className="p-10">
      <TabsHeader
        indicatorProps={{
          className: "",
        }} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            {label}
          </Tab>
        ))}
      </TabsHeader >
      <TabsBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}


