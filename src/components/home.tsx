import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import TextDisplay from "./TextDisplay";
import RecordingInterface from "./RecordingInterface";
import ProgressTracker from "./ProgressTracker";

interface HomeProps {
  initialLanguage?: string;
  textData?: {
    originalText: string;
    pronunciationGuide: string;
    modernTranslation: string;
  };
}

const Home = ({
  initialLanguage = "Latin",
  textData = {
    originalText: "Arma virumque cano, Troiae qui primus ab oris",
    pronunciationGuide:
      "[AR-ma wi-RUM-kwe KA-no, TROY-yai kwi PRI-mus ab O-ris]",
    modernTranslation:
      "I sing of arms and the man, who first from the shores of Troy",
  },
}: HomeProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-start gap-8">
          <div className="flex-1 space-y-8">
            <div className="flex justify-start">
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageSelect={(lang) => setSelectedLanguage(lang)}
              />
            </div>

            <TextDisplay
              originalText={textData.originalText}
              pronunciationGuide={textData.pronunciationGuide}
              modernTranslation={textData.modernTranslation}
            />

            <RecordingInterface />
          </div>

          <div className="sticky top-8">
            <ProgressTracker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
