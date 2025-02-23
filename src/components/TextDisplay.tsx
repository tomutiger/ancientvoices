import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface TextDisplayProps {
  originalText?: string;
  pronunciationGuide?: string;
  modernTranslation?: string;
}

const TextDisplay = ({
  originalText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  pronunciationGuide = "[loh-rem ip-sum doh-lor sit ah-met, kon-sek-te-tur ah-di-pi-sking e-lit]",
  modernTranslation = "The quick brown fox jumps over the lazy dog.",
}: TextDisplayProps) => {
  return (
    <div className="w-full max-w-[800px] bg-background">
      <Card>
        <CardHeader>
          <CardTitle>Text for Recording</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="original" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="original">Original Text</TabsTrigger>
              <TabsTrigger value="pronunciation">Pronunciation</TabsTrigger>
              <TabsTrigger value="translation">Translation</TabsTrigger>
            </TabsList>
            <TabsContent value="original" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-serif leading-relaxed">
                    {originalText}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pronunciation" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-mono leading-relaxed">
                    {pronunciationGuide}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="translation" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed">{modernTranslation}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextDisplay;
