import React from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface LanguageSelectorProps {
  selectedLanguage?: string;
  onLanguageSelect?: (language: string) => void;
  languages?: Array<{ id: string; name: string }>;
}

const LanguageSelector = ({
  selectedLanguage = "Latin",
  onLanguageSelect = () => {},
  languages = [
    { id: "latin", name: "Latin" },
    { id: "ancient-greek", name: "Ancient Greek" },
    { id: "old-norse", name: "Old Norse" },
  ],
}: LanguageSelectorProps) => {
  return (
    <div className="w-[300px] bg-background p-4 rounded-lg border">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {selectedLanguage}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px]">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.id}
              onClick={() => onLanguageSelect(language.id)}
              className="flex items-center justify-between"
            >
              {language.name}
              {selectedLanguage === language.name && (
                <Check className="h-4 w-4" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
