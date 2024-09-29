import React, { useState } from "react";
import { Button } from "./components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "./components/ui/navigation-menu"; // Adjust the import paths as necessary
import { ModeToggle } from "./components/mode-toggle"; // Adjust the import path as necessary
import { Slider } from "./components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Textarea } from "./components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "./components/ui/select";
import {
  convertFromASCII,
  convertFromBinary,
  convertFromHex,
} from "./components/converters";
import { ThemeProvider } from "./components/ui/theme-provider";
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className={"App dark:bg-dark-500 dark:text-white"}>
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Tabs for Identifier and Converter */}
        <TabsContainer />
        <AccordianList />
      </div>
    </ThemeProvider>
  );
}

const NavigationBar = () => (
  <NavigationMenu className="main-navbar max-w-screen-2xl flex flex-wrap justify-between p-4 shadow-lg w-full">
    <div className="flex items-center">
      <img src="logo.svg" alt="Logo" className="h-8 w-8 mr-2 text-white" />
      <span className="text-xl font-bold text-white dark:text-white">
        Cipherion
      </span>
    </div>
    <div className="flex items-center ml-auto space-x-4 pr-16">
      <NavigationMenu className="">
        <NavigationMenuList className="flex space-x-4 text-white dark:text-white items-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-primary hover:text-secondary dark:text-primary-foreground dark:hover:text-primary-foreground">
              <NavigationMenuLink href="#">About</NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-primary hover:text-secondary dark:text-primary-foreground dark:hover:text-primary-foreground">
              <NavigationMenuLink href="#">Services</NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-primary hover:text-secondary dark:text-primary-foreground dark:hover:text-primary-foreground">
              <NavigationMenuLink href="#">Contact</NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </div>
  </NavigationMenu>
);

const TabsContainer = () => (
  <Tabs defaultValue="identifier" className="p-4">
    <TabsList className="flex space-x-4">
      <TabsTrigger value="identifier">Identifier</TabsTrigger>
      <TabsTrigger value="converter">Converter</TabsTrigger>
    </TabsList>
    <TabsContent value="identifier">
      <IdentifierTabContent />
    </TabsContent>
    <TabsContent value="converter">
      <ConverterTabContent />
    </TabsContent>
  </Tabs>
);

const IdentifierTabContent = () => (
  <div>
    <div className="mb-4">
      <label
        htmlFor="ciphertext"
        className="block text-sm font-medium dark:text-white"
      >
        Enter Ciphertext
      </label>
      <Textarea
        id="ciphertext"
        className="mt-1 block w-full dark:bg-dark-500 dark:text-white"
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="accuracy"
        className="block text-sm font-medium dark:text-white"
      >
        Accuracy Filter
      </label>
      <div className="flex justify-between text-sm text-gray-600 dark:text-white py-3">
        <span className="pl-1">0</span>
        <span className="pl-2">25</span>
        <span className="pl-2">50</span>
        <span>75</span>
        <span>100</span>
      </div>
      <Slider
        id="accuracy"
        min={0}
        max={100}
        step={25}
        defaultValue={[50]}
        className="mt-1"
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="module"
        className="block text-sm font-medium dark:text-white"
      >
        Choose Module:
      </label>
      <Select>
        <SelectTrigger className="w-full mt-1 dark:bg-dark-500 dark:text-white">
          <SelectValue placeholder="Choose Module" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="module1">Analyze Ciphertext</SelectItem>
          <SelectItem value="module2">Analyze + Decode</SelectItem>
          <SelectItem value="module3">Module 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <Button
      variant="secondary"
      size="lg"
      className="mt-4 bg-primary dark:bg-secondary text-white"
      onClick={() => identify()}
    >
      Analyze
    </Button>
    <div className="mt-4">
      <label
        htmlFor="result"
        className="block text-sm font-medium dark:text-white"
      >
        Result
      </label>
      <Textarea
        id="result"
        className="mt-1 block w-full dark:bg-dark-500 dark:text-white"
        readOnly
        value="Module 1: with accuracy 50"
      />
    </div>
  </div>
);

const identify = () => {
  return <div>Hello</div>;
};
const ConverterTabContent: React.FC = () => {
  const [ascii, setAscii] = useState<string>("");
  const [binary, setBinary] = useState<string>("");
  const [hex, setHex] = useState<string>("");

  const handleAsciiChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setAscii(value);
    convertFromASCII(value, setBinary, setHex);
  };

  const handleBinaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setBinary(value);
    convertFromBinary(value, setAscii, setHex);
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setHex(value);
    convertFromHex(value, setAscii, setBinary);
  };

  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="input1"
          className="block text-sm font-medium dark:text-white"
        >
          Input Text 1 (ASCII)
        </label>
        <Textarea
          id="input1"
          className="mt-1 block w-full dark:bg-dark-500 dark:text-white"
          placeholder="ABC ..."
          value={ascii}
          onChange={handleAsciiChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input2"
          className="block text-sm font-medium dark:text-white"
        >
          Input Text 2 (Binary)
        </label>
        <Textarea
          id="input2"
          className="mt-1 block w-full dark:bg-dark-500 dark:text-white"
          placeholder="01000001 01000010 01000011 ..."
          value={binary}
          onChange={handleBinaryChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input3"
          className="block text-sm font-medium dark:text-white"
        >
          Input Text 3 (Hex)
        </label>
        <Textarea
          id="input3"
          className="mt-1 block w-full dark:bg-dark-500 dark:text-white"
          placeholder="41 42 43 ..."
          value={hex}
          onChange={handleHexChange}
        />
      </div>
    </div>
  );
};

const AccordianList = () => (
  <Accordion
    type="single"
    collapsible
    className="w-full p-4 dark:bg-dark-500 dark:text-white"
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>What can it do?</AccordionTrigger>
      <AccordionContent>Not a lot currently.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How it works?</AccordionTrigger>
      <AccordionContent>Using AI!!!</AccordionContent>
    </AccordionItem>
  </Accordion>
);
export default App;
