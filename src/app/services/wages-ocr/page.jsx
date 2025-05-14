import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DescriptionTab from "@/components/services/wages-ocr/DescriptionTab";
import TestEnvironmentTab from "@/components/services/wages-ocr/TestEnvironmentTab";

const PANCardOCR = () => {
  return (
    <div className="p-8 w-full ">
      <div className="text-2xl font-bold mb-4">Wages (Form W2) </div>

      <Tabs defaultValue="description">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="test">Test Environment</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <DescriptionTab />
        </TabsContent>
        <TabsContent value="test">
          <TestEnvironmentTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PANCardOCR;
