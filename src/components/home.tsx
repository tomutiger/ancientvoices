import React from "react";
import { Button } from "./ui/button";
import { Mic, PlayCircle, PenLine } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold">Ancient Voice</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "/login")}
            >
              LOG IN / SIGN UP
            </Button>
            <Button variant="outline" size="icon">
              <span className="sr-only">Language</span>
              EN
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <Button
              variant="ghost"
              className="relative py-4 px-1 font-medium text-primary"
              onClick={() => (window.location.href = "/record")}
            >
              <Mic className="w-4 h-4 mr-2" />
              Speak
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
            </Button>
            <Button
              variant="ghost"
              className="py-4 px-1 font-medium text-muted-foreground"
            >
              <PlayCircle className="w-4 h-4 mr-2" />
              Listen
            </Button>
            <Button
              variant="ghost"
              className="py-4 px-1 font-medium text-muted-foreground"
            >
              <PenLine className="w-4 h-4 mr-2" />
              Write
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground">
            Click <Mic className="w-4 h-4 inline mx-1 text-destructive" /> then
            read the sentence aloud
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-sm p-8 mb-8">
          <p className="text-xl text-center">
            Some of the above information has been adapted from AllRefer dot
            com.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <Button variant="outline" className="space-x-2">
            <span>Guidelines</span>
          </Button>
          <Button variant="outline" className="space-x-2">
            <span>Report</span>
          </Button>
          <div className="flex-1" />
          <Button variant="outline" className="space-x-2">
            <span>Skip</span>
          </Button>
          <Button
            className="space-x-2"
            onClick={() => {
              // Only redirect to login if the user wants to submit
              const { user } = useAuth();
              if (!user) {
                window.location.href = "/login";
              } else {
                // Handle submission
                console.log("Submitting recording...");
              }
            }}
          >
            <span>Submit</span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
